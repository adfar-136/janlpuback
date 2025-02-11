import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import {User,Role, UserRole} from "../../models/index.js"
import fetchRolesAndPermissions from "../../helpers/fetchRolesandPermissions.js";
import verifyToken from "../../middlewares/authenticate.js"
const router = express.Router()
router.get("/",verifyToken,async (req,res)=>{
    const data = await fetchRolesAndPermissions(req);
    return res.status(200).json({status:"Authenticated",...data})
})
router.post("/register",async (req,res)=>{
    try {
        const {username,password} = req.body;
        const hashedPassword = await bcrypt.hash(password,10)
        const user = new User({username,password:hashedPassword});
        const {_id:userId} = await user.save();
        const {_id:roleId} = await Role.findOne({role:"Standard"})
        await new UserRole({
            userId,
            roleId
        }).save();
        res.status(201).json({message:"User Registered Successfully"})
    } catch (error) {
        res.status(500).json({error:"Registration Failed"})
    }
})
router.post("/login",async(req,res)=>{
  
        const {username,password} = req.body;
        const user = await User.findOne({username});
        if(!user){
            return res.status(401).json({error:"User not registered"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({error : "Password Incorrect"})
        }
        req.user = {
            _id:user._id
        }
        const token = jwt.sign({userId:user._id,userName:user.username},process.env.JWT_SECRET,{expiresIn:"2h"})
        const data = await fetchRolesAndPermissions(req);
        console.log("data", data)
        res.status(200).json({token,...data})
    
})
export default router
