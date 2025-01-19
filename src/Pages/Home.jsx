import React from 'react'
import { useState } from 'react';
import Header from '../Components/Header'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Footer from '../Components/Footer';
import Proc1 from '../Assets/proc1.webp'

function Home() {

    const [open, setOpen] = useState(false);
    return (
        <>
            <Header />

            {/* hero */}
            <div class="mx-[6%] my-16 px-4 lg:px-20 md:grid grid-cols-2 justify-center items-center ">
                <div class="md:flex flex-col justify-center">
                    <div class="flex items-center rounded-xl bg-slate-300 w-max p-2 px-4 ">
                        <div class="bg-blue-500 w-4 h-4 rounded-full"></div>
                        <h4 class="text-sm tracking-[0.02em] mx-2">#1 Digital company in the town!</h4>
                    </div>

                    <h1 class="text-6xl leading-[70px] font-bold capitalize md:w-[411px] mt-9 mb-4 ">We craft tailored Software
                        solutions.
                    </h1>

                    <p class="text-lg leading-7 md:w-[630px]">Turning client ideas into seamless, functional, <br /> and scalable
                        applications.</p>

                    <div class="flex gap-5 items-center mt-[50px]">
                        <button class="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition"> <Link to='/Contact'
                            onClick={() => setOpen(true)}>Connect With Us</Link></button>
                        <button class="btn btn-secondary">
                            <HashLink smooth to='/Services#projects' >
                                Browse Our Works
                            </HashLink>
                        </button>
                    </div>
                </div>

                <div class="hidden md:block">
                    <img src="images/hr_07.webp" alt="" />
                </div>
            </div>

            {/* serives */}
            <div class="mx-[6%] px-4 mt-28 grid place-items-center">
                <h1 class="font-semibold text-4xl text-center leading-[56px]">Services that drive success and innovation</h1>
                <p class="mt-5 font-medium text-center text-[18px] text-[#00000080] leading-7  px-7">We deliver innovative
                    solutions that empower
                    organizations to thrive. With cutting-edge technology and expert guidance, we transform operations and drive
                    growth.
                    Our focus on collaboration and results ensures lasting value and forward-thinking excellence.
                </p>

                <div class="grid md:grid-cols-3 justify-items-center gap-x-12 gap-y-10 mt-8 px-6">
                    <div class="flex flex-col justify-center items-center w-full max-w-[290px]">
                        <div class="relative h-20 w-20 rounded-full bg-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="absolute top-4 left-4 w-12 h-12">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                            </svg>


                        </div>
                        <h3 class="pt-4 text-center text-[20px] leading-8 text-[#6854FC] tracking-[0.02em]">UI/UX Designing
                        </h3>
                        <p class="text-center text-lg leading-7 text-[#00000080] tracking-[0.02em]">We design intuitive and
                            engaging user experiences. </p>
                    </div>
                    <div class="flex flex-col justify-center items-center w-full max-w-[290px]">
                        <div class="relative h-20 w-20 rounded-full bg-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="absolute top-4 left-4 w-12 h-12">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                            </svg>


                        </div>
                        <h3 class="pt-4 text-center text-[20px] leading-8 text-[#6854FC] tracking-[0.02em]">Front-end
                            Development
                        </h3>
                        <p class="text-center text-lg leading-7 text-[#00000080] tracking-[0.02em]">We design responsive
                            frontends with seamless functionality. </p>
                    </div>
                    <div class="flex flex-col justify-center items-center w-full max-w-[300px]">
                        <div class="relative h-20 w-20 rounded-full bg-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="absolute top-4 left-4 w-12 h-12">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" />
                            </svg>


                        </div>
                        <h3 class="pt-4 text-center text-[20px] leading-8 text-[#6854FC] tracking-[0.02em]">Back-end Development
                        </h3>
                        <p class="text-center text-lg leading-7 text-[#00000080] tracking-[0.02em]">We build robust backends
                            that ensure smooth and secure. </p>
                    </div>
                    <div class="flex flex-col justify-center items-center w-full max-w-[290px]">
                        <div class="relative h-20 w-20 rounded-full bg-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="absolute top-4 left-4 w-12 h-12 ">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
                            </svg>

                        </div>
                        <h3 class="pt-4 text-center text-[20px] leading-8 text-[#6854FC] tracking-[0.02em]">Graphic Designing
                        </h3>
                        <p class="text-center text-lg leading-7 text-[#00000080] tracking-[0.02em]">We craft impactful, visually
                            stunning designs for your brand. </p>
                    </div>
                    <div class="flex flex-col justify-center items-center w-full max-w-[290px]">
                        <div class="relative h-20 w-20 rounded-full bg-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="absolute top-4 left-4 w-12 h-12">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                            </svg>


                        </div>
                        <h3 class="pt-4 text-center text-[20px] leading-8 text-[#6854FC] tracking-[0.02em]">Cloud Deployment
                        </h3>
                        <p class="text-center text-lg leading-7 text-[#00000080] tracking-[0.02em]">We offer seamless cloud
                            deployment for optimal scalability. </p>
                    </div>
                    <div class="flex flex-col justify-center items-center w-full max-w-[290px]">
                        <div class="relative h-20 w-20 rounded-full bg-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="absolute top-4 left-4 w-12 h-12">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                            </svg>


                        </div>
                        <h3 class="pt-4 text-center text-[20px] leading-8 text-[#6854FC] tracking-[0.02em]">Database Management
                        </h3>
                        <p class="text-center text-lg leading-7 text-[#00000080] tracking-[0.02em]">We ensure secure and
                            efficient database management. </p>
                    </div>


                </div>
            </div>

            {/* our process */}
            <div class="mx-[6%] px-4 my-32 lg:px-20 lg:mt-32 md:grid grid-cols-[1fr,2fr] ">
                <div class="rounded-lg bg-slate-400">
                    <img style={{ height: '800px', objectFit: 'cover', filter: 'grayscale(1)' }} class="rounded-lg "
                        src={Proc1} alt="" srcset="" />
                </div>

                <div class="mt-20 md:mt-0 md:ml-16">
                    <h1 class="font-semibold text-4xl leading-[56px] ">Our Process</h1>
                    <p class="mt-5 font-medium text-[18px]  text-[#00000080] leading-7 ">
                        We begin with Discovery to understand your needs, then create a tailored Plan. Next,
                        we Execute with precision and Deliver the final solution that exceeds expectations.
                    </p>

                    <div>
                        <div class="my-7 flex gap-x-6 ">
                            <div class="w-[60px] h-[60px] rounded-[20px] bg-[#FCEDEE]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-16 h-16 p-4 ">
                                    <path
                                        d="M16.881 4.346A23.112 23.112 0 018.25 6H7.5a5.25 5.25 0 00-.88 10.427 21.593 21.593 0 001.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.592.772-2.468a17.116 17.116 0 01-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0018 11.25c0-2.413-.393-4.735-1.119-6.904zM18.26 3.74a23.22 23.22 0 011.24 7.51 23.22 23.22 0 01-1.24 7.51c-.055.161-.111.322-.17.482a.75.75 0 101.409.516 24.555 24.555 0 001.415-6.43 2.992 2.992 0 00.836-2.078c0-.806-.319-1.54-.836-2.078a24.65 24.65 0 00-1.415-6.43.75.75 0 10-1.409.516c.059.16.116.321.17.483z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-medium text-[18px] leading-7">Discovery</h3>
                                <p class="font-normal text-[18px] text-[#00000080]">
                                    We take the time to thoroughly understand your idea, objectives, and challenges, ensuring a
                                    clear and informed roadmap for success.
                                </p>
                            </div>
                        </div>
                        <div class="my-7 flex gap-x-6 ">
                            <div class="w-[60px] h-[60px] rounded-[20px] bg-[#BED3FF]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-16 h-16 p-4">
                                    <path
                                        d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
                                    <path
                                        d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
                                    <path
                                        d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
                                    <path
                                        d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
                                </svg>

                            </div>
                            <div>
                                <h3 class="font-medium text-[18px] leading-7">Plan</h3>
                                <p class="font-normal text-[18px] text-[#00000080]">
                                    Using insights from Discovery, we develop a customized strategy that
                                    outlines the most effective approach to achieve your goals.
                                </p>
                            </div>
                        </div>
                        <div class="my-7 flex gap-x-6 ">
                            <div class="w-[60px] h-[60px] rounded-[20px] bg-[#DEFEEA]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-16 h-16 p-4">
                                    <path fill-rule="evenodd"
                                        d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                                        clip-rule="evenodd" />
                                </svg>

                            </div>
                            <div>
                                <h3 class="font-medium text-[18px] leading-7">Execute</h3>
                                <p class="font-normal text-[18px] text-[#00000080]">
                                    Our experienced team works diligently to bring the plan to life, focusing on precision,
                                    efficiency, and quality throughout the process.
                                </p>
                            </div>
                        </div>
                        <div class="my-7 flex gap-x-6 ">
                            <div class="w-[60px] h-[60px] rounded-[20px] bg-[#FFEEA6]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-16 h-16 p-4">
                                    <path fill-rule="evenodd"
                                        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                                        clip-rule="evenodd" />
                                    <path
                                        d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                                </svg>

                            </div>
                            <div>
                                <h3 class="font-medium text-[18px] leading-7">Deliver</h3>
                                <p class="font-normal text-[18px] text-[#00000080]">
                                    We deliver a final solution that not only meets but exceeds your expectations,
                                    ensuring it drives lasting results and value for your organization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mx-[6%] py-[69px] my-[90px] bg-[#C4C4C426]">
                <div class=" grid md:grid-cols-2 md:divide-x-4 gap-8 px-4 lg:px-20 ">

                    <h1 class="text-center md:text-left text-[37px] font-semibold leading-[52px]">
                        We’re a streamlined creative agency that leverages design and development to tackle challenges.
                    </h1>


                    <p
                        class="text-center md:text-left pt-10 md:pt-0 md:pl-8 font-normal text-[18px] text-[#00000080] leading-7">
                        As a lean creative agency, we tackle challenges by combining innovative design and expert development.
                        Our efficient approach ensures we deliver impactful solutions that drive success and elevate your brand.
                    </p>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home
