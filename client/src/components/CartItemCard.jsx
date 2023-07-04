import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonClick, slideIn, staggerFadeInOut } from "../animations";
import { baseURL, getAllCartItems, increaseItemQuantity } from "../api";
import { alertNULL, alertSuccess } from "../context/actions/alertAction";
import { setCartItems } from "../context/actions/cartAction";
import { setCartOff } from "../context/actions/displayCartAction";
import { BiChevronsRight } from "react-icons/bi";
import { HiCurrencyRupee } from "react-icons/hi2";
import { FcClearFilters } from "react-icons/fc";

export const CartItemCard = (param) => {
    const { key, index , data} = param;
    console.log("data of cart ", param.data)

    const cart = useSelector((state) => {
      console.log(state.cart)
      return state.cart}
      );

    const user = useSelector((state) => state.user);
    const [itemTotal, setItemTotal] = useState(0);
    const dispatch = useDispatch();
  
    const decrementCart = (product_id) => {
      dispatch(alertSuccess("Updated the cart item"));
      increaseItemQuantity(user?.user_id, product_id, "decrement").then((data) => {
        getAllCartItems(user?.user_id).then((items) => {
          dispatch(setCartItems(items));
          dispatch(alertNULL());
        });
      });
    };
  
    const incrementCart = (product_id) => {
      dispatch(alertSuccess("Updated the cart item"));
      increaseItemQuantity(user?.user_id, product_id, "increment").then((data) => {
        getAllCartItems(user?.user_id).then((items) => {
          dispatch(setCartItems(items));
          dispatch(alertNULL());
        });
      });
    };
  
    useEffect(() => {
      setItemTotal(data.product_price * data.quantity);
    }, [itemTotal, cart]);

    console.log("index", index)
    return (
        // <div className="text-white"> HElloooooo </div>
    //   <motion.div
        // key={index}
        
        // {...staggerFadeInOut(index)}
        // className="w-full flex items-center justify-start bg-zinc-500 rounded-md drop-shadow-md px-4 gap-4 -z-50"
    //   >
    <>

    <motion.div 
    className="w-full flex items-center justify-start bg-zinc-800 rounded-md drop-shadow-md px-4 gap-4">
        <img
          src={data.imageURL}
          className=" w-24 min-w-[94px] h-24 object-contain"
          alt="pic"
        />
  
        <div className="flex items-center justify-start gap-1 w-full">
          <p className="text-lg text-primary font-semibold">
            {data?.product_name}
            <span className="text-sm block capitalize text-gray-400">
              {data?.product_category}
            </span>
          </p>
          <p className="text-sm flex items-center justify-center gap-1 font-semibold text-red-400 ml-auto">
            <HiCurrencyRupee className="text-red-400" /> 
            {itemTotal}
          </p>
        </div>
  
        <div className="ml-auto flex items-center justify-center gap-3">
          <motion.div
            {...buttonClick}
            onClick={() => decrementCart(data?.product_id)}
            className="w-8 h-8 flex items-center justify-center rounded-md drop-shadow-md bg-zinc-900 cursor-pointer"
          >
            <p className="text-xl font-semibold text-primary">--</p>
          </motion.div>
          <p className="text-lg text-primary font-semibold">{data?.quantity}</p>
          <motion.div
            {...buttonClick}
            className="w-8 h-8 flex items-center justify-center rounded-md drop-shadow-md bg-zinc-900 cursor-pointer"
            onClick={() => incrementCart(data?.product_id)}
          >
            <p className="text-xl font-semibold text-primary">+</p>
          </motion.div>
        </div>

    </motion.div>
    </>
    );
  };