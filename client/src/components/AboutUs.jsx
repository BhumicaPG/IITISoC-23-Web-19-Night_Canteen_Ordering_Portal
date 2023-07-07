import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <motion.div className="w-full flex items-start justify-start flex-col px-12 ms:px-20">

            <div className='w-full flex items-center justify-between'>
                <div className='flex flex-col items-start justify-start gap-1'>
                    <p className='text-2xl text-headingColor font-bold'>
                        About Us
                    </p>
                    <div className='w-40 h-1 rounded-md bg-orange-500'></div>
                </div>
            </div>

            
            <div className="w-full pt-6 flex items-center justify-center gap-6 py-8">
            <section class="mb-6">
                <div class="flex flex-wrap">
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
                        <div class="flex lg:py-12">
                            <img src="https://source.unsplash.com/1600x900/?junkfood"
                                class="bg-blend-overlay hover:drop-shadow-lg backdrop-blur-md flex z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]" alt="image" />
                        </div>
                    </div>

                    <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                        <div
                            class="bg-blend-overlay hover:drop-shadow-lg backdrop-blur-md bg-opacity-30 flex h-full items-center rounded-lg border border-gray-400 bg-white p-6 text-center text-slate-800 lg:pl-12 lg:text-left">
                            <div class="lg:pl-12">
                                <h2 class="mb-8 text-3xl font-bold">Let it surprise you</h2>
                                <p class="mb-8 pb-2 lg:pb-0">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Maxime, sint, repellat vel quo quisquam accusamus in qui at
                                    ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum
                                    distinctio eum neque!
                                </p>

                                <div class="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
                                    <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                            stroke="currentColor" class="mr-2 h-5 w-5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Best team
                                    </p>

                                    <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                            stroke="currentColor" class="mr-2 h-5 w-5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Best quality
                                    </p>

                                    <p class="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                            stroke="currentColor" class="mr-2 h-5 w-5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Best experience
                                    </p>
                                </div>

                                <p>
                                    Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                                    porta dui, sit amet rutrum enim massa in ante. Curabitur in
                                    justo at lorem laoreet ultricies. Nunc ligula felis, sagittis
                                    eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
                                    ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis
                                    faucibus sapien eget tortor finibus, a eleifend lectus dictum.
                                    Cras tempor convallis magna id rhoncus. Suspendisse potenti.
                                    Nam mattis faucibus imperdiet. Proin tempor lorem at neque
                                    tempus aliquet. Phasellus at ex volutpat, varius arcu id,
                                    aliquam lectus. Vestibulum mattis felis quis ex pharetra
                                    luctus. Etiam luctus sagittis massa, sed iaculis est vehicula
                                    ut.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </motion.div>
    );
}

export default AboutUs;
