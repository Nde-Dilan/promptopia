"use client"

import {useState,useEffect} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '@components/Profile'

const MyProfile = () => {
    const {data:session } =useSession();
    const handleEdit = ()=>{
      
    }
    const handleDelete = async ()=>{

    }
    const [prompts, setPrompts] = useState([]);

    useEffect(()=>{
        const fetchPrompt = async ()=>{
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
  
          const data = await response.json();
          setPrompts(data);
        }
        if(session?.user.id) fetchPrompt();
    },[])

  return (
    <Profile 
    name={"My"}
    desc="Welcome to your personalized profile page"
    data={prompts}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
    />
  )
}

export default MyProfile;