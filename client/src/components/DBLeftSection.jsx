import React from 'react'
import { NavLink } from 'react-router-dom'
import { isActiveStyles, isNtActiveStyles } from "../utils/styles";

const DBLeftSection = () => {
  return (
    <div className="h-full py-12 flex flex-col  bg-white backdrop-blur-md shadow-md min-w-250  w-350 gap-3">
      <NavLink to={"/"} className="flex items-center justify-start gap-4">
        <img src="https://img.freepik.com/premium-vector/black-restaurant-menu-icon-plate-with-cutlery-fork-knife-isolated_125869-1303.jpg?w=740" alt="logo" className="w-20 items-center px-2"/>
        <p className='font-semibold text-2xl'>Night Bites</p> 
      </NavLink>

      <hr/>

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
                New Items
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


      <div className="w-full items-center justify-center flex-col h-260 mt-auto mb-0 px-2">
        <div className="w-full h-full rounded-md bg-blue-300 flex items-center justify-center flex-col gap-3 px-3">
          <div className="w-8 h-8 border bg-white rounded-full  flex items-center justify-center mt-3">
            <p className="text-2xl font-bold text-blue-700">?</p>
          </div>
          <p className="text-xl text-primary font-semibold">Help Center</p>
          <p className="text-base text-gray-200 text-center">Having trouble in the city. Please Contact us for more questions</p>
          <p className="px-4 py-2 rounded-full bg-primary text-blue-600 cursor-pointer mb-3">Get in Touch</p>
        </div>
        
      </div>
      </div>

  )
}

export default DBLeftSection
