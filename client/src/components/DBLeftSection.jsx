import React from 'react'
import { NavLink } from 'react-router-dom'
import { isActiveStyles, isNtActiveStyles } from "../utils/styles";
import logo from "../assets/img/logoblack.png";

const DBLeftSection = () => {
  return (
    // <div className="h-full py-12 flex flex-col  bg-gray-100 backdrop-blur-md shadow-md min-w-250  w-350 gap-3" >
    <div className="h-full py-12 flex flex-col justify-around bg-gray-100 backdrop-blur-md shadow-md min-w-250 w-350 gap-3 ">
      
      <NavLink to={"/"} className="flex items-center justify-start gap-4">
        {/* <img src='../assests/img/headerlogo' alt="logo" className="w-20 items-center px-2"/> */}
        <img src={logo} alt="logo" className="w-20 items-center px-2" />
        <p className='font-semibold text-2xl'>Night Bites</p> 
      </NavLink>

      <hr className='border-black'/>

      <ul className='flex flex-col gap-4'>

            {/* home */}
            <NavLink
                to={"/dashboard/home"}
                className={({ isActive }) =>
                    isActive ? isActiveStyles : isNtActiveStyles
                }
                
            >
                Home
            </NavLink>

            {/* orders */}
            <NavLink
                to={"/dashboard/orders"}
                className={({ isActive }) =>
                    isActive ? isActiveStyles : isNtActiveStyles
                }
                
            >
                Orders
            </NavLink>


            {/* items */}
            <NavLink
                to={"/dashboard/items"}
                className={({ isActive }) =>
                    isActive ? isActiveStyles : isNtActiveStyles
                }
            >
                Items
            </NavLink>


            {/* newitems */}
            <NavLink
                to={"/dashboard/newitems"}
                className={({ isActive }) =>
                    isActive ? isActiveStyles : isNtActiveStyles
                }
            >
                Add new Items
            </NavLink>

            
            {/* users */}
            <NavLink
                to={"/dashboard/users"}
                className={({ isActive }) =>
                    isActive ? isActiveStyles : isNtActiveStyles
                }
            >
                Users
            </NavLink>
      </ul>

    {/* red wala part */}
      <div className="w-full items-center justify-center  flex-col h-260 mt-auto mb-0 px-2">
        <div className="w-full h-full rounded-md bg-red-600 flex items-center justify-center flex-col gap-3 px-3">
          <div className="w-8 h-8 border bg-white rounded-full  flex items-center justify-center mt-3">
            <p className="text-2xl font-bold text-gray-600">?</p>
          </div>
          {/* <p className="text-xl text-gray-200 font-semibold">Help Center</p>
          <p className="text-base text-gray-200 text-center opacity-70">Need assistance ?</p> 
          <p className="text-base text-gray-200 text-center">Contact us for inquiries.</p> */}
          {/* <p className="px-4 py-2 rounded-full bg-primary text-gray-600 cursor-pointer mb-3">Get in Touch</p> */}
          <p className="text-xl text-white font-semibold">Help Center</p>
          <p className="text-base text-white text-center opacity-70">Need assistance?</p> 
          <p className="text-base text-gray-200 text-center">Contact us for inquiries.</p>

          <a href="mailto:ce200004018@iiti.ac.in" class="px-4 py-2 rounded-full bg-primary text-gray-600 cursor-pointer mb-3">Get in Touch</a>
        </div>
        
      </div>
      </div>

  )
}

export default DBLeftSection
