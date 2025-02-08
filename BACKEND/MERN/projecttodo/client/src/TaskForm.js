import React, { useState } from 'react'

function TaskForm({fetchTasks}) {
    const [title,setTitle] = useState("");
    const [description,setDescription]=  useState("")
    const [dueDate,setDueDate] = useState({})
    const [priority,setPriority] = useState("")
    const [message,setMessage] = useState("")
   async function handleSubmit(e){
        e.preventDefault()
        const res = await fetch("http://localhost:4000/tasks",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({title,description,dueDate,priority})
        })
        const data = await res.json()
        console.log(data)
        setMessage(data.message)
        fetchTasks()
    }
  return (
    <div>
        <p style={{fontSize:"28px",color:"brown"}}>{message}</p>
        <form onSubmit={handleSubmit}>
           <div>
                <label>Title : </label>
                <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
           </div>
           <div>
                <label>Description : </label>
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
           </div>
           <div>
                <label>Due Date : </label>
                <input type="date" value={dueDate} onChange={(e)=>setDueDate(e.target.value)}/>
           </div>
           <div>
                <label>Priority</label>
                <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                    <option value="">Select Priority</option>
                    <option value="low">LOW</option>
                    <option value="medium" >MEDIUM</option>
                    <option value="high">HIGH</option>
                </select>
           </div>
           <button type='submit'>Add Task</button>
        </form>
    </div>
  )
}

export default TaskForm