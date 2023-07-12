import React from 'react';
import { motion } from "framer-motion";

const Footer = () => {
    return (
        // <header className="fixed backdrop-filter backdrop-blur-sm bg-opacity-30 border-b border-gray-600 z-50 inset-x-0 top-0 flex items-center justify-between px-12 ms:px-20 py-6 text-slate-50 bg-slate-700">


        <footer class="mt-auto w-full bg-white shadow dark:bg-gray-800 z-50 inset-x-0 bottom-0 flex items-center justify-between ">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Night Bites™</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>


    );
}

export default Footer;
