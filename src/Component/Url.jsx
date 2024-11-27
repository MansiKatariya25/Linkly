import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Url() {
    const param = useParams()
    const navigate = useNavigate()
    const id = param.id
    const [isValid,setValid] = useState(false)

    useEffect(()=>{
        const sendId = async ()=> {
            try {
                const response = await axios.post("/api/getId",{id:id})
                if(response){
                    
                    window.location.href = response.data
                }
            } catch (error) {
                console.log(error);
                setValid(prevVal=>(!prevVal))
                
            }
        }
        sendId()
    },[])
  return (
    <div className='flex justify-center items-center h-screen'>
      <p className='text-white text-5xl'>{isValid?"Invalid URL":""}</p>
    </div>
  )
}

export default Url
