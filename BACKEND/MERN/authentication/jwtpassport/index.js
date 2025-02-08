const express = require("express");
const userModel = require("./database");
const UserModel = require("./database");
const { hashSync, compareSync } = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
require("./passport")
const app = express()
app.use(express.json());
app.use(passport.initialize())
// app.use(express.urlencoded({extended:true}))
app.post("/register",(req,res)=>{
    const user = new UserModel({
        username:req.body.username,
        password:hashSync(req.body.password,10)
    })
    user.save().then(user=>{
        res.json({
            success:true,
            message:"User created successfully",
            user:{
                id:user.id,
                username:user.username
            }
        })
    }).catch(err=>{
        res.json({
            success:false,
            message:"Something went wrong",
            error:err
        })
    })
})
app.post("/login",(req,res)=>{
    userModel.findOne({username:req.body.username}).then(user =>{
        if(!user){
            return res.status(401).json({
                success:false,
                message:"Could not find the user"
            })
        }
        if(!compareSync(req.body.password,user.password)){
            return res.status(401).json({
                success:false,
                message:"Incorrect Password"
            })
        }
      const payload = {
        username :user.username,
        id:user.id
      }
      const token = jwt.sign(payload,"secretkey",{expiresIn:"1d"})
      return res.status(200).json({
        success:true,
        message:"logged in successfully",
        token :"Bearer "+ token
      })
    })
})
app.get('/profile', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.status(200).json({
            success:true,
            message:"profile accessed"
        })
    }
);
app.listen(5000,()=>{
    console.log("listening to port 5000")
})