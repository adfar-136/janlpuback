const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const Registraion = require("./models/Event")
const bcrypt = require("bcrypt")
const app = express();
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/lpuuuu").then(()=>{
    console.log("connected to db")
})
app.get("/",(req,res)=>{
    console.log("Hello welcome to my first mern application")
})
app.post("/register",async(req,res)=>{
    const {username,email,password} = req.body;
    const hashPassword = await bcrypt.hash(password,10)
    const newUser = new User({
        username:username,
        email:email,
        password:hashPassword
    })
    await newUser.save();
    return res.json({message:"User registered succesfully"})
})
app.post("/register-event",(req,res)=>{
    const {username,event,date} =  req.body;
    const newRegistration = new Registraion({
        username,event,date
    })
    newRegistration.save()
    return res.json({message:"Registration done"})
})
app.post("/login",async (req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(401).json({message:"Invalid passsword"})
    }
    return res.status(200).json({message:"User Logged In successfully"})

})
app.get("/order",(req,res)=>{
    
})
app.listen(4000,()=>{
    console.log("listening to port 4000")
})