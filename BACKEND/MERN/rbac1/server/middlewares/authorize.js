import { Permission, RolePermission, UserRole } from "../models/index.js"

export const canUserLikeSong = async (req,res,next)=>{
   const permission = await Permission.findOne({
    subject:"song",
    action:"like"
   })

   const userRoles = await UserRole.find({
     userId : req.user._id
   })

   const rolePermissions = await RolePermission.find({
    roleId :{$in : userRoles.map(({roleId})=>roleId)}
   })
  if(rolePermissions.some(({permissionId})=>permissionId.equals(permission._id))){
    next()
  } else {
    res.status(401).json({error:"insufficient permission"})
  }

}
export const canUserDownloadSong = async(req,res,next)=>{
    const permission = await Permission.findOne({
        subject: "song",
        action: "download"
        })
        
        console.log(permission)
        const userRole = await UserRole.find({
        userId: req.user._id
        })
        const rolePermission = await RolePermission.find({
        roleId: { $in: userRole.map(({ roleId }) => roleId) }
        })
        if (rolePermission.some(({ permissionId }) => permissionId.equals(permission._id))) {
        next()
        }
        else {
        res.status(401).json({ error: "Insufficient Permissions" })
        }
}