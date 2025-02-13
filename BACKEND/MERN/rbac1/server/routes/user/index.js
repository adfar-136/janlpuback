import express from "express"
import fetchRolesAndPermissions from "../../helpers/fetchRolesandPermissions.js"
import { Role, UserRole } from "../../models/index.js"

const router = express.Router()

router.get("/permissions",async (req,res)=>{
    try {
        const data = await fetchRolesAndPermissions(req)
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({error:"Failed to get permissions"})
    }
})
router.post("/upgrade",async (req,res)=>{
    try {
        const {_id:roleId} = await Role.findOne({role :'Premium'})
        const userRole = new UserRole({
            userId : req.user._id,
            roleId
        })
        await userRole.save()
        const data = await fetchRolesAndPermissions(req)
        res.status(201).json({data})
    } catch (error) {
        res.status(500).json({error:"Upgrade Failed"})
    }
})
export default router