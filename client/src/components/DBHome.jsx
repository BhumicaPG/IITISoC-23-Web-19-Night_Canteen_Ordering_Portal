import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { get } from '../../../server/functions/routes/Products';
import { getAllProducts} from '../api';
import { setAllProducts} from '../context/actions/productActions';
import { setOrders } from "../context/actions/ordersAction";
import { getAllOrder, updateOrderSts } from "../api";
import { CChart } from '@coreui/react-chartjs'

export default function DBHome(){

  // for listing of the type of the products:
  const products=useSelector((state)=>state.products);
  const dispatch=useDispatch();

  useEffect(()=>{
    // console.log("hello")
    if(!products){
      getAllProducts().then((data)=>{
        console.log("hemlloooooooo ye raha data : ")
        console.log(data);

        console.log("dispatch hora hai : ")
        dispatch(setAllProducts(data));
        console.log("dispatch hogya hai")
      });
    }
  }, []);

  // for listing of the status of the orders:
  let orders = useSelector((state) => state.orders);
  // console.log("ye raha orders :")
  // console.log(orders)
  
  // console.log(orders?.filter((order) => order.sts === 'ordered').length);
  // console.log(orders?.filter((order) => order.sts === "delivered").length)
  // console.log(orders?.filter((order) => order.sts === 'cancelled').length)
  // console.log(orders?.filter((order) => order.sts === 'paid').length)
  // console.log(orders?.filter((order) => order.sts === 'unpaid').length)

  useEffect(() => {
    if (!orders) {
      getAllOrder().then((data) => {
        dispatch(setOrders(data));
      });
    }
  }, []);

  const fruits=products?.filter((product)=>product.product_category==="Fruits");
  const drinks=products?.filter((product)=>product.product_category==="drinks");
  const desserts=products?.filter((product)=>product.product_category==="desserts");
  const rice=products?.filter((product)=>product.product_category==="rice");
  const curry=products?.filter((product)=>product.product_category==="curry");
  const chinese=products?.filter((product)=>product.product_category==="chinese");
  const bread=products?.filter((product)=>product.product_category==="bread");
  const mughlai=products?.filter((product)=>product.product_category==="mughlai");
  const nonveg=products?.filter((product)=>product.product_category==="nonveg");


  return (
    <div className='flex items-center justify-center w-full h-full pt-6' >
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 h-full">
        
        <div className="flex items-center justify-center">
          <div className="w-480 md:w-508">
            <CChart
              type="polarArea"
              data={{
                labels: ['Drinks', 'Desserts', 'Fruits', 'Rice', 'Curry', 'Chinese', 'Bread', 'Mughlai', 'Non-Veg'],
                datasets: [
                  {
                    data: [
                      drinks?.length,
                      desserts?.length,
                      fruits?.length,
                      rice?.length,
                      curry?.length,
                      chinese?.length,
                      bread?.length,
                      mughlai?.length,
                      nonveg?.length,
                    ],
                    // backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
                    // backgroundColor: ['#FF7F50', '#6A5ACD', '#FFD700', '#00CED1', '#FF1493', '#32CD32', '#8A2BE2', '#FF4500', '#1E90FF'] ,
                    // backgroundColor: ['#CCCCCC', '#888888', '#AAAAAA', '#DDDDDD', '#666666'],
                    backgroundColor: ['#FF4500', '#FFA500', '#FF69B4', '#00FFFF', '#FF00FF', '#00FF00', '#FFFF00', '#1E90FF', '#FF6347'],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    labels: {
                      color: '#000000',
                    }
                  },
                  title: {
                    display: true,
                    text: 'Food Categories', // Replace with your desired heading
                    // color: '#000000',
                    color: '#333333' ,
                    font: {
                      size: 20,
                      weight: 'bold',
                    },
                  },
                },
                scales: {
                  r: {
                    grid: {
                      // color: '#000000',
                      color: '#333333' 
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-480 md:w-508">
          <CChart
            type="doughnut"
            data={{
              // labels: ['Preparing', 'Delivered', 'Cancelled', 'Paid', 'Unpaid'],
              labels: ['Preparing', 'Cancelled', 'Delivered'],
              datasets: [
                {
                  // backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                  // backgroundColor:    ['#FF8C00', '#8B008B', '#00FF00'],
                  backgroundColor:    ['#FFC312','#b91c1c','#12CBC4'],
                  data: [
                    orders?.filter((order) => order.sts === "preparing").length,
                    orders?.filter((order) => order.sts === "delivered").length,
                    orders?.filter((order) => order.sts === 'cancelled').length,
                    // orders?.filter((order) => order.sts === 'paid').length,
                    // orders?.filter((order) => order.sts === 'unpaid').length,
                  ],
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  labels: {
                    color: '#000000',
                  }
                },
                title: {
                  display: true,
                  text: 'Order Status', // Replace with your desired heading
                  color: '#000000',
                  font: {
                    size: 18,
                    weight: 'bold',
                  },
                },
              },
            }}
          />
          </div>
        </div>
          
          
      </div>
      
    </div>
  )
}


