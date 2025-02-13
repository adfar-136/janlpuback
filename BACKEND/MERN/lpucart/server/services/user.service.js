const { User } = require("../models/")
const bcrypt = require("bcrypt")



const createUser = async (userBody)=>{
    if(await User.isEmailTaken(userBody.email)){
        throw new Error("Email already Taken")
    }
    const hashedPassword = await bcrypt.hash(userBody.password,10)
    const user = await User.create({...userBody,password:hashedPassword})
    return user
}
module.exports = {
    createUser
}