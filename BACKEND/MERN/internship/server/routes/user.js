const express = require("express");
const bcrypt = require("bcrypt");
const auth = require("../middlewares/auth")
const jwt = require("jsonwebtoken")
const UserModel = require("../models/user");
const appliedOppurtunity = require("../models/applied")
const router = express.Router()

router.post("/signup",async(req,res)=>{
 const {username,email,password} = req.body;
 const user = await UserModel.findOne({email});
 if(user){
    return res.status(400).json({message:"Email already registered"})
 }
 const hashedPass = await bcrypt.hash(password,10);
 const newUser = new UserModel({
    username,
    email,
    password:hashedPass
 })
 await newUser.save()
 return res.status(201).json({status:true,message:"User Registered Successfully"})
});
router.post("/login",async(req,res)=>{
   const {email,password} = req.body;
   const user = await UserModel.findOne({email});
   if(!user){
      return res.status(400).json({message:"User Not Found"})
   }
   const passwordCheck =  await bcrypt.compare(password,user.password)
   if(!passwordCheck){
      return res.status(401).json({message:"Invalid password"})
   }
   const token =  jwt.sign({email:user.email},"secret",{expiresIn:"4h"});
   res.cookie("token",token);
   return res.json({status:true,message:"Login successfull",token})
})

router.post("/apply",auth,async (req,res)=>{
   try {
      console.log(req.user)
      const {oppurtunity} = req.body;
      console.log(oppurtunity)
      const newappliedOppurtunity = new appliedOppurtunity({
         userId:req.user.email,
         id:oppurtunity.id,
         profile_name :oppurtunity.profile_name,
         stipend : oppurtunity.stipend.salary,
         company_name: oppurtunity.company_name,
         duration:oppurtunity.duration
      })
      await newappliedOppurtunity.save();
      res.status(201).json({message:"Oppurtunity applied successfully"})
   } catch (error) {
      res.status(500).json({error:"Internal server Error"})
   }

})
router.get("/applied-oppurtunities",auth,async(req,res)=>{
   try {
      const appliedOppurtunities = await appliedOppurtunity.find({userId:req.user.email});
     return  res.json(appliedOppurtunities)
   } catch (error) {
      return res.status(500).json({message:"Internal server Error"})
   }
})
router.get("/verify",auth,(req,res)=>{
   try {
      if(!req.user){
         return res.status(401).json({status:false,message:"Unaothorized"})
      }
      return res.status(200).json({status:true,message:"Authentication successfull",user:req.user})
   } catch (error) {
      return res.status(500).json({status:false,message:"server error"})
   }
})
router.get("/logout",(req,res)=>{
   res.clearCookie("token")
   return res.json({status:true,message:"logged out successfully"})
})
module.exports= router