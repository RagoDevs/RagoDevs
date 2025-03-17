import React from 'react'
import { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import hr from '../Assets/hr.jpg'
import stats from '../Assets/stats.jpg'
import queue from '../Assets/queue.webp'
import game from '../Assets/game.jpg'

function Services() {
    const [, setOpen] = useState(false);
    return (
        <>

            <Header />

            <div class="container mx-auto text-center pt-10 pb-20">
                <h1 class="font-bold text-[48px] leading-[58px] capitalize pb-3">
                    Services we provide
                </h1>
            </div>

            <div class="container mx-auto px-4 lg:px-20">
                <div class="grid md:grid-cols-2 gap-10">
                    <div class="p-10 bg-white drop-shadow-2xl md:drop-shadow-none rounded-xl md:rounded-3xl">
                        <div class="relative h-20 w-20 rounded-full bg-[#F0EEFF]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#6854FC" class="absolute top-4 left-4 w-12 h-12 ">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                            </svg>
                        </div>
                        <h3 class="font-semibold text-2xl leading-7 py-5">UI/UX Design</h3>
                        <p class="font-normal text-[18px] leading-[27px]">
                            Designing intuitive, user-friendly, and visually appealing interfaces to enhance user experiences. Key principles include consistency, clarity, accessibility, and flexibility, ensuring smooth interaction and adaptability across devices.
                        </p>
                        <div class="flex gap-1 md:gap-5 items-center mt-[30px]">
                            <button class=" px-4 py-2 md:px-3 md:py-[10px] bg-[#6854FC] rounded-[20px]"><Link to='/contact'> Connect Now</Link></button>
                            <button className="px-4 py-2 md:px-3 md:py-[10px] border-[#6854FC] rounded-[20px]">
                                <HashLink smooth to="#projects" className="text-inherit no-underline">
                                    Our Works
                                </HashLink></button>
                        </div>
                    </div>
                    <div class="p-10 bg-white drop-shadow-2xl md:drop-shadow-none rounded-xl md:rounded-3xl">
                        <div class="relative h-20 w-20 rounded-full bg-[#F0EEFF]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#6854FC" class="absolute top-4 left-4 w-12 h-12 ">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                            </svg>
                        </div>
                        <h3 class="font-semibold text-2xl leading-7 py-5">Front-end Development</h3>
                        <p class="font-normal text-[18px] leading-[27px]">
                            Building the visual and interactive elements of websites or applications that users see and engage with. It involves using technologies like HTML, CSS, and JavaScript to create responsive, accessible, and user-friendly interfaces.
                        </p>
                        <div class="flex gap-1 md:gap-5 items-center mt-[30px]">
                            <button class=" px-4 py-2 md:px-3 md:py-[10px] bg-[#6854FC] rounded-[20px]"><Link to='/contact'> Connect Now</Link></button>

                        </div>
                    </div>
                    <div class="p-10 bg-white drop-shadow-2xl md:drop-shadow-none rounded-xl md:rounded-3xl">
                        <div class="relative h-20 w-20 rounded-full bg-[#F0EEFF]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#6854FC" class="absolute top-4 left-4 w-12 h-12 ">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" />
                            </svg>
                        </div>
                        <h3 class="font-semibold text-2xl leading-7 py-5">Back-end Development</h3>
                        <p class="font-normal text-[18px] leading-[27px]">
                            Focusing on the server-side logic, databases, and APIs that power applications. 
                            It involves managing data, ensuring functionality, and supporting the front-end 
                            by using technologies like Node.js, Python, Go  along with databases like 
                            PostgreSQL or MongoDB
                        </p>
                        <div class="flex gap-1 md:gap-5 items-center mt-[30px]">
                            <button class=" px-4 py-2 md:px-3 md:py-[10px] bg-[#6854FC] rounded-[20px]"><Link to='/contact'> Connect Now</Link></button>

                        </div>
                    </div>
                    <div class="p-10 bg-white drop-shadow-2xl md:drop-shadow-none rounded-xl md:rounded-3xl">
                        <div class="relative h-20 w-20 rounded-full bg-[#F0EEFF]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#6854FC" class="absolute top-4 left-4 w-12 h-12 ">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
                            </svg>
                        </div>
                        <h3 class="font-semibold text-2xl leading-7 py-5">Graphic Design</h3>
                        <p class="font-normal text-[18px] leading-[27px]">
                            We specialize in graphic design, creating eye-catching posters, banners, logos, ID cards,
                            and more using powerful tools like Photoshop and Illustrator to deliver high-quality, professional designs.
                        </p>
                        <div class="flex gap-1 md:gap-5 items-center mt-[30px]">
                            <button class=" px-4 py-2 md:px-3 md:py-[10px] bg-[#6854FC] rounded-[20px]"><Link to='/contact'> Connect Now</Link></button>

                        </div>
                    </div>
                    <div class="p-10 bg-white drop-shadow-2xl md:drop-shadow-none rounded-xl md:rounded-3xl">
                        <div class="relative h-20 w-20 rounded-full bg-[#F0EEFF]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#6854FC" class="absolute top-4 left-4 w-12 h-12 ">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                            </svg>
                        </div>
                        <h3 class="font-semibold text-2xl leading-7 py-5">Cloud Deployment</h3>
                        <p class="font-normal text-[18px] leading-[27px]">
                           The process of deploying applications, services, or data to cloud-based platforms. 
                           It ensures scalability, reliability, and cost-efficiency using tools like Kubernetes, 
                           Docker, or CI/CD pipelines, and platforms like AWS, Azure, or Google Cloud.
                        </p>
                        <div class="flex gap-1 md:gap-5 items-center mt-[30px]">
                            <button class=" px-4 py-2 md:px-3 md:py-[10px] bg-[#6854FC] rounded-[20px]"><Link to='/contact'> Connect Now</Link></button>

                        </div>
                    </div>
                    <div class="p-10 bg-white drop-shadow-2xl md:drop-shadow-none rounded-xl md:rounded-3xl">
                        <div class="relative h-20 w-20 rounded-full bg-[#F0EEFF]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#6854FC" class="absolute top-4 left-4 w-12 h-12 ">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                            </svg>
                        </div>
                        <h3 class="font-semibold text-2xl leading-7 py-5">Database Management</h3>
                        <p class="font-normal text-[18px] leading-[27px]">
                           The practice of organizing, storing, and managing data effectively using systems 
                           like PostgreSQL, MySQL, or MongoDB. It involves ensuring data integrity, security, 
                           and performance while supporting seamless access and scalability for applications.

                        </p>
                        <div class="flex gap-1 md:gap-5 items-center mt-[30px]">
                            <button class=" px-4 py-2 md:px-3 md:py-[10px] bg-[#6854FC] rounded-[20px]"><Link to='/contact'> Connect Now</Link></button>

                        </div>
                    </div>
                </div>
            </div>

            <div id="projects" class="container mx-auto py-20 px-4">
                <h1 class="font-bold text-[48px] leading-[58px] capitalize pb-3 mb-6 text-center">
                    Our Projects
                </h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div class="relative w-full h-64">
                            <img style={{ height: '15rem', objectFit: 'cover' }} src={hr} alt="Project 1" class="w-full h-64 object-cover rounded-lg" loading="lazy"/>
                        </div>
                        <div class="p-10" >
                            <h3 class="font-semibold text-xl mb-3">Human Resoure Management System</h3>
                            <p class="text-gray-700 mb-4">A comprehensive HR solution designed to streamline employee management, payroll, and recruitment. It simplifies administrative tasks, enhances efficiency, and ensures seamless workforce management.</p>
                            <a href="https://hr.ragodevs.com/" target="_blank" class="text-blue-500 hover:text-blue-700" rel="noreferrer">Visit Site</a>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img style={{ height: '15rem', objectFit: 'cover' }} src={stats} alt="Project 2" class="w-full h-64 " loading="lazy"/>
                        <div class="p-10">
                            <h3 class="font-semibold text-xl mb-3">Swahili Chess Community</h3>
                            <p class="text-gray-700 mb-4">A Community platform dedicated to connecting and promoting chess among Tanzania swahili-speaking players. It fosters learning, competition, and community engagement through events, discussions, and resources.</p>
                            <a href="https://chess.tz" target="_blank" class="text-blue-500 hover:text-blue-700" rel="noreferrer">Visit Site</a>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img style={{ height: '15rem', objectFit: 'cover' }} src={queue} alt="Project 3" class="w-full h-64 object-cover" loading="lazy"/>
                        <div class="p-10">
                            <h3 class="font-semibold text-xl mb-3">Queueing System</h3>
                            <p class="text-gray-700 mb-4">An efficient solution for managing customer or task queues, reducing wait times, and optimizing service flow. It enhances organization, improves user experience, and ensures a seamless queuing process.</p>
                            <a onClick={() => setOpen(false)} href="https://qeasy.ragodevs.com/" target="_blank" class="text-blue-500 hover:text-blue-700" rel="noreferrer">Visit Site</a>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img style={{ height: '15rem', objectFit: 'cover' }} src={game} alt="Project 3" class="w-full h-64 object-cover" loading="lazy"/>
                        <div class="p-10">
                            <h3 class="font-semibold text-xl mb-3">Chess Game</h3>
                            <p class="text-gray-700 mb-4">An interactive and strategic chess platform designed for Tanzanian players of all levels. It features real-time gameplay an intuitive interface, enhancing the chess experience while improving strategic thinking.</p>
                            <a href="https://play.chess.tz" target="_blank" class="text-blue-500 hover:text-blue-700" rel="noreferrer">Visit Site</a>
                        </div>
                    </div>

                </div>
                </div>

                <Footer />

            </>
            )
}

            export default Services
