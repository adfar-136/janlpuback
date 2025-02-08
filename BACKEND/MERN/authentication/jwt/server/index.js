const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user");
const cookieParser = require("cookie-parser")
const app = express();
app.use(express.json());
app.use(cookieParser())
app.use("/auth",router)
mongoose.connect("mongodb://localhost:27017/jwtlpu").then(()=>{
    console.log("connect to mongodb")
})
app.listen(4000,()=>{
    console.log("Listening to port 4000")
})