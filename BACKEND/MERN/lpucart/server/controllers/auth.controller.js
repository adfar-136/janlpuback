const { userService, tokenService } = require("../services")
const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const register = catchAsync(async (req,res)=>{
    
   const user = await userService.createUser(req.body);
   const token = await tokenService.generateAuthToken(user);
   res.status(201).send({user,token})
})

module.exports = {
    register
}