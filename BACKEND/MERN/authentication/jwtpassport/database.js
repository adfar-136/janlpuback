const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://adfarrasheed136:test@cluster0.ga90j.mongodb.net/jwtpasslpu").then(()=>{
    console.log("connect to db")
})

const userSchema = mongoose.Schema({
    username :String,
    password:String
})

const UserModel = mongoose.model("User",userSchema)
module.exports = UserModel