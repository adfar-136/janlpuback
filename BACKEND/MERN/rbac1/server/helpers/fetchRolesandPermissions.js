import { UserRole,Permission,RolePermission,Role } from "../models/index.js"
export default async function fetchRolesAndPermissions(req){
  const userRoles = await UserRole.find({
    userId :req.user._id
  })
  let roles ={};
  (await Role.find({
    _id :{$in : userRoles.map(({roleId})=>roleId)}
  })).forEach(({role})=>{
    roles[role]= true;
  })

  let permission= {}

  let rolePermissions = await RolePermission.find({
    roleId :{$in :userRoles.map(({roleId})=>roleId)}
  })
if(rolePermissions.length){
    (await Permission.find({
        _id:{$in:rolePermissions.map(({permissionId})=>permissionId)}
    })).forEach(({action,subject})=>{
       if(!permission[subject]){
        permission[subject] = {}
        permission[subject][action]=true
       } else {
        permission[subject][action]=true
       }
    })
}
return {roles,permission}
}