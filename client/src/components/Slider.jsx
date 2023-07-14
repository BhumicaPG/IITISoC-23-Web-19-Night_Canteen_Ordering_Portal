import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "../assets/css/slider.css";
import "swiper/css/bundle";
import { useSelector } from 'react-redux';

import {SliderCard} from "../components";

const Slider = () => {
    const products = useSelector((state) => state.products);
    const [fruits, setFruits] = useState(null);
    useEffect(() => {
        setFruits(products?.filter((data) => data.product_category === "fruits"));
        console.log(fruits);
    }, [products]);

        return <div className='w-full pt-6'>
            <Swiper
                slidesPerView={4}
                centeredSlides={false}
                spaceBetween={30}
                grabCursor={true}
                // modules={[Pagination]}
                className="mySwiper"
            >
                <div className=" w-full flex items-center justify-evenly flex-wrap gap-4 mt-4 ">
                {fruits && 
                    fruits.map((data, i) => (
                    // <SwiperSlide key={i}>
                    <SliderCard key = {i} data={data} index={i} />
                    // </SwiperSlide> 
                ))}
                </div>
            </Swiper>
        </div>
};

export default Slider;
