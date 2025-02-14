const { User } = require("../models/")
const bcrypt = require("bcrypt")



const createUser = async (userBody)=>{
    if(await User.isEmailTaken(userBody.email)){
        throw new Error("Email already Taken")
    }
    // const hashedPassword = await bcrypt.hash(userBody.password,10)
    const user = await User.create({...userBody})
    return user
}

const getUserByEmail=async (email)=>{
    return User.findOne({email})
}

const getUserById = async (id)=>{
    return User.findById(id)
}

const setAddress = async (user,newAddress)=>{
    user.address = newAddress
    await user.save()
    return user.address
}

module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
    setAddress
}