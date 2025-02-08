import React from 'react'

function Task({task,fetchTasks}) {
    async function handleUpdate(){
        const res = await fetch(`http://localhost:4000/tasks/${task._id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({...task,completed:!task.completed})
        })
        const data = await res.json();
      
        fetchTasks()
    }
    async function handleDelete(){
        const res = await fetch(`http://localhost:4000/tasks/${task._id}`,{
            method:"DELETE"
        })
        const data = await res.json();
        console.log(data)
        fetchTasks()
    }
  return (
    <div>
        <h1>Title: {task.title}</h1>
        <p>Description : {task.description}</p>
        <p>Completed : {task.completed ? "TRUE":"FALSE"}</p>
        <p>Due Date : {new Date(task.dueDate).toLocaleDateString()}</p>
        <p>Priority : <b>{task.priority}</b></p>
        <button onClick={handleUpdate}>
            {task.completed ? "MARK AS NOT COMPLETED":"MARK AS COMPLETED"}
        </button>
        <button onClick={handleDelete}>Delete Task</button>
    </div>
  )
}

export default Task