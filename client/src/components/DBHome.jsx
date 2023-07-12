import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { get } from '../../../server/functions/routes/Products';
import { getAllProducts } from '../api';
import { setAllProducts } from '../context/actions/productActions';
import { CChart } from '@coreui/react-chartjs'

export default function DBHome(){
  const products=useSelector((state)=>state.products);
  const dispatch=useDispatch();

  // console.log("hello")

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
                    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
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
                    color: '#000000',
                    font: {
                      size: 18,
                      weight: 'bold',
                    },
                  },
                },
                scales: {
                  r: {
                    grid: {
                      color: '#000000',
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
              labels: ['Ordered', 'Delivered', 'Cancelled', 'Paid', 'Unpaid'],
              datasets: [
                {
                  backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                  data: [40, 20, 80, 10],
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
                  text: 'JavaScript Frameworks', // Replace with your desired heading
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


