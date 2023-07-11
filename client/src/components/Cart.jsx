import axios from "axios";
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
import { CartItemCard } from "./CartItemCard";


// export const CartItemCard = (param) => {
//   const { data, index } = param;
//   console.log("data of cart ", param.data)

//   const cart = useSelector((state) => {
//     console.log(state.cart)
//     return state.cart}
//     );

//   const user = useSelector((state) => state.user);
//   const [itemTotal, setItemTotal] = useState(0);
//   const dispatch = useDispatch();

//   // const decrementCart = (product_id) => {
//   //   dispatch(alertSuccess("Updated the cart item"));
//   //   increaseItemQuantity(user?.user_id, product_id, "decrement").then((data) => {
//   //     getAllCartItems(user?.user_id).then((items) => {
//   //       dispatch(setCartItems(items));
//   //       dispatch(alertNULL());
//   //     });
//   //   });
//   // };

//   // const incrementCart = (product_id) => {
//   //   dispatch(alertSuccess("Updated the cart item"));
//   //   increaseItemQuantity(user?.user_id, product_id, "increment").then((data) => {
//   //     getAllCartItems(user?.user_id).then((items) => {
//   //       dispatch(setCartItems(items));
//   //       dispatch(alertNULL());
//   //     });
//   //   });
//   // };

//   // useEffect(() => {
//   //   setItemTotal(data.product_price * data.quantity);
//   // }, [itemTotal, cart]);

//   console.log("index", index)
//   return (
//     <motion.div
//       // key={index}
      
//       // {...staggerFadeInOut(index)}
//       className="w-full flex items-center justify-start bg-red-500 rounded-md drop-shadow-md px-4 gap-4 -z-50"
//     >
//       <img
//         src={data.imageURL}
//         className=" w-24 min-w-[94px] h-24 object-contain"
//         alt="pic"
//       />

//       <div className="flex items-center justify-start gap-1 w-full">
//         <p className="text-lg text-primary font-semibold">
//           {/* {data?.product_name} */} biryani
//           <span className="text-sm block capitalize text-gray-400">
//             {/* {data?.product_category} */}food
//           </span>
//         </p>
//         <p className="text-sm flex items-center justify-center gap-1 font-semibold text-red-400 ml-auto">
//           <HiCurrencyRupee className="text-red-400" /> 0
//           {/* {itemTotal} */}
//         </p>
//       </div>

//       <div className="ml-auto flex items-center justify-center gap-3">
//         <motion.div
//           {...buttonClick}
//           onClick={() => decrementCart(data?.product_id)}
//           className="w-8 h-8 flex items-center justify-center rounded-md drop-shadow-md bg-zinc-900 cursor-pointer"
//         >
//           <p className="text-xl font-semibold text-primary">--</p>
//         </motion.div>
//         <p className="text-lg text-primary font-semibold">{data?.quantity}</p>
//         <motion.div
//           {...buttonClick}
//           className="w-8 h-8 flex items-center justify-center rounded-md drop-shadow-md bg-zinc-900 cursor-pointer"
//           onClick={() => incrementCart(data?.product_id)}
//         >
//           <p className="text-xl font-semibold text-primary">+</p>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

const Cart =() => {


  
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);
    const [total, setTotal] = useState(0);
  
    useEffect(() => {
      let tot = 0;
      if (cart) {
        cart.map((data) => {
          tot = tot + data.product_price * data.quantity;
          setTotal(tot);
        });
      }
    }, [cart]);
  
    const handleCheckOut = () => {
      // window.alert("Order Placed Successfully");
      const data = {
        user: user,
        cart: cart,
        total: total,
      };

      //matlab yha data to accesible haiii
      // console.log(data);

      axios.post(`${baseURL}/api/products/create-checkout-session`, {data}).then((res) => {
          // if (res.data.url) {
          //   window.location.href = res.data.url;
          // }
          console.log(res);
          // window.alert("Order Placed Successfully");
          // console.log("yesssssss axios k andar v process aagya hai")
          if (res.data.url) {
            window.location.href = res.data.url;
          }
        })
        .catch((err) => console.log(err));
    };
  
    return (
      <motion.div
        {...slideIn}
        className="fixed z-50 top-0 right-0 w-300 md:w-508 bg-lightOverlay backdrop-blur-md shadow-md h-screen"
      >
        <div className="w-full flex items-center justify-between py-4 pb-12 pl-6 pr-16">
          <motion.i
            {...buttonClick}
            className="cursor-pointer"
            onClick={() => dispatch(setCartOff())}
          >
            <BiChevronsRight className="text-[50px] text-white" />
          </motion.i>
          <p className="text-2xl text-white font-semibold">Your Cart</p>
          <motion.i {...buttonClick} className="cursor-pointer">
            <FcClearFilters className="text-[30px] text-textColor" />
          </motion.i>
        </div>
  
        <div className="flex-1 flex flex-col items-start justify-start rounded-t-3xl bg-zinc-900 h-full py-6  gap-3 relative">
          {cart && cart?.length > 0 ? (
            <>
            
              {/* item listing */}
              <div className="flex flex-col w-full items-start justify-start gap-3 h-[65%] overflow-y-scroll scrollbar-none px-4">
                {cart &&
                  cart?.length > 0 &&
                  cart?.map((item, i) => (
                    // <h1>{i}</h1>
                    <CartItemCard key={i} index={i} data={item} />
                  ))}

                  {/* empty */}
              </div>

              <div className="bg-zinc-800 rounded-t-[60px] w-full h-[35%] flex flex-col items-center justify-start px-4 py-5 gap-5">

                <div className="w-full flex items-center justify-evenly">

                  <p className="text-3xl text-zinc-500 font-semibold">Total</p>
                  <p className="text-3xl text-orange-500 font-semibold flex items-center justify-center gap-1">
                    <HiCurrencyRupee className="text-primary" />
                    {total}
                  </p>
                  
                </div>
  
                <motion.button
                  {...buttonClick}
                  className="bg-orange-400 w-[70%] px-4 py-3 text-xl text-red-600 font-semibold hover:bg-orange-500 drop-shadow-md rounded-2xl"
                  onClick={handleCheckOut}
                >
                  Check Out
                </motion.button>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-3xl text-primary indent-8 font-bold">Your cart is empty !!</h1>
            </>
          )}
        </div>
      </motion.div>
    );
  };
  
  
  
  export default Cart;
