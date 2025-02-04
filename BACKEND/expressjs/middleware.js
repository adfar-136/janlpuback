const express = require("express");

const app = express();

app.use((req,res,next)=>{
    console.log(`Request Url is : ${req.url}`)
    console.log(`Request Method is : ${req.method}`)
    console.log(`Request Time is : ${new Date()}`);
    next()
})
app.use("/admin",(req,res,next)=>{
    console.log("Admin middleware called");
    next()
})
app.get("/",(req,res)=>{
    res.send("Heelo world")
})
app.get("/admin",(req,res)=>{
    res.send("admin accesses")
})
app.get("/about",(req,res)=>{
    res.send("Heelo world")
})
app.listen(4000,(req,res)=>{
    console.log("listening to 4000 port")
})