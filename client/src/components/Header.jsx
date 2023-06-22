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


const Header = () => {
    const user = useSelector((state) => state.user);
    const [isMenu, setIsMenu] = useState(false);
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


    return (
        <header className="fixed backdrop-blur-sm z-50 inset-x-0 top-0 flex items-center justify-between px-12 ms:px-20 py-6 text-slate-50">
            <NavLink to={"/"} className="flex items-center justify-cemter gap-4">
            <img src={logo} className="w-12" alt="logo here" />
            <p className="font-semibold text-xl">Night Bites</p>
            </NavLink>

            <nav className="flex items-center justify-center gap-8">
                <ul className="hidden md:flex items-center justify-center gap-16">
                    
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? isActiveStyles : isNotActiveStyles
                        }
                        to={"/"}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? isActiveStyles : isNotActiveStyles
                        }
                        to={"/menu"}
                    >
                        Menu
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? isActiveStyles : isNotActiveStyles
                        }
                        to={"/services"}
                    >
                        Services
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? isActiveStyles : isNotActiveStyles
                        }
                        to={"/aboutus"}
                    >
                        About Us
                    </NavLink>

                </ul>

                <motion.div {...buttonClick} className="relative cursor-pointer"
                //   whileTap={{ scale: 0.8 }}
                //   className="flex items-center gap-2 bg-black px-6 py-4 rounded-md cursor-pointer relative"
                //   onClick={() => {
                //     setIsMobileMenu(false);
                //     setCartMenu(!cartMenu);
                //   }}
                >
                  <MdShoppingCart className="text-3xl text-white" />
                  {/* <p className="text-base text-white font-semibold">My Cart</p> */}
                  {/* {cartItems && cartItems.length > 0 && ( */}
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center absolute -top-4 -right-1">
                      <p className="text-primary text-base font-semibold">2
                        {/* {cartItems.length} */}
                      </p>
                    </div>
                  {/* )} */}
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
                            className="px-6 py-4 w-48 bg-blend-lightOverlay backdrop-blur-3xl rounded-md shadow-md absolute top-12 right-0 flex flex-col gap-4">
                            
                            <Link className="hover:text-red-500 text-xl text-white"
                            to={"/dashboard/home"}
                            >
                                Dashboard
                            </Link>
                            <Link className="hover:text-red-500 text-xl text-white"
                            to={"/profile"}
                            >
                                My Profile
                            </Link>
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