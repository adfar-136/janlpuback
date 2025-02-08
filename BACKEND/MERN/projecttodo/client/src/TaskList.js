import React from 'react'
import Task from './Task';

function TaskList({tasks,fetchTasks}) {
   
  return (
    <div>
       <h1>Task Lists Below : </h1>
       {tasks.length ? tasks.map((task)=>(
         <Task task = {task} fetchTasks={fetchTasks}/>
       )): "Please add tasks to display"}
    </div>
  )
}

export default TaskList