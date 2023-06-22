import React from 'react'
import DBRightSection from "../components/DBRightSection"
// import DBLeftSection from "../components/DBLeftSection";
import DBLeftSection from "../components/DBleftSection";


const DashBoard = () => {
  return (
    <div className='w-screen h-screen flex items-center text-black font-extrabold bg-gray-100 gap-2'>
        <DBLeftSection/>
        <DBRightSection/> 
        
    </div>
  )
}

export default DashBoard
