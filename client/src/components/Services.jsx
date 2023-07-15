import React, { useEffect, useRef } from 'react';

import { Header, Footer } from "../components";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Mousewheel, Pagination } from 'swiper';
// SwiperCore.use([Pagination, EffectCoverflow]);


import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/bundle';
import 'swiper/css';

import '../assets/css/Services.css';
const Services = () => {

    return (
        <main className='w-full min-h-screen flex items-center justify-start flex-col bg-slate-200'>

            <Header />

            <motion.div className="w-full flex items-start justify-start flex-col mt-40 px-12 ms:px-20">

                <div className='w-full flex items-center justify-between'>
                    <div className='flex flex-col items-start justify-start gap-1'>
                        <p className='text-2xl text-headingColor font-bold'>
                            Services
                        </p>
                        <div className='w-40 h-1 rounded-md bg-orange-500'></div>
                    </div>
                </div>

                <div className="bg-blend-overlay hover:drop-shadow-lg backdrop-blur-md bg-opacity-30 flex h-full items-center rounded-lg border border-gray-400 bg-white p-6 text-center text-slate-800 lg:pl-12 lg:text-left">
                            
                <div className="flex flex-wrap w-full  pt-6 items-center justify-center py-8">

                    <Swiper
                        direction={'vertical'}
                        slidesPerView={1}
                        spaceBetween={30}
                        mousewheel={true}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Mousewheel, Pagination]}
                        className="mySwiper"
                    >

                        <SwiperSlide>
                                    <div class="swiper-slide swiper-slide-one">
                                        <div class="swiper-image" data-swiper-parallax-y="-20%">
                                            <div class="swiper-image-inner swiper-image-left swiper-image-one">
                                                <h1>A <span class="emphasis">Breath</span>. <br /><span>Of Fresh Air.</span></h1>
                                                <p>Chapter I, page XV</p>
                                            </div>
                                        </div>
                                        <div class="swiper-image" data-swiper-parallax-y="35%">
                                            <div class="swiper-image-inner swiper-image-right swiper-image-two">
                                                <p class="paragraph">
                                                    A Prophet sat in the market-place and told the fortunes of all who cared to engage his services. Suddenly there came running up one who told him that his house had been broken into by thieves, and that they had made off with everything they could lay
                                                    hands on.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div class="swiper-slide swiper-slide-two">
                                        <div class="swiper-image" data-swiper-parallax-y="-20%">
                                            <div class="swiper-image-inner swiper-image-left swiper-image-three">
                                                <h1>The <span class="emphasis">Drop</span>. <br /><span>Of Eternal life.</span></h1>
                                                <p>Chapter II, page VII</p>
                                            </div>
                                        </div>
                                        <div class="swiper-image" data-swiper-parallax-y="35%">
                                            <div class="swiper-image-inner swiper-image-right swiper-image-four">
                                                <p class="paragraph">
                                                    A thirsty Crow found a Pitcher with some water in it, but so little was there that, try as she might, she could not reach it with her beak, and it seemed as though she would die of thirst within sight of the remedy.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div class="swiper-slide swiper-slide-three">
                                        <div class="swiper-image" data-swiper-parallax-y="-20%">
                                            <div class="swiper-image-inner swiper-image-left swiper-image-five">
                                                <h1>A <span class="emphasis">Sense</span>. <br /><span>Of Things to Come.</span></h1>
                                                <p>Chapter III, page XI</p>
                                            </div>
                                        </div>
                                        <div class="swiper-image" data-swiper-parallax-y="35%">
                                            <div class="swiper-image-inner swiper-image-right swiper-image-six">
                                                <p class="paragraph">
                                                    Every man carries Two Bags about with him, one in front and one behind, and both are packed full of faults. The Bag in front contains his neighbours’ faults, the one behind his own. Hence it is that men do not see their own faults, but never fail to see
                                                    those of others.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                    </Swiper>

                </div>
                </div>
            </motion.div>

            <Footer />
        </main>


    );
}

export default Services;
