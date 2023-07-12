import React, { useRef, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import styled from "styled-components";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';

import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css';

import '../assets/css/gallery.css'


export default function GridGallery() {

  return (
    <>
    
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {/* <StyledGridGallery> */}
        <SwiperSlide>
          <img src="https://source.unsplash.com/1600x900/?sandwich" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/1600x900/?biryani" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/1600x900/?coffee" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/1600x900/?macandcheese" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/1600x900/?noodles" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/1600x900/?south+indian+food" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/1600x900/?pizza" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/1600x900/?chai" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/1600x900/?burger" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/1600x900/?paneer+butter+masala" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/1600x900/?fried+chicken" />
        </SwiperSlide>
        {/* </StyledGridGallery> */}
      </Swiper>
    
    </>
  );


// const StyledGridGallery = styled.div`
// <Swiper> {
//       #app { height: 100% }
//       html,
//       body {
//         position: relative;
//         height: 100%;
//       }

//       body {
//         background: rgb(226, 232, 240);
//         font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
//         font-size: 14px;
//         color: #000;
//         margin: 0;
//         padding: 0;
//       }

//       .swiper {
//         width: 100%;
//         padding-top: 12px;
//         padding-bottom: 40px;
//       }

//       .swiper-slide {
//         background-position: center;
//         background-size: cover;
//         width: 300px;
//         height: 300px;
//         background: rgb(226, 232, 240);
        
//       }

//       .swiper-slide img {
//         display: block;
//         width: 100%;
//         overflow: hidden;
//         border-radius: 8px;
        
//       }
//     }
// `;



  //   const [imagesShownArray, setImagesShownArray] = useState(
  //     Array(images.length).fill(false)
  //   );

  //   const imageVisibleChange = (index, isVisible) => {
  //     if (isVisible) {
  //       setImagesShownArray((currentImagesShownArray) => {
  //         currentImagesShownArray[index] = true;
  //         return [...currentImagesShownArray];
  //       });
  //     }
  //   };

  //   return (
  //     <div className="grid grid-cols-4 gap-6 ">
  //       {images &&
  //         images.map((imageUrl, index) => (
  //           <VisibilitySensor
  //             key={index}
  //             partialVisibility={true}
  //             offset={{ bottom: 80 }}
  //             onChange={(isVisible) => imageVisibleChange(index, isVisible)}
  //           >
  //             <GridGalleryCard
  //               imageUrl={imageUrl}
  //               show={imagesShownArray[index]}
  //             />
  //           </VisibilitySensor>
  //         ))}
  //     </div>
  //   );
  // }

  // function GridGalleryCard({ imageUrl, show }) {
  //   return (
  //     <div
  //       className={`relative transition ease-in duration-300 transform rounded ${
  //         show ? "" : "translate-y-16 opacity-0"
  //       }`}
  //     >
  //       <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0 ">
  //         <div className="absolute inset-0 bg-black opacity-70 rounded-xl border border-gray-400" ></div>
  //          <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm">

  //         </div> 
  //       </div>

  //       <img src={imageUrl} alt="" className="rounded-xl border border-gray-400"/>
  //     </div>
  //   );
}