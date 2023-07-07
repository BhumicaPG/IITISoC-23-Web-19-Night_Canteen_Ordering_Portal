import React from 'react';
import {motion} from "framer-motion";
import GridGallery from './GridGallery';

const Gallery = () => {
    const images = [
        "https://source.unsplash.com/1600x900/?sandwich",
        "https://source.unsplash.com/1600x900/?biryani",
        "https://source.unsplash.com/1600x900/?coffee",
        "https://source.unsplash.com/1600x900/?macandcheese",
        "https://source.unsplash.com/1600x900/?noodles",
        "https://source.unsplash.com/1600x900/?chai",
        "https://source.unsplash.com/1600x900/?southindianfood",
        "https://source.unsplash.com/1600x900/?idli",
        "https://source.unsplash.com/1600x900/?pizza",
        "https://source.unsplash.com/1600x900/?burger",
        "https://source.unsplash.com/1600x900/?fried chicken",
        "https://source.unsplash.com/1600x900/?paneerbuttermasala",
      ];
      
    return (
        <motion.div className="w-full flex items-start justify-start flex-col px-12 ms:px-20">
        <div className='w-full flex items-center justify-between'>
                <div className='flex flex-col items-start justify-start gap-1'>
                        <p className='text-2xl text-headingColor font-bold'>
                                Gallery
                        </p>
                        <div className='w-40 h-1 rounded-md bg-orange-500'></div>
                </div>
        </div>
        <div className="w-full pt-6 flex items-center justify-center gap-6 py-8">
            <GridGallery images={images} />
        </div>
        </motion.div>
    );
}

export default Gallery;
