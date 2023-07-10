import {IoSearch} from "react-icons/io5"

import {BsToggleOn, BsToggleOff} from 'react-icons/bs'
import {AiFillBell} from 'react-icons/ai'
import {MdLogout} from 'react-icons/md'
import {motion} from 'framer-motion'
import { buttonClick } from '../animations'

// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { app } from "../config/firebase.config"
// import { NavLink, Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/img/logo2.png";
import Avatar from "../assets/img/avatar.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
// import { MdShoppingCart, MdLogout, MdAdd } from "react-icons/md";
// import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

// import { buttonClick, slideTop } from "../animations";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { app } from "../config/firebase.config"
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
import { setuserNull } from "../context/actions/userActions";

import { alertInfo, alertWarning, alertDanger, alertNULL, alertSuccess} from "../context/actions/alertAction"

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const DBHeader = () => {

    const user=useSelector((state)=>state.user);

    const firebaseAuth = getAuth(app);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const signOut = () => {
        firebaseAuth.signOut()
        .then(() => {
            dispatch(setuserNull())
            navigate("/login", { replace: true});
        })
        .catch((err) => console.log(err));
    };

    const handleClick = () => {
        
        //check kkra tha ki chal v rha hai ya nhi

        // dispatch(alertSuccess("No New Notifications"))
        // setTimeout(()=>{
        //     dispatch(alertNULL())
        //     }, 3000);
        
        toast.info('No New Notifications!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            pauseOnHover: false, // Disable pausing on hover
          });
    }
    
  return (
    <div className='w-full flex items-center justify-between gap-3'>

        {/* greetings and name display */}

        <p className='text-2xl text-gray-600'>
            Welcome to the Night Bites
            {user?.name && (
            <span className='block text-base text-gray-800'>{`Hello ${user?.name} ...!`}</span>
            
            )}
        </p>

        <div className="flex items-center justify-center gap-4">
            <div className='flex justify-center items-center gap-3 px-4 py-2 bg-slate-100 backdrop-blur-md rounded-md shadow-lg'>
                <IoSearch className='text-grey-700 text-2xl'/>
                <input type="text"  placeholder='search here' className='border-none outline-none bg-transparent w-32 text-base font-semibold text-red-600'/>
                <BsToggleOn className='text-grey-700 text-2xl'/>
                <BsToggleOff className='text-grey-700 text-2xl'/>
            </div>
            <motion.div 
                {...buttonClick}
                className="w-10 h-10 rounded-md cursor-pointer bg-red-500 backdrop-blur-md shadow-md flex items-center justify-center">
                <AiFillBell className="text-red-200 text-xl" onClick={handleClick}/>
                <ToastContainer />
            </motion.div>

            <div className="flex items-center justify-center gap-2">
                
                <div className="w-10 h-10 rounded-md shadow-lg cursor-pointer overflow-hidden">
                    <motion.img className="w-full h-full object-cover"
                        src={user?.picture ? user?.picture : Avatar}
                        whileHover={{scale : 1.20}}
                        referrerPolicy='no-referrer'
                    />
                </div>

                <motion.div 
                    {...buttonClick}
                    onClick={signOut}
                    className="w-10 h-10 rounded-md cursor-pointer bg-red-500 backdrop-blur-md shadow-lg flex items-center justify-center"
                >
                    <MdLogout className='text-red-200 text-xl'/>
                </motion.div>

                
            </div>
        </div>


    </div>
  )
}

export default DBHeader
