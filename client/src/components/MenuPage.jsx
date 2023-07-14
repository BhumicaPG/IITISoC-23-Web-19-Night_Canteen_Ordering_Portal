import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { IoFastFood } from "react-icons/io5";
import { useSelector , useDispatch} from "react-redux";
// import { staggerFadeInOut } from "../animations";
import { statuses } from "../utils/styles";
import SliderCard from "./SliderCard";
import FilterSection from "./FilterSection";
import {Footer, Header, Slider} from "../components";
import {Cart} from "../components";
import { getAllProducts } from '../api';
import { setAllProducts } from '../context/actions/productActions';


const MenuPage = () => {
    const isCart = useSelector((state) => state.isCart);

    const products=useSelector((state)=>state.products);
    const dispatch=useDispatch();

    useEffect(()=>{
        // console.log("hello")
        if(!products){
          getAllProducts().then((data)=>{
            console.log("newwwwwwwwwwww data : ")
            console.log(data);
    
            console.log("new dispatch hora hai : ")
            dispatch(setAllProducts(data));
            console.log("new dispatch hogya hai")
          });
        }
      }, []);
  return (
    <>
        <div className="w-full min-h-screen flex items-center justify-start flex-col"
        style={{backgroundImage : `url(https://img.freepik.com/free-photo/flat-lay-different-ingredients-composition-with-copy-space_23-2148541885.jpg?w=1060&t=st=1688585102~exp=1688585702~hmac=7e21ab2fb3aebb54f379879d9b655b0e522aeba3552f5e50f11dbe09bb5697da)`, 
        backgroundSize: "cover",
        backgroundRepeat : "no-repeat", 
        backgroundPosition: "center"}}>
            
            <Header/>
            <div className="w-full flex flex-col items-start justify-center gap-12 mt-32 pb-12">
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
                <Footer/>
        </div>
    </>

    )
}

export default MenuPage