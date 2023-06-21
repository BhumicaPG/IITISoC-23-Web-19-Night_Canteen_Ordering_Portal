import React from 'react';
import {motion} from "framer-motion"
import chef1 from "../assets/img/chef1.png"
import HeroBg from "../assets/img/heroBg.png"
import slider from "../assets/img/slider.jpg"
import { NavLink, Link, useNavigate } from "react-router-dom";
import { buttonClick } from '../animations';
// import { staggerFadeInOut } from '../animations';

// class Home = () => {
export default function Home(){
        return (              
            <motion.div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div
                 className='flex flex-col items-start justify-start gap-6'>

                    {/* free delivery  */}
                    <div className='px-4 py-1 flex items-center justify-center gap-2 bg-orange-100 rounded-full '>
                        <p className='text-lg font-semibold text-orange-500'>
                        <NavLink to={"/"} className="hover:underline float-right space-x-4" >Check Out Menu</NavLink> 
                        </p>
                        <div className='w-10 h-10 flex items-center justify-center rounded-full bg-primary shadow-md'>
                            <img src={chef1} alt="" className='w-full h-full object-contain' />
                        </div>
                    </div>
                    {/* free delivery end */}


                    {/* Main page Text */}
                        <p className='text-[40px] text-white md:text-[35px] font-sans font-extrabold tracking-wider'>
                            Are you hungry? 

                            <br/><span className="text-orange-600 md:text-[72px]">Don't Wait !</span>

                            <br/><span className='md:text-[30px] '>Let's start to order food now</span> 
                        </p>
                        <p className='text-white text-lg pr-32'>
                        Explore our tantalizing menu of flavorsome delights, crafted with passion and creativity. From farm-fresh ingredients to innovative recipes, we invite you to indulge your senses and embark on a mouthwatering journey of culinary excellence.
                        </p>
                    {/* Main page Text end */}
                    

                    <motion.button {...buttonClick} className='bg-gradient-to-bl from-orange-400 to-orange-600 px-4 py-2 rounded-xl text-black text-base font-semibold float-right'>
                        Order Now
                    </motion.button>
                </div>
            </motion.div>
    );
};

// export default Home;
