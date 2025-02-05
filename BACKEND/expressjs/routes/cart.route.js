const express = require("express");
const cartRouter = express.Router()

cartRouter.use((req,res,next)=>{
    console.log("cart router middle executed");
    next()
})

cartRouter.get("/",(req,res)=>{
    res.send("These are your products")
})

cartRouter.get("/checkout",(req,res)=>{
    res.send("Payment succcessful")
})
module.exports = cartRouter;