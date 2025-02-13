const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const router = require("./routes/qart/index")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/verse",router)
mongoose.connect(config.mongoose.url).then(()=>{
    console.log("connect to mongodb")
})
app.get("/",(req,res)=>{
    res.send("Hello welcome to Cart Project")
})
app.listen(config.port,()=>{
    console.log("listening to port 8082")
})