"use client"

import {useState,useEffect} from 'react'
import PromptCard from './PromptCard';


const PromptCardList = ({data,handleTagClick})=>{

  return (
    <div className="prompt_layout mt-16">
      {data.map(prompt =>(
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          handleTagClick={handleTagClick}
          />
      ))}
    </div>
  );

};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [prompts, setPrompts] = useState([]);
  const handleSearchChange = (e)=>{

  }
  useEffect(()=>{
      const fetchPrompt = async ()=>{
        const response = await fetch('/api/prompt');

        const data = await response.json();
        setPrompts(data);
      }
      fetchPrompt();
  },[])
  return (
    <section className="feed">
      <form  className="relative flex-center w-full">

    <input
    placeholder='Search for a tag or username...'
    onChange={handleSearchChange}
    type='text'
    value={searchText}
    required
    className='search_input peer'/>
      </form>
      

    <PromptCardList data={prompts} handleTagClick={()=>{}} />


    </section>
  )
}

export default Feed;