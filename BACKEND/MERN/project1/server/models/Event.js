const mongoose = require("mongoose");
const RegistrationSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    event:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("Registration",RegistrationSchema)