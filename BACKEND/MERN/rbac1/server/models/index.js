import SongSchema from "./song/index.js"
import UserSchema from "./user/index.js"
import RoleSchema from  "./role/index.js"
import PermissionSchema from "./permission/index.js"
import UserRoleScehma from "./user_role/index.js"
import RolePermissionSchema from "./role_permission/index.js"
import { model } from "mongoose"

export const Song = model('song',SongSchema);
export const User = model("user",UserSchema);
export const Role = model("role",RoleSchema);
export const Permission = model("permission",PermissionSchema);
export const UserRole = model("userRole",UserRoleScehma)
export const RolePermission = model("rolePermisiion",RolePermissionSchema)