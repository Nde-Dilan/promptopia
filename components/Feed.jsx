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
  const [prompts, setPrompts] = useState([]);


  const [searchText, setSearchText] = useState("");
  const [searchTimeOut,setSearchTimeOut] = useState(null)
  const [searchResults, setSearchResults] = useState([]);


  const handleSearchChange = (e)=>{
    clearTimeout(searchTimeOut);
    
    setSearchText(e.target.value);
    //un petit delai pour eviter de refaire la recherche à chaque frappe du clavier(debouncing technic)
    setSearchTimeOut(()=>{
      setSearchResults(filterPrompts(e.target.value));
    },500)
    
    
  }

  const filterPrompts = (searchText)=>{
    const reg = new RegExp(searchText,"i");
    return prompts.filter(
      (prompt)=> reg.test(prompt.prompt) ||
       reg.test(prompt.tag) ||
      reg.test(prompt.creator.username))
  }
  
  const fetchPrompt = async ()=>{
    const response = await fetch('/api/prompt');

    const data = await response.json();
    setPrompts(data);
  }
  useEffect(()=>{
      fetchPrompt();
  },[])


  const handleTagClick =(tagName)=>{
    console.log(tagName);
    setSearchText(tagName);
    console.log(searchText);
    setSearchResults(filterPrompts(tagName))
  }
  return (
    <section className="feed">
      <form onSubmit={(e)=>{e.preventDefault();}}  className="relative flex-center w-full">

    <input
    placeholder='Search for a tag or username...'
    onChange={handleSearchChange}
    type='text'
    value={searchText}
    required
    className='search_input peer'/>
      </form>
      

    {searchText ? (
    <PromptCardList data={searchResults} handleTagClick={handleTagClick} />) : (
      <PromptCardList data={prompts} handleTagClick={handleTagClick} />
    )}


    </section>
  )
}

export default Feed;