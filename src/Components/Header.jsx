import { useState } from "react";
import React from 'react'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="relative shadow py-2 font-inter" data-open={open}>
                <nav aria-label="main-nav" className="mx-[6%] my-4 flex items-center justify-between">
                    <Link to='/' aria-label="Devs Logo" className="font-roboto font-bold text-[0px]">
                        <span className="text-yellow text-2xl">Rago</span>
                        <span className="text-2xl">Devs</span>
                    </Link>

                    {/*Large Sreen Nav Items */}
                    <ul className="hidden md:flex items-center  space-x-8 lg:space-x-16">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About Us</Link>
                        </li>
                        <li>
                            <Link to='/services'>Services</Link>
                        </li>
                        <li>
                            <HashLink
                                smooth
                                to="/services#projects"
                                scroll={(el) =>
                                    el.scrollIntoView({ behavior: 'smooth', duration: 1500 })
                                }
                            >
                                Our Projects
                            </HashLink>
                        </li>
                        <li>
                            <Link to='/contact'>Contact Us</Link>
                        </li>
                    </ul>

                    {/* </nav> Hamburger Btn */}
                    <button aria-label="hamburger-menu-btn" className="md:hidden cursor-pointer" onClick={() => setOpen(true)} >
                        <div className="space-y-2">
                            <div className="w-8 h-0.5 bg-gray-600"></div>
                            <div className="w-8 h-0.5 bg-gray-600"></div>
                            <div className="w-8 h-0.5 bg-gray-600"></div>
                        </div>
                    </button>

                    {/* Small Sreen Nav Items */}
                    <div className={`md:hidden absolute top-0 left-0 z-10 transform duration-300 pl-[10%] bg-[#fbfbf9] shadow-lg w-3/4 sm:w-1/2 h-screen ${open ? 'translate-x-0 ease-in' : '-translate-x-full ease-out opacity-0'
                        }`}
                    >
                        <div className="flex justify-between pt-8">
                            <a href="/" aria-label="Devs Logo" className="font-roboto font-bold text-[0px]">
                                <span className="text-yellow text-xl">Rago</span>
                                <span className="text-xl">Devs</span>
                            </a>
                            <button aria-label="close-menu" className="inline-block pr-[10%]" onClick={() => setOpen(false)} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <ul className="flex flex-col space-y-8 pt-8">
                            <li>
                                <Link to='/' onClick={() => setOpen(true)}>Home</Link>
                            </li>
                            <li>
                                <Link to='/about' onClick={() => setOpen(true)}>About Us</Link>
                            </li >
                            <li>
                                <Link to='/services' onClick={() => setOpen(true)} >Service</Link>
                            </li >
                            <li>
                            <HashLink
                                smooth
                                to="/services#projects"
                                scroll={(el) =>
                                    el.scrollIntoView({ behavior: 'smooth', duration: 1500 })
                                }
                            >
                                Our Works
                            </HashLink>
                        </li>
                            <li>
                                <Link to='/contact' onClick={() => setOpen(true)}>Contact Us</Link>
                            </li >
                        </ul >

                    </div >

                    {/* < div className="flex items-center space-x-16" >
        <div>
            <button className="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition">Connect with
                us</button>
        </div>
            </div > */}

                </nav >
            </header >
        </>
    )
}

export default Header
