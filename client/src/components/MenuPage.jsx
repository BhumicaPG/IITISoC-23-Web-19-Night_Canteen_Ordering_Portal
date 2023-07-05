import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { useSelector } from "react-redux";
// import { staggerFadeInOut } from "../animations";
import { statuses } from "../utils/styles";
import SliderCard from "./SliderCard";
import FilterSection from "./FilterSection";
import {Header, Slider} from "../components";
import {Cart} from "../components";
// import background

const MenuPage = () => {
    const isCart = useSelector((state) => state.isCart);
  return (
    <>
        <div style={{backgroundImage : `url(https://img.freepik.com/free-photo/flat-lay-different-ingredients-composition-with-copy-space_23-2148541885.jpg?w=1060&t=st=1688585102~exp=1688585702~hmac=7e21ab2fb3aebb54f379879d9b655b0e522aeba3552f5e50f11dbe09bb5697da)`, backgroundSize: "cover", backgroundRepeat : "no-repeat", backgroundPosition: "center"}}>
            <Header/>
            <div className="flex flex-col gap-12 mt-28 ">
                <motion.div className="w-full flex items-start justify-center flex-col px-12 ms:px-20">
                    <div className='w-full flex items-center justify-between'>
                        <div className='flex flex-col items-start justify-start gap-1'>
                            <p className='text-2xl text-headingColor font-bold'>
                                Fav Items
                            </p>
                            <div className='w-40 h-1 rounded-md bg-orange-500'></div>
                        </div>
                    </div>
                <Slider />
                </motion.div>
                <FilterSection/>
            </div>
            {isCart && <Cart /> }
        </div>
    </>
    
  )
}

export default MenuPage
