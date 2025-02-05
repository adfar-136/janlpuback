const express = require("express");
const fs= require("fs");
const path = require("path");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors())
const userfilePath = path.join(__dirname,"users.json")

const getUsers =()=>{
    if(!fs.existsSync(userfilePath)) return [];
    return JSON.parse(fs.readFileSync(userfilePath,"utf-8"))
}

const saveUsers = (users)=>{
    fs.writeFileSync(userfilePath,JSON.stringify(users))
}

app.post("/signup",(req,res)=>{
    const {username,password} = req.body;
    let users = getUsers()
    const user = users.find((item)=>item.username === username);
    if(user){
        return res.status(400).json({message:"User Already Exists"})
    }
    users.push({username,password});
    saveUsers(users)
    res.status(201).json({message:"User registered successfully"})
})
app.post("/login",(req,res)=>{
    const {username,password} = req.body;
    let users = getUsers()
    console.log(users)
    let user = users.find(item => item.username === username  && item.password === password)
    console.log(user)
    if(user){
        return res.status(200).json({message:"User logged in"})
    } else {
        return res.status(401).json({message:"invalid credentials"})
    }
})
app.listen(5000,(req,res)=>{
    console.log("listenning to port 5000")
})