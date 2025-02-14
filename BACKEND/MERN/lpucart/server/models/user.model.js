
const mongoose = require("mongoose");
const config = require("../config/config");
const bcrypt = require("bcrypt")
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

userSchema.methods.isPasswordMatch = async function(password){
    const user = this;
    return bcrypt.compare(password,user.password)
}
userSchema.pre("save",async function(next){
    const user = this;
    if(user.isModified("password")){
        user.password = await bcrypt.hash(user.password,10)
    }
    next()
})

const User = mongoose.model("User",userSchema)

module.exports.User = User