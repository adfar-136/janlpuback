const express = require("express")
const router =  require("./routes/user");
const cors = require("cors")
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser")
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:["http://localhost:3001"],
    credentials:true
}))
mongoose.connect("mongodb://localhost:27017/lpuintern").then(()=>{
    console.log("mongodb connected")
})
app.use("/auth",router)

app.listen(3000,()=>{
   console.log("server is running on port 3000")
    
})