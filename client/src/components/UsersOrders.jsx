import React, { useEffect, useState } from 'react';
import { Header, Footer, OrderData } from "../components";
import { useDispatch, useSelector } from 'react-redux';
import { setOrders } from '../context/actions/ordersAction';
import { getAllOrder } from '../api';

const UsersOrders = () => {
    const user = useSelector((state) => state.user);
    const orders = useSelector((state) => state.orders);
    const dispatch = useDispatch();

    const [userOrders, setUserOrders] = useState(null);

    useEffect(() => {
        if (!orders) {
            getAllOrder().then((data) => {
                dispatch(setOrders(data));
                setUserOrders(data?.filter((item) => item.userId === user?.user_id));
            });
        } else {
            setUserOrders(orders?.filter((data) => data.userId === user?.user_id));
        }
        console.log("orders me kya aa rha hai")
        console.log(orders?.filter((data) => data.userId === user?.user_id))
        console.log("userOrders ki condition", userOrders && userOrders.length > 0)
    }, [orders]);

    return (
        <main className='w-screen min-h-screen flex items-center justify-start flex-col bg-slate-200' 
            style={{backgroundImage : `url(https://img.freepik.com/premium-vector/leaves-natural-colours_24381-1923.jpg)`, 
            // style={{backgroundImage : `url(https://img.freepik.com/premium-vector/different-web-interface-color-doodle-silhouettes-seamless-pattern_95169-2647.jpg?w=740)`, 
            backgroundSize: "cover",
            backgroundRepeat : "no-repeat", 
            backgroundPosition: "center"}}
        >
            <Header />
            <div className='w-full flex flex-col items-start justify-center mt-40 px-6 md:px-24 2xl:px-96  pb-12 gap-12'>
                
                {userOrders && userOrders.length > 0 ? (
                    <>
                        {userOrders.map((item, i) => (
                            <OrderData key={i} index={i} data={item} admin={false} />
                        ))}
                    </>
                ) : (
                    
                    <>
                        <div className="w-full text-center flex justify-center text-[72px] text-headingColor font-bold">
                            No Orders
                        </div>
                    </>
                    
                )}


            </div>
            {/* {isCart && <Cart /> } */}
            <Footer />
        </main>
    )
}

export default UsersOrders;
