import React from 'react'
import DBRightSection from "../components/DBRightSection"
// import DBLeftSection from "../components/DBLeftSection";
import DBLeftSection from "../components/DBleftSection";


const DashBoard = () => {
  return (
    <div className='w-screen h-screen flex items-center text-blue-700 font-extrabold  bg-slate-400 gap-4'>
        <DBLeftSection/>
        <DBRightSection/> 
        
    </div>
  )
}

export default DashBoard
