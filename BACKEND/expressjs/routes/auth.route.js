const express = require("express");
const authRouter = express.Router();

authRouter.get("/",(req,res)=>{
    res.send("USer details")
})
authRouter.get("/signup",(req,res)=>{
    res.send("User created successfully")
})
authRouter.get("/signin",(req,res)=>{
    res.send("USer Logged In")
})

module.exports = authRouter