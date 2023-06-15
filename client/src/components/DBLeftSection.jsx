import React from 'react'
import { NavLink } from 'react-router-dom'

const DBLeftSection = () => {
  return (
    <div className="h-full py-12 flex flex-col bg-white backdrop-blur-md shadow-md min-w-250  w-350 gap-3">
      <NavLink to={"/"} className="flex items-center justify-start gap-4">
        <img src="https://o.remove.bg/downloads/571b5007-924f-4779-9c54-a38750016e51/fastfood-removebg-preview.png" alt="logo" className="w-20 items-center px-2"/>
        <p className='font-semibold text-xl'>Night Canteen Services</p> 
      </NavLink>
      <hr/>
    </div>
  )
}

export default DBLeftSection
