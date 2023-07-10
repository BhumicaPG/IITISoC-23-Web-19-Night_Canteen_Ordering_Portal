import React from 'react'
import{NavLink} from 'react-router-dom'
// import {Bill} from "../components"
// import {payment} from "../assets/img"
import {Header} from "../components"
import {Footer} from "../components"
import {motion} from "framer-motion"
import { buttonClick } from '../animations'

const CheckOutSuccess = () => {
  return (
    <main className='w-screen min-h-screen flex items-center justify-center flex-col'>
        {/* */}
        <Header/>
        <div className="w-full flex flex-col items-center justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24 ">
            <img src="https://opengeekslab.com/wp-content/uploads/2021/10/What-Is-a-Payment-Gateway-How-Does-It-Function.png" className='w-full md:w-656' alt="background image" />
            <h1 className='text-[50px] text-green-400 font-bold'>Amount Paid Successfully</h1>

            <motion.button {...buttonClick} >
                <NavLink to={"/"} className='flex items-center justify-center gap-4 cursor-pointer text-2xl text-red-400 font-semibold px-4 py-2 rounded-md border border-gray-300 hover:shadow-md'>
                    Continue Shopping/Home
                </NavLink>
            </motion.button>
        </div>
    </main>
  )
}

export default CheckOutSuccess
