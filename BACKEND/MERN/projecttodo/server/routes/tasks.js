const express =  require("express");
const Task = require("../models/task")
const router = express.Router()
router.get("/",async(req,res)=>{
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
router.post("/",async(req,res)=>{
    const {title,description,dueDate,priority} = req.body;
    const newTask = new Task({title,description,dueDate,priority});
    try {
        const savedTask = await newTask.save();
        res.status(201).json({message:"Task created successfully",savedTask})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})
router.put("/:id",async(req,res)=>{
    const {id}= req.params;
    const {title,description,completed,dueDate,priority} = req.body;
    try {
        const updatedTask =  await Task.findByIdAndUpdate(
            id,
            {title,description,completed,dueDate,priority},
            {new:true}
        )
        if(!updatedTask){
            return res.status(404).json({message:"Task not found"})
        }
        return res.status(200).json({messsage:"Task updated successfully",updatedTask})
    } catch (error) {
        return res.status(400).json({message:"Bad request"})
    
    }

})
router.delete("/:id",async(req,res)=>{
    const {id} = req.params;
    try {
        const deleteTask = await Task.findByIdAndDelete(id);
        if(!deleteTask){
            return res.status(404).json({message:"Task not found"})
        }
        return res.status(200).json({message:"Task Deleted Successfully"})
    } catch (error) {
        return res.status(500).json({message:"Server Error"})
    }
})
module.exports = router