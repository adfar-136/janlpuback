const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./routes/tasks")
const app = express();
app.use(cors())
mongoose.connect("mongodb://localhost:27017/lputodoapp").then(()=>[
    console.log("connect to mongodb")
])
app.use(express.json())
app.use("/tasks",router)
app.listen(4000,()=>{
    console.log("listening to port 4000")
})