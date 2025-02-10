import React, { useEffect, useState } from 'react'
import oppurtunitiesData from "../opportunities.json"
import OpputunityCard from './OpputunityCard';
import axios from "axios"
export default function OppurtunitiesComponent() {;
  const [appliedOppurtunities,setAppliedOppurtunities] = useState([]);
  useEffect(()=>{
    fetchAppliedOppurtunity()
  },[])
  const fetchAppliedOppurtunity = async ()=>{
    try {
      const response = await axios.get("http://localhost:3000/auth/applied-oppurtunities")
      setAppliedOppurtunities(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
       <h1>Interrnshiip Oppurtunities</h1>
       <div>
        {Object.values(oppurtunitiesData.internships_meta).map(opputunity=>(
            <OpputunityCard key={opputunity.id} oppurtunity={opputunity} appliedOppurtunities = {appliedOppurtunities}/>
        ))}
       </div>
    </div>
  )
}
