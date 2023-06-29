import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { get } from '../../../server/functions/routes/Products';
import { getAllProducts } from '../api';
import { setAllProducts } from '../context/actions/productActions';

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

  return (
    <div >DBHome</div>
  )
}


