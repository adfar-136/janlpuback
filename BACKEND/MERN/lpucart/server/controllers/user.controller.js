
const { userService } = require("../services");
const catchAsync = require("../utils/catchAsync");



const getUser = catchAsync(async (req,res)=>{
    let data = await userService.getUserById(req.params.userId)
    if(!data){
        return res.json(404).send("user not found")
    }
    if(data.email != req.user.email){
        res.send("User not authorized to access this resource")
    }
    return res.send(data)
}) 

const setAddress = catchAsync(async(req,res)=>{
    const user = await userService.getUserById(req.params.userId)
    if(!user){
        return res.json(404).send("user not found")

    }
    if(user.email != req.user.email){
        return res.json(400).send("USer not allowed to accesss this resource")

    }
    const address = await userService.setAddress(user,req.body.address)
    res.send({
        address:address
    })

})

module.exports = {
    getUser,
    setAddress
}