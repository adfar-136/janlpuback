const express = require("express");
const app = express()

app.get("/students",(req,res)=>{
  res.send("get request")
})
app.post("/students",(req,res)=>{
    res.send("post request")
})
app.put("/students",(req,res)=>{
    res.send("put request")
})
app.patch("/students",(req,res)=>{
    res.send("patch request")
})
app.delete("/students",(req,res)=>{
    res.send("delete request")
})
app.listen(4000,()=>{
 console.log("listening to port 4000")
})