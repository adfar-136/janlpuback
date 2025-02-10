const jwt = require("jsonwebtoken")
const auth = async (req,res,next)=>{
    try {
         const token =req.cookies.token;
         if(!token){
            return res.status(401).json({status:false,message:"AUth Failed"})
         }
         const decoded = await jwt.verify(token,"secret");
         req.user = decoded;
         next()
    } catch (error) {
        console.log(error)
    }
}
module.exports = auth