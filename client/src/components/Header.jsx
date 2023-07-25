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
// import { useStateValue } from "../context/StateProvider";
// import { actionType } from "../context/reducer";
// import CheckOutContainer from "./CheckOutContainer";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
import { setuserNull } from "../context/actions/userActions";
import { setCartOn } from "../context/actions/displayCartAction";

// Import dotenv
// import dotenv from 'dotenv';
// dotenv.config(); // Load environment variables

const Header = () => {
    const user = useSelector((state) => state.user);
    const cart = useSelector((state) => state.cart);
    const [isMenu, setIsMenu] = useState(false);
    const firebaseAuth = getAuth(app);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const adminId = JSON.parse(import.meta.env.VITE_APP_ADMIN_ID);
    
    const signOut = () => {
        firebaseAuth.signOut()
        .then(() => {
            dispatch(setuserNull())
            navigate("/login", { replace: true});
        })
        .catch((err) => console.log(err));
    };
    // console.log("current user ki userid", user?.user_id)
    // console.log("if wali condition" , user?.user_id && adminId.includes(user?.user_id))


    return (
        <header className="fixed backdrop-filter backdrop-blur-sm bg-opacity-30 border-b border-gray-600 z-50 inset-x-0 top-0 flex items-center justify-between px-12 ms:px-20 py-6 text-slate-50 bg-slate-700">
            <NavLink to={"/"} className="flex items-center justify-cemter gap-4">
            <img src={logo} className="w-12" alt="logo here" />
            <p className="font-semibold text-xl">Night Bites</p>
            </NavLink>

            <nav className="flex items-center justify-center gap-8">
                <ul className="hidden md:flex items-center justify-center gap-16">
                    
                    {/* Home */}
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? isActiveStyles : isNotActiveStyles
                        }
                        to={"/"}
                    >
                        Home
                    </NavLink>

                    {/* Menu */}
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? isActiveStyles : isNotActiveStyles
                        }
                        to={"/menu"}
                    >
                        Menu
                    </NavLink>

                    {/* Services */}
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? isActiveStyles : isNotActiveStyles
                        }
                        to={"/Services"}
                    >
                        Services
                    </NavLink>

                    {/* About Us */}
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? isActiveStyles : isNotActiveStyles
                        }
                        to={"/aboutus"}
                    >
                        About Us
                    </NavLink>

                </ul>
                
                {/* cart */}
                <motion.div 
                    {...buttonClick} 
                    onClick={() => dispatch(setCartOn())}
                    className="relative cursor-pointer"
                >
                  <MdShoppingCart className="text-3xl text-white" />
                  {cart?.length > 0 && (
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center absolute -top-4 -right-1">
                      <p className="text-primary text-base font-semibold">
                        {cart?.length}
                      </p>
                    </div>
                   )} 
                </motion.div>
                
                {user ? (
                    <>
                    <div className="relative cursor-pointer"
                    onMouseEnter={()=> setIsMenu(true)}>

                        <div className="w-12 h-12 rounded-full shadow-md cursor-pointer overflow-hidden flex items-center justify-center" >
                            <motion.img className="w-full h-full object-cover" 
                            src={user?.picture? user?.picture : Avatar} 
                            whileHover={{scale: 1.15}} 
                            referrerPolicy="no-referrer" />
                        </div>

                        {isMenu && (
                            <motion.div 
                                {...slideTop}
                                onMouseLeave={() => setIsMenu(false)} 
                                // className="px-6 py-4 w-48 bg-blend-lightOverlay backdrop-blur-3xl rounded-md shadow-md absolute top-12 right-0 flex flex-col gap-4"
                                className="px-6 py-4 w-48 bg-[rgba(0,0,0,0.5)] backdrop-blur-3xl rounded-md shadow-md absolute top-12 right-0 flex flex-col gap-4"
                                
                            >
                            
                            {user?.user_id && adminId.includes(user?.user_id) &&(
                                // {/* dashboard */}
                                
                                <Link 
                                    className="hover:text-red-500 text-xl text-white"
                                    to={"/dashboard/home"}
                                >
                                Dashboard
                                </Link>
                            )}


                            {/* My Profile */}
                            <Link className="hover:text-red-500 text-xl text-white"
                            to={"/profile"}
                            >
                                My Profile
                            </Link>

                            {/* Orders */}
                            <Link className="hover:text-red-500 text-xl text-white"
                            to={"/orders"}
                            >
                                Orders
                            </Link>

                            <hr />

                            <motion.div 
                                {...buttonClick} 
                                onClick={signOut}
                                className="group flex item-center justify-center px-3 py-2 rounded-md shadow-md bg-gray-100 hover:bg-gray-200 gap-3 "
                            >
                                <MdLogout className="text-2xl text-textColor group-hover::text-headingColor" />
                                <p className="text-textColor text-xl group-hover:text-headingColor">
                                    Sign Out
                                </p>
                            </motion.div>
                        </motion.div>

                        )}

                    </div>
                    </>
                ) : (
                    <>
                        <NavLink to={"/login"}>
                            <motion.button
                                {...buttonClick}
                                className="px-4 py-2 rounder-md shadow bg-lightOverlay border border-red-300 curson-pointer"
                            >
                                Login
                            </motion.button>
                        </NavLink>
                    </>
                
                )}

            </nav>
        </header>
    );
};

export default Header;