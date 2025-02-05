const express = require("express");
const adminRouter = express.Router();
adminRouter.get("/dashboard",(req,res)=>{
    res.send("Hello Welcome to your Dashboard")
})


module.exports = adminRouter