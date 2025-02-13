
const mongoose = require("mongoose");
const config = require("../config/config")
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true,
        minlength: 8
    },
    walletMoney : {
        type:Number,
        required:true,
        default: config.default_wallet_money
    },
    address : {
        type:String,
        default: config.default_address
    }
},
{
    timeStamps: true
})

userSchema.statics.isEmailTaken = async function(email){
    const user = await this.findOne({email})
    return !!user
}
const User = mongoose.model("User",userSchema)

module.exports.User = User