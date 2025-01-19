import { useState } from "react";
import React from 'react'


function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header x-data="{open:false}" class="relative shadow py-2 font-inter">
                <nav aria-label="main-nav" class="mx-[6%] my-4 flex items-center justify-between">
                    <a href="./index.html" aria-label="Devs Logo" class="font-roboto font-bold text-[0px]">
                        <span class="text-yellow text-2xl">Rago</span>
                        <span class="text-2xl">Devs</span>
                    </a>

                    {/*Large Sreen Nav Items */}
                    <ul class="hidden md:flex items-center  space-x-8 lg:space-x-16">
                        <li>
                            <a href="./index.html">Home</a>
                        </li>
                        <li>
                            <a href="./about.html">About Us</a>
                        </li>
                        <li>
                            <a href="./service.html">Service</a>
                        </li>
                        <li>
                            <a href="./contact.html">Contact Us</a>
                        </li>
                    </ul>

                    {/* </nav> Hamburger Btn */}
                    <button aria-label="hamburger-menu-btn" class="md:hidden cursor-pointer" onClick={() => setOpen(true)} >
                        <div class="space-y-2">
                            <div class="w-8 h-0.5 bg-gray-600"></div>
                            <div class="w-8 h-0.5 bg-gray-600"></div>
                            <div class="w-8 h-0.5 bg-gray-600"></div>
                        </div>
                    </button>

                    {/* Small Sreen Nav Items */}
                    <div className={`md:hidden absolute top-0 left-0 z-10 transform duration-300 pl-[10%] bg-[#fbfbf9] shadow-lg w-3/4 sm:w-1/2 h-screen ${open ? 'translate-x-0 ease-in' : '-translate-x-full ease-out opacity-0'
                        }`}
                        >
                <div class="flex justify-between pt-8">
                        <a href="#" aria-label="Devs Logo" class="font-roboto font-bold text-[0px]">
                            <span class="text-yellow text-xl">Rago</span>
                            <span class="text-xl">Devs</span>
                        </a>
                        <button aria-label="close-menu" class="inline-block pr-[10%]"   onClick={() => setOpen(false)} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <ul class="flex flex-col space-y-8 pt-8">
                    <li>
                        <a onClick={() => setOpen(true)} href="./index.html">Home</a>
                    </li>
                    <li>
                        <a onClick={() => setOpen(true)} href="./about.html">About Us</a>
                    </li >
                    <li>
                        <a onClick={() => setOpen(true)} href="./service.html">Service</a>
                    </li >
                    <li>
                        <a onClick={() => setOpen(true)} href="./contact.html">Contact Us</a>
                    </li >
                </ul >

            </div >

            {/* < div class="flex items-center space-x-16" >
        <div>
            <button class="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition">Connect with
                us</button>
        </div>
            </div > */}

        </nav >
    </header >
        </>
    )
}

export default Header
