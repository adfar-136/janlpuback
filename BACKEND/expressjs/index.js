const express = require("express");
const app = express();

// app.set("view engine","ejs")
// app.get("/",(req,res)=>{
//     res.render("index",{
//         name:"Adfar Rasheed",
//         age:25
//     })
// })
// app.get("/about",(req,res)=>{
//     const users = ["Adfar","Shivam","Reddy"]
//     res.render("about",{users})
// })

app.set("view engine","hbs")

app.get("/",(req,res)=>{
    res.render("index",{
        name:"Adfar Rasheed",
        age:28,
        data:["HTML","CSS","JS","REact"]
    })
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.listen(4000,()=>{
    console.log("Listening to port 4000")
})