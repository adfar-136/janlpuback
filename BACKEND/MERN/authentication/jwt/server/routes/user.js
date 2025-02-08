const express = require("express");
const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const router = express.Router()

router.post("/signup",async(req,res)=>{
    const {username,email,password} = req.body;
   const user = await UserModel.findOne({email});
   if(user) { 
    return res.status(400).json({message:"Email already exists"})
   }
  const hashedPass = await bcrypt.hash(password,10);
  const newUser = new UserModel({
    username:username,
    email:email,
    password:hashedPass
  })
  await newUser.save();
  return res.status(201).json({status:true,message:"User Registered Successfully"})
})
router.post("/signin",async(req,res)=>{
    const {email,password} = req.body;
    const user = await UserModel.findOne({email});
    if(!user){
        return res.status(400).json({message:"User does not exist"})
    }
    const validPassword = await bcrypt.compare(password,user.password);
    if(!validPassword){
        return res.status(401).json({message:"Invalid Password"})
    }
    const token = jwt.sign({email:user.email},"jwtkey",{expiresIn:"4h"});
    res.cookie("token",token)
    return res.json({status:true,message:"User Logged In",token})
})

const verifyUser = async(req,res,next)=>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.json({status:false,message:"Authentication Failed"})
        }
        const user = await jwt.verify(token,"jwtkey");
        req.user = user;
        next()
    } catch (error) {
        return res.status(401).json({message:"Authentication failed"})
    }
}

router.get("/profile",verifyUser,async(req,res)=>{
    const user = await UserModel.findOne({email:req.user.email})
    return res.json({staus:true,message:"Authentication successful",user:user})
})

router.get("/logout",(req,res)=>{
    res.clearCookie("token");
    return res.json({status:true,message:"Logged out successfully"})
})

module.exports = router;