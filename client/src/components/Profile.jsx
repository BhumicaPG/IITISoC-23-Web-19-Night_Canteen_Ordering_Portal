import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/img/headerlogo.png";
import Avatar from "../assets/img/avatar.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { MdShoppingCart, MdLogout, MdAdd } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { buttonClick, slideTop } from "../animations";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { app } from "../config/firebase.config"

import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
import { setuserNull } from "../context/actions/userActions";
import { setCartOn } from "../context/actions/displayCartAction";
import Header from './Header'
import Footer from './Footer'


const Profile = () => {
    const user = useSelector((state) => state.user);
    console.log("user-----------------")
    console.log(user)
  return (
    // <div className="w-full min-h-screen flex items-center justify-start flex-col"
    //     style={{backgroundImage : `url(https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg)`, 
    //     backgroundSize: "cover",
    //     backgroundRepeat : "no-repeat", 
    //     backgroundPosition: "center"}}
    // >
    
    //     <Header/>
    //     <div className="flex flex-col justify-center items-center mt-40 ">
    //             {/* profile pic */}
    //             <div class="w-40 h-40 rounded-full shadow-md cursor-pointer overflow-hidden mt-5">
    //                 <motion.img className="w-full h-full object-cover" 
    //                     src={user?.picture? user?.picture : Avatar} 
    //                     whileHover={{scale: 1.15}} 
    //                     referrerPolicy="no-referrer" 
    //                 />
    //             </div>

    //             {/* credentials */}
    //             {/* <div className="flex flex-col items-center justify-center mt-5">
    //                 <h1 className="text-2xl font-bold text-white">{user?.name}</h1>
    //                 <h1 className="text-xl font-semibold text-white">{user?.email}</h1>
    //             </div> */}
    //             <h1 className="text-2xl font-bold text-white z-50">{user?.name}</h1>
    //             <h1 className="text-xl font-semibold text-white z-50">{user?.email}</h1>

    //     </div>
    //     <Footer/>
    // </div>
    <div className="w-full min-h-screen flex flex-col items-center justify-start"
            style={{
                backgroundImage: `url(https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            }}
        >
            <Header />
            <div className="flex flex-col justify-center items-center mt-40 relative z-10">
                {/* profile pic */}
                <div className="w-40 h-40 rounded-full shadow-md cursor-pointer overflow-hidden mt-5 relative">
                    <motion.img
                        className="w-full h-full object-cover"
                        src={user?.picture ? user?.picture : Avatar}
                        whileHover={{ scale: 1.05 }}
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-full pointer-events-none"></div>
                </div>

                {/* credentials */}
                <h1 className="text-2xl font-bold text-red-500 z-50 ">{user?.name}</h1>
                <h1 className="text-xl font-semibold text-red-500 z-50">{user?.email}</h1>
            </div>
            <Footer />
        </div>


      
      

  )
}

export default Profile
