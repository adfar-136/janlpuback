import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Signup() {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const navigate = useNavigate()
  function handleSubmit(e){
    e.preventDefault();
    if(!username || !email || !password){
         setError("Please fill all feilds");
         return
    }
    Axios.post("http://localhost:3000/auth/signup",{
      username,email,password
    }).then((response)=>{
      console.log(response.data)
      if(response.data.status){
          navigate("/login")
      }
    }).catch(()=>{
      setError("Internal error occured, please try again")
    })
  }
  return (
    <div>
      <h2>SignUp Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Username: </label>
        <input type="text" placeholder='username'
        value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Email: </label>
          <input type="email" placeholder='Email' 
          value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Password: </label>
          <input type="password" placeholder='Password'
          value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type='submit'>Signup</button>
        <div>
          <p>Already have an account?</p>
          <button onClick={()=>navigate("/login")}>Login</button>
        </div>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
