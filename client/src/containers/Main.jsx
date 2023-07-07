import React, { useEffect } from 'react'
import {Cart, FilterSection, Header, Home, HomeSlider, Gallery, Review, AboutUs} from "../components";
// import slider from "../assets/img/burger.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from "../api"
import {setAllProducts} from "../context/actions/productActions";

const Main = () => {

  const products = useSelector((state) => state.products);
  const isCart = useSelector((state) => state.isCart);
  const dispatch = useDispatch

  useEffect(() =>{
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, []);

  return(

    <main className='w-full min-h-screen flex items-center justify-start flex-col bg-slate-200'>

      <Header />
      <div className='w-full flex flex-col items-start justify-center gap-12 pb-24'>
        <Home />
        <HomeSlider />
        <AboutUs />
        {/* <FilterSection /> */}
        <Gallery />
        <Review />
      </div>
      {isCart && <Cart /> }
  </main>
  )
}

export default Main;
