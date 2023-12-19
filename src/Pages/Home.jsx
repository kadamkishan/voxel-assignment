import React, { useState } from 'react'
import Search from '../Components/Search'
import Cards from '../Components/Cards'
import record from "../assets/startup_funding l.json";


const Home = () => {
  const [orgPost,setorgPost]=useState([]);

  const filterPost=(tag)=>{
    const result=record.filter(item=>item.IndustryVertical===tag)
    setorgPost(result);
    console.log(orgPost);
  }

  return (
    <div>
      
      <Search selectedTag={(tag)=>filterPost(tag)}/>
      <Cards orgPost={orgPost} />
      {/* <IntroPost/>
      <Footer/> */}

    </div>
  )
}

export default Home