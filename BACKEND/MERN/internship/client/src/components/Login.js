import React, { useState } from 'react'
import Axios from "axios"
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError]= useState("");
  const navigate= useNavigate();
  Axios.defaults.withCredentials = true;
  function handleSubmit(e){
      e.preventDefault();
      if(!email || !password){
        setError("Please fill all feilds")
        return
      }
      Axios.post("http://localhost:3000/auth/login",{
        email,password
      }).then((response)=>{
          if(response.data.status){
             navigate("/")
          }
      }).catch((error)=>{
        setError("Internal Error, pleast try later",error)
      })
  } 
   return (
    <div>
      <h2>SignIn Page</h2>
      <form onSubmit={handleSubmit}>
       
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
        <button type='submit'>Signin</button>
        <div>
          <p>Already have an account?</p>
          <button>Signup</button>
        </div>
        {error &&<p>{error}</p>}
      </form>
    </div>
  )
}
