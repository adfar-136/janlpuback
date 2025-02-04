const express = require("express");
const fs = require("fs");
const path = require("path")
const app = express();
const staticPath = path.join(__dirname,"public")
app.use(express.static(staticPath))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
})

app.get("/about",(req,res)=>{
 res.sendFile(path.join(__dirname,"public","about.html"))
})

// app.get("/:f",(req,res)=>{
//     res.sendFile(path.join(__dirname,"public",req.params.f));
//     })
app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","contact.html"))
})
app.listen(5000,()=>{
    console.log("listening to port 5000")
})