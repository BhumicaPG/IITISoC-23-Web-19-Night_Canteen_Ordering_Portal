import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "../assets/css/swiperStyles.css";
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

        return <div className='w-full pt-24'>
            <Swiper
                slidesPerView={4}
                centeredSlides={false}
                spaceBetween={30}
                grabCursor={true}
                // modules={[Pagination]}
                className="mySwiper"
            >
                {/* {fruits && 
                    fruits.map((data, i) => (
                    <SwiperSlide key={i}>
                    <SLiderCard key = {i} data={data} index={i} />
                    </SwiperSlide> 
                ))} */}

                {/* comment from here */}
                <SwiperSlide>
                    <SliderCard />
                </SwiperSlide>
                <SwiperSlide><SliderCard /></SwiperSlide>
                <SwiperSlide><SliderCard /></SwiperSlide>
                <SwiperSlide><SliderCard /></SwiperSlide>
                <SwiperSlide><SliderCard /></SwiperSlide>
                <SwiperSlide><SliderCard /></SwiperSlide>
                <SwiperSlide><SliderCard /></SwiperSlide>
                <SwiperSlide><SliderCard /></SwiperSlide>
                {/* till here */}

            </Swiper>

        </div>
};

export default Slider;
