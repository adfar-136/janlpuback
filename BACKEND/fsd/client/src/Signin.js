import React, { useState } from 'react'

export default function Signin() {
    const [username,setUsername]= useState("");
        const [password,setPassword] = useState("");
        const [message,setMessage] = useState("")
       async function handleSubmit(e){
           e.preventDefault()
           var response = await fetch("http://localhost:5000/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({username,password})
           });
           const data = await response.json()
           setMessage(data.message)

        }
  return (
    <div>
        <h1>SignIn Page</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Username'value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit'>SIgnIN</button>
        </form>
        <p>{message}</p>
    </div>
  )
}
