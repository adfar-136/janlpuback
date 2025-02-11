import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate()
  const [appliedOppurtunities,setAppliedOppurtunities] = useState([]);
  useEffect(()=>{
   const verifyUser = async()=>{
    try {
      const res = await axios.get("http://localhost:3000/auth/verify")
      if(!res.data.status){
        navigate("/login")
      } else {
        fetchAppliedOppurtunities()
      }
    } catch (error) {
      navigate("/login")
    }
   }
   verifyUser()
  },[navigate])
  const fetchAppliedOppurtunities = async()=>{
    try {
      const response = await axios.get("http://localhost:3000/auth/applied-oppurtunities");
      setAppliedOppurtunities(response.data)
    } catch (error) {
      
    }
  }
  const handleLogout = async ()=>{
  const response =  await axios.get("http://localhost:3000/auth/logout")
  if(response.data.status){
     navigate("/login")
  } 
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Applied oppurtunities</h2>
      <button onClick={handleLogout}>Logout</button>
      {appliedOppurtunities.map((oppurtunity)=>(
        <div key={oppurtunity.id}>
           <h1>{oppurtunity.profile_name}</h1>
           <p><strong>Company : {oppurtunity.company_name}</strong></p>
           <p><strong>Stipend : {oppurtunity.stipend}</strong></p>
           <p><strong>Duration : {oppurtunity.duration}</strong></p>
        </div>
      ))}
    </div>
  )
}
