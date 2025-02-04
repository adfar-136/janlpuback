var express = require("express");
var app = express();

app.get("/",(req,res)=>{
    // res.write("This is my first express app \n")
    // res.write("This is my first express app \n")
    res.send("<h1>Adfar Rasheed</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>I am About page</h1>")
})
// app.get("/contact",(req,res)=>{
//     res.send("<h1>I am a contact page</h1>")
// })
app.get("/contact/:id",(req,res)=>{
    let id = req.params.id;
    res.send(`<h1>User ID : ${id} </h1>`)
})
app.get("/contact",(req,res)=>{
    let obj = req.query;
    res.send(`<h1> My name is ${obj.name} and my phone number is ${obj.ph} and i am from ${obj.country}`)
})
app.get("*",(req,res)=>{
    res.end("<h1>Error Page</h1>")
})
app.listen(4000,()=>{
    console.log("Listening to port 4000")
})