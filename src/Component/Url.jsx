import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Url() {
    const param = useParams()
    const navigate = useNavigate()
    const id = param.id
    console.log(param.id)

    useEffect(()=>{
        const sendId = async ()=> {
            try {
                const response = await axios.post("http://localhost:8000/api/getId",{id:id})
                if(response){
                    
                    window.location.href = response.data
                }
            } catch (error) {
                console.log(error);
                
            }
        }
        sendId()
    },[])
  return (
    <div className='flex justify-center items-center h-screen'>
      <p className='text-white text-5xl'>Invalid URL</p>
    </div>
  )
}

export default Url
