import React from 'react';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { buttonClick } from "../animations";
import chicken from "../assets/img/r2.png";
import { IoFastFood, IoBasket } from "react-icons/io5";
import { HiCurrencyRupee } from "react-icons/hi2";
import { addNewItemToCart, getAllCartItems } from "../api";
import { alertNULL, alertSuccess } from "../context/actions/alertAction";
import { setCartItems } from "../context/actions/cartAction";

const SliderCard =() => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
  
    const sendToCart = () => {
      dispatch(alertSuccess("Added to the cart"));
      addNewItemToCart(user?.user_id, data).then((res) => {
        getAllCartItems(user?.user_id).then((items) => {
          dispatch(setCartItems(items));
        });
        setInterval(() => {
          dispatch(alertNULL());
        }, 3000);
      });
    };
  
        return(
            <div className='bg-blend-overlay hover:drop-shadow-lg backdrop-blur-md rounded-xl border border-gray-400 flex items-center justify-between relative px-4 py-2 w-full md:w-340 md:min-w-350 gap-3'>

                {/* <img src={data.imageURL} className="w-40 h-40 object-contain" alt="" /> */}

                <img src={chicken} className='w-40 h-40 object-contain' alt="food photo" />
                <div className='relative pt-12'>
                    <p className='text-xl text-headingColor font-semibold'>

                        {/* {data.product_name} */}
                        Chicken Biryani
                    </p>
                    <p className='text-lg font-semibold text-red-500 flex items-center justify-center gap-1'>

                    <HiCurrencyRupee className="text-red-500" />{" "}
                     {/* {parseFloat(data.product_price).toFixed(2)} */}
                    140

                    </p>
                    <motion.div
                        {...buttonClick}
                        onClick={sendToCart}
                        className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center absolute -top-4 right-2 cursor-pointer"
                    >
                        <IoBasket className="text-2xl text-primary" />
                    </motion.div>

                </div>
            
            </div>
        );
};

export default SliderCard;
