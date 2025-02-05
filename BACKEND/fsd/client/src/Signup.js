import React, { useState } from 'react'

function Signup() {
    const [username,setUsername]= useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("")
    async function handleSubmit(e){
       e.preventDefault()
       const response = await fetch("http://localhost:5000/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({username,password})
       })
       const data = await response.json();
       console.log(data)
       setMessage(data.message)
    }
  return (
    <div>
        <h1>SignUp Page</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input type='submit' value="Signup"/>
        </form>
     <p>{message}</p>
    </div>
  )
}

export default Signup