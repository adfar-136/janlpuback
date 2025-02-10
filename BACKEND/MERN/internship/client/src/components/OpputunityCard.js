import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
export default function OpputunityCard({oppurtunity,appliedOppurtunities}) {
  console.log(typeof appliedOppurtunities)
  const navigate = useNavigate()
    const {
        id,
        profile_name, 
        locations, 
        company_name,
        stipend,
        start_date,
        duration
    } = oppurtunity;
    function applyForOppurtunity(oppurtunity){
       try {
        axios.post("http://localhost:3000/auth/apply",{oppurtunity}).then(res=>{
          console.log(res)
        })
        navigate("/dashboard")
       } catch (error) {
        console.log(error)
       }
    }
    const isApplied =Array.isArray(appliedOppurtunities) && appliedOppurtunities.some(item=>item.id === id)
  return (
    <div>
        <h1>{profile_name}</h1>
        <p><strong>Company : {company_name}</strong></p>
        <p><strong>Stipend : {stipend.salary}</strong></p>
        <p><strong>Location : {locations.length > 0 ? locations.map(item=>item.string).join(", "):"Remote"}</strong></p>
        <p><strong>Duration : {duration}</strong></p>
        <p><strong>Start Date : {start_date}</strong></p>
        {isApplied ? (
          <button disabled>Applied</button>
        ): (
        <button onClick={()=>applyForOppurtunity(oppurtunity)}>Apply Now</button>
        )}
    </div>
  )
}
