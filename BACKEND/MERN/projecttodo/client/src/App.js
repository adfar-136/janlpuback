import React, { useEffect, useState }  from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

export default function App() {
  const [tasks,setTasks] = useState([])
  const fetchTasks = async()=>{
      const res = await fetch("http://localhost:4000/tasks");
      const data = await res.json();
      setTasks(data)
      console.log(data)
  }
  useEffect(()=>{
      fetchTasks()
  },[])
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm fetchTasks={fetchTasks}/>
      <TaskList fetchTasks={fetchTasks} tasks={tasks}/>
    </div>
  )
}
