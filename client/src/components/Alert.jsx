import React from 'react'
import {motion} from "framer-motion"
import { fadeInOut } from "../animations"
import {AiFillCheckCircle} from "react-icons/ai"
import {TiWarning} from "react-icons/ti"
import {FcInfo} from "react-icons/fc"
import {MdDangerous} from "react-icons/md"


const Alert = ({type, message}) => {
  
    if(type==="success"){
    return (
        <motion.div {...fadeInOut} className='fixed z-50 top-32 right-12 px-4 py-2 bg-green-200 rounded-md backdrop-blur-sm flex items-center gap-4'>
            <AiFillCheckCircle  className='text-green-700'/>
            <p className='text-green-800 px-2'>{message}</p>
        </motion.div>
    )
        
  }

  if(type==="warning"){
    return (
        <motion.div {...fadeInOut} className='fixed z-50 top-32 right-12 px-4 py-2 bg-orange-200 rounded-md backdrop-blur-sm flex items-center gap-4'>
            <TiWarning  className='text-orange-700'/>
            <p className='text-orange-800 px-2'>{message}</p>
        </motion.div>
    )
        
  }

  if(type==="danger"){
    return (
        <motion.div {...fadeInOut} className='fixed z-50 top-32 right-12 px-4 py-2 bg-red-200 rounded-md backdrop-blur-sm flex items-center gap-4'>
            <MdDangerous  className='text-red-700'/>
            <p className='text-red-800 px-2'>{message}</p>
        </motion.div>
    )
        
  }

  if(type==="info"){
    return (
        <motion.div {...fadeInOut} className='fixed z-50 top-32 right-12 px-4 py-2 bg-blue-200 rounded-md backdrop-blur-sm flex items-center gap-4'>
            <FcInfo  className='text-blue-700'/>
            <p className='text-blue-800 px-2'>{message}</p>
        </motion.div>
    )
        
  }

}

export default Alert
