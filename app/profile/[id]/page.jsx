"use client"

import {useState,useEffect} from 'react'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import Profile from '@components/Profile'

const UserProfile = ({params}) => {
    const searchParams = useSearchParams();
    const userName = searchParams.get('name')
    console.log(params);

    const [userPrompts, setUserPrompts] = useState([]);


    useEffect(()=>{
        const fetchPrompt = async ()=>{
          const response = await fetch(`/api/users/${params.id}/posts`);
  
          const data = await response.json();
          setUserPrompts(data);
        }
        if(params?.id) fetchPrompt();
    },[params?.id])

  return (
    <Profile 
    name={userName}
    desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination.`}
    data={userPrompts}
    />
  )
}

export default UserProfile;