import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


export default function Contact () {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [ selected, setSelected ] = useState(null);
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    const intialState = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    }

    const [formData, setFormData] = useState(intialState)
   

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setSelected(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('https://mailer.ragodevs.com/submit-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Submitted successfully', {
                    autoClose: 3000,
                });
                setFormData(intialState)
            } else {
                toast.error('Failed to submit the form', {
                    autoClose: 3000,
                });
            }
        } catch (error) {
            alert('An error occured. Please try again');
        } finally {
            setIsSubmitting(false)
        }

    };

    return (
        <>
            <ToastContainer />
            <Header />

            <div class="container mx-auto text-center pt-10 ">
                <h1 class="font-bold text-[48px] leading-[58px] capitalize pb-3">
                    Contact us
                </h1>
                <p class="font-normal text-[18px] leading-7 text-center">
                    Contact us to bring your ideas to life.
                </p>
            </div>

            <div class="container mx-auto px-4 lg:px-20 grid gap-12 grid-cols-1 md:grid-cols-2 my-20">
                <div class="bg-[#6854FC] pt-9 px-7 lg:px-14 rounded-2xl ">
                    <h3 class="font-bold text-2xl text-white leading-9 tracking-[0.02em]">
                        Contact Information
                    </h3>
                    <p class="font-normal text-[#FFFFFF99] text-[18px] leading-7 tracking-[0.02em] my-[6px] ">
                        Fill up the form and our Team will get back to you within 24 hours.
                    </p>

                    <ul>
                        <li class="my-[30px]">
                            <div class="flex">
                                <div class="relative bg-white w-8 h-8 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="absolute top-1 right-1 w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>
                                </div>
                                <p class="font-normal text-[18px] text-white leading-7 tracking-[0.02em] ml-4">
                                    +255 712345678
                                </p>
                            </div>
                        </li>
                        <li class="mb-[30px]">
                            <div class="flex">
                                <div class="relative bg-white w-8 h-8 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="absolute top-1 right-1 w-6 h-6">
                                        <path
                                            d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                        <path
                                            d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>

                                </div>
                                <p class="font-normal text-[18px] text-white leading-7 tracking-[0.02em] ml-4">
                                    contact@ragodevs.com
                                </p>
                            </div>
                        </li>
                        <li class="mb-[30px]">
                            <div class="flex">
                                <div class="relative bg-white w-8 h-8 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="absolute top-1 right-1 w-6 h-6">
                                        <path fill-rule="evenodd"
                                            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <p class="font-normal text-[18px] text-white leading-7 tracking-[0.02em] ml-4">
                                    Tanzania
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <form class="py-8" onSubmit={handleSubmit}>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div class="col-span-2 md:col-span-1">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">First
                                name</label>
                            <input type="text" id="first_name" name='first_name' value={formData.first_name} onChange={handleChange}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                placeholder="John" required />
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900">Last
                                name</label>
                            <input type="text" id="last_name" name='last_name' value={formData.last_name} onChange={handleChange}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                placeholder="Doe" required />
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email
                                address</label>
                            <input type="email" id="email" name='email' value={formData.email} onChange={handleChange}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                placeholder="john.doe@company.com" required />
                        </div>

                        <div class="col-span-2 md:col-span-1">
                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Phone
                                number</label>
                            <input type="tel" id="phone" name='phone' value={formData.phone} onChange={handleChange}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                placeholder="+255 712345678" required />
                        </div>

                        <div class="col-span-2">
                            <h3 class="font-normal text-[18px] leading-7 tracking-[0.02em] my-6">What service do you need?</h3>
                            <div class="grid  grid-cols-3 mb-2">
                                <div class="flex items-center mb-4">
                                    <input id="default-radio-1" type="radio" value="Web App" name="service" checked={selected === "Web App"}  onChange={handleChange}
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900">Web
                                        App</label>
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="default-radio-1" type="radio" value="Mobile App" name="service" checked={selected === "Mobile App"} onChange={handleChange}
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900">Mobile
                                        App</label>
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="default-radio-1" type="radio" value="System Development" name="service" checked={selected === "System Development"}  onChange={handleChange}
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900">System
                                        Development</label>
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="default-radio-1" type="radio" value="Database Management" name="service" checked={selected === "Database Management"} onChange={handleChange}
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900">Database Management
                                    </label>
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="default-radio-1" type="radio" value="Graphics Design" name="service" checked={selected === "Graphics Design"} onChange={handleChange}
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900">Graphic
                                        Design</label>
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="default-radio-1" type="radio" value="Cloud Deployment" name="service" checked={selected === "Cloud Deployment"} onChange={handleChange}
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900">Cloud
                                        Deployment</label>
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="default-radio-1" type="radio" value="UI/UX" name="service" checked={selected === "UI/UX"} onChange={handleChange}
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900">UI/UX</label>
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="default-radio-1" type="radio" value="Other" name="service" checked={selected === "Other"} onChange={handleChange}
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900">Other</label>
                                </div>
                            </div>

                        </div>

                        <div class="col-span-2">
                            <h3 class="font-normal text-[18px] leading-7 tracking-[0.02em] mb-6">Message</h3>
                            <textarea id="message" rows="4" name='message' value={formData.message} onChange={handleChange}
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                                placeholder="Write your thoughts here..."></textarea>
                        </div>
                        <div class="flex gap-5 items-center mt-[20px]">
                            <button class="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition 
                            disabled:bg-gray-500 disabled:cursor-not-allowed"
                                type='submit' 
                                disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Sent It'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>


            <Footer />

        </>
    )
}

