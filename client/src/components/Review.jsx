import { motion } from 'framer-motion';
import React from 'react';
import ReviewForm from './ReviewForm';

const Review = () => {
    return (
        <motion.div className="w-full flex items-start justify-start flex-col px-12 ms:px-20">
            <div className='w-full flex items-center justify-between'>
                <div className='flex flex-col items-start justify-start gap-1'>
                    <p className='text-2xl text-headingColor font-bold'>
                        Leave a review
                    </p>
                    <div className='w-40 h-1 rounded-md bg-orange-500'></div>
                </div>
            </div>

            <div className="w-full pt-6 flex items-center justify-center gap-6 py-8">
                <ReviewForm />
            </div>

        </motion.div>
    );
}

export default Review;
