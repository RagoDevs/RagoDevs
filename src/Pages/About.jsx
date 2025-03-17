import React from 'react'
import { useState } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import hand from '../Assets/hand.webp'
import lug from '../Assets/lug.jpeg'
import jerry from '../Assets/jerry.jpeg'

function About() {
    const [, setOpen] = useState(false);
    return (
        <>
            <Header />

            {/* hero header*/}
            <div class="container mx-auto text-center py-20">
                <h1 class="font-bold text-[48px] leading-[58px] capitalize pb-3">
                    About Us
                </h1>
                <p class="font-normal text-[18px] leading-7 text-center px-4">
                    We are a creative agency specializing in innovative design and development to deliver tailored solutions that solve real-world challenges.
                </p>
            </div>

            {/* section */}
            <div class="container mx-auto py-[69px] mb-24  bg-[#C4C4C426]">
                <div class=" grid md:grid-cols-2 md:divide-x-4 gap-8 px-4 lg:px-20 ">
                    <h1 class="text-center md:text-left text-[40px] font-semibold leading-[56px]">
                        You guessed it. We’re changing the game.
                    </h1>
                    <p
                        class=" text-center md:text-left pt-10 md:pt-0 md:pl-8 font-normal text-[18px] text-[#00000080] leading-7">
                        We utilize the latest frameworks, cutting-edge technologies, and robust security systems
                        to ensure the delivery of high-quality, innovative, and secure products
                        that meet modern standards and exceed expectations.
                    </p>
                </div>
            </div>

            {/* team */}
            <div class="container mx-auto px-4 lg:px-20">
                <h3 class="font-semibold text-[40px] text-center leading-[56px] mb-1">
                    Driving Our Mission
                </h3>
                <p class="container mx-auto md:w-[929px] font-normal text-[18px] leading-7 text-center">
                    Our team of skilled designers and developers collaborate to deliver innovative, high-quality solutions.
                    United by creativity and expertise, we turn ideas into impactful results while driving our mission forward.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-20 mt-14">
                    <div class="flex flex-col items-center">
                        <div class="w-[180px] h-[180px] rounded-full bg-blue-200">
                            <img src={lug} alt="lug" loading="lazy" style={{ borderRadius: '80px' }} />
                        </div>
                        <h4 class="font-semibold text-[24px] text-center leading-7 mb-1 mt-5">Lugano Abel</h4>
                        <p class="font-normal text-[18px] leading-7 text-center">Full-stack Developer </p>
                    </div>

                    <div class="flex flex-col items-center">
                        <div class="w-[180px] h-[180px] rounded-full bg-blue-200">
                            <img src={jerry} alt="jerry" loading="lazy" style={{ borderRadius: '80px' }} />
                        </div>
                        <h4 class="font-semibold text-[24px] text-center leading-7 mb-1 mt-5">Jerry Swigo</h4>
                        <p class="font-normal text-[18px] leading-7 text-center">Front-end Developer</p>
                    </div>

                    {/*<div class="flex flex-col items-center">
                <div class="w-[180px] h-[180px] rounded-full bg-blue-200">
                    <!-- <img src="" alt=""> 
                </div>
                <h4 class="font-semibold text-[24px] text-center leading-7 mb-1 mt-5">Cameron Williamson</h4>
                <p class="font-normal text-[18px] leading-7 text-center">Viverra ut potenti </p>
            </div>
            <div class="flex flex-col items-center">
                <div class="w-[180px] h-[180px] rounded-full bg-blue-200">
                    <!-- <img src="" alt=""> 
                </div>
                <h4 class="font-semibold text-[24px] text-center leading-7 mb-1 mt-5">Dianne Russell</h4>
                <p class="font-normal text-[18px] leading-7 text-center">Viverra ut potenti </p>
            </div>

            <div class="flex flex-col items-center">
                <div class="w-[180px] h-[180px] rounded-full bg-blue-200">
                    <!-- <img src="" alt=""> 
                </div>
                <h4 class="font-semibold text-[24px] text-center leading-7 mb-1 mt-5">Leslie Alexander</h4>
                <p class="font-normal text-[18px] leading-7 text-center">Viverra ut potenti </p>
            </div>

            <div class="flex flex-col items-center">
                <div class="w-[180px] h-[180px] rounded-full bg-blue-200">
                    <!-- <img src="" alt=""> 
                </div>
                <h4 class="font-semibold text-[24px] text-center leading-7 mb-1 mt-5">Esther Howard</h4>
                <p class="font-normal text-[18px] leading-7 text-center">Viverra ut potenti </p>
            </div> */}
                </div>
            </div>


            {/* join us */}

            <div>
                <div
                    class="container mx-auto px-4 lg:px-20 py-[52px] my-32 grid  first-letter: md:grid-cols-2 gap-7 md:gap-[100px] place-items-center">
                    <img class="rounded-3xl" src={hand} alt="hand"/>
                        <div>
                            <h1 class="font-semibold text-4xl leading-[56px]">Join our team of change-makers.</h1>
                            <p class="font-normal text-[18px] leading-7 text-[#00000080] pt-5 pb-8">
                                Join our team of passionate change-makers, where creativity, collaboration,
                                and innovation come together to shape the future and drive meaningful impact.
                                We are committed to pushing boundaries and creating solutions that make a real difference.
                            </p>
                            <button class="px-5 py-[10px] bg-[#6854FC] rounded-[20px]"> <Link to='/Contact' onClick={() => setOpen(false)}>Contact Us</Link></button>
                        </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default About
