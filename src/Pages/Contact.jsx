import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


export default function Contact () {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedServices, setSelectedServices] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const [formTouched, setFormTouched] = useState({});
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
   

    // Mark field as touched when user interacts with it
    const handleBlur = (e) => {
        const { name } = e.target;
        setFormTouched(prev => ({
            ...prev,
            [name]: true
        }));
        validateField(name, formData[name]);
    };

    // Validate a single field
    const validateField = (name, value) => {
        let errors = {...formErrors};
        
        if (name === 'service') {
            if (!value || value.trim() === '') {
                errors.service = 'Please select at least one service';
            } else {
                delete errors.service;
            }
        } else if (!value || value.trim() === '') {
            errors[name] = `${name.replace('_', ' ').replace(/^\w/, c => c.toUpperCase())} is required`;
        } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            errors.email = 'Please enter a valid email address';
        } else if (name === 'phone' && !/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/.test(value)) {
            errors.phone = 'Please enter a valid phone number';
        } else {
            delete errors[name];
        }
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Validate all fields
    const validateForm = () => {
        const errors = {};
        const { first_name, last_name, email, phone, service, message } = formData;
        
        if (!first_name || first_name.trim() === '') errors.first_name = 'First name is required';
        if (!last_name || last_name.trim() === '') errors.last_name = 'Last name is required';
        if (!email || email.trim() === '') {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Please enter a valid email address';
        }
        if (!phone || phone.trim() === '') {
            errors.phone = 'Phone number is required';
        } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/.test(phone)) {
            errors.phone = 'Please enter a valid phone number';
        }
        if (!service || service.trim() === '') errors.service = 'Please select at least one service';
        if (!message || message.trim() === '') errors.message = 'Message is required';
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (type === 'checkbox' && name === 'service') {
            let updatedServices;
            if (checked) {
                updatedServices = [...selectedServices, value];
                setSelectedServices(updatedServices);
                const serviceValue = updatedServices.join(', ');
                setFormData(prevData => ({
                    ...prevData,
                    service: serviceValue
                }));
                validateField('service', serviceValue);
            } else {
                updatedServices = selectedServices.filter(service => service !== value);
                setSelectedServices(updatedServices);
                const serviceValue = updatedServices.join(', ');
                setFormData(prevData => ({
                    ...prevData,
                    service: serviceValue
                }));
                validateField('service', serviceValue);
            }
            
            // Mark service field as touched
            setFormTouched(prev => ({
                ...prev,
                service: true
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
            
            // Mark the field as touched
            setFormTouched(prev => ({
                ...prev,
                [name]: true
            }));
            
            // Validate the field if it's already been touched
            if (formTouched[name]) {
                validateField(name, value);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Mark all fields as touched
        const allTouched = {};
        Object.keys(formData).forEach(key => {
            allTouched[key] = true;
        });
        setFormTouched(allTouched);
        
        // Validate all fields before submission
        if (!validateForm()) {
            toast.error('Please fill all required fields correctly', {
                autoClose: 3000,
            });
            return;
        }
        
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
                setFormData(intialState);
                setSelectedServices([]);
                setFormErrors({});
                setFormTouched({});
            } else {
                toast.error('Failed to submit the form', {
                    autoClose: 3000,
                });
            }
        } catch (error) {
            toast.error('An error occurred. Please try again', {
                autoClose: 3000,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <Header />

            <div className="container mx-auto text-center pt-10 ">
                <h1 className="font-bold text-[48px] leading-[58px] capitalize pb-3">
                    Contact us
                </h1>
                <p className="font-normal text-[18px] leading-7 text-center">
                    Contact us to bring your ideas to life.
                </p>
            </div>

            <div className="container mx-auto px-4 lg:px-20 grid gap-12 grid-cols-1 md:grid-cols-2 my-20">
                <div className="bg-[#6854FC] pt-9 px-7 lg:px-14 rounded-2xl ">
                    <h3 className="font-bold text-2xl text-white leading-9 tracking-[0.02em]">
                        Contact Information
                    </h3>
                    <p className="font-normal text-[#FFFFFF99] text-[18px] leading-7 tracking-[0.02em] my-[6px] ">
                        Fill up the form and our Team will get back to you within 24 hours.
                    </p>

                    <ul>
                        <li className="my-[30px]">
                            <div className="flex">
                                <div className="relative bg-white w-8 h-8 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                        stroke="currentColor" className="absolute top-1 right-1 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>
                                </div>
                                <p className="font-normal text-[18px] text-white leading-7 tracking-[0.02em] ml-4">
                                    +255 712345678
                                </p>
                            </div>
                        </li>
                        <li className="mb-[30px]">
                            <div className="flex">
                                <div className="relative bg-white w-8 h-8 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        className="absolute top-1 right-1 w-6 h-6">
                                        <path
                                            d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                        <path
                                            d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>

                                </div>
                                <p className="font-normal text-[18px] text-white leading-7 tracking-[0.02em] ml-4">
                                    contact@ragodevs.com
                                </p>
                            </div>
                        </li>
                        <li className="mb-[30px]">
                            <div className="flex">
                                <div className="relative bg-white w-8 h-8 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        className="absolute top-1 right-1 w-6 h-6">
                                        <path fillRule="evenodd"
                                            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="font-normal text-[18px] text-white leading-7 tracking-[0.02em] ml-4">
                                    Tanzania
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <form className="py-8" onSubmit={handleSubmit}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">First
                                name</label>
                            <input 
                                type="text" 
                                id="first_name" 
                                name='first_name' 
                                value={formData.first_name} 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${formTouched.first_name && formErrors.first_name ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="John" 
                            />
                            {formTouched.first_name && formErrors.first_name && (
                                <p className="mt-1 text-sm font-bold text-red-600">{formErrors.first_name}</p>
                            )}
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last
                                name</label>
                            <input 
                                type="text" 
                                id="last_name" 
                                name='last_name' 
                                value={formData.last_name} 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${formTouched.last_name && formErrors.last_name ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Doe" 
                            />
                            {formTouched.last_name && formErrors.last_name && (
                                <p className="mt-1 text-sm font-bold text-red-600">{formErrors.last_name}</p>
                            )}
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email
                                address</label>
                            <input 
                                type="email" 
                                id="email" 
                                name='email' 
                                value={formData.email} 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${formTouched.email && formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="john.doe@company.com" 
                            />
                            {formTouched.email && formErrors.email && (
                                <p className="mt-1 text-sm font-bold text-red-600">{formErrors.email}</p>
                            )}
                        </div>

                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone
                                number</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name='phone' 
                                value={formData.phone} 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${formTouched.phone && formErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="+255 712345678" 
                            />
                            {formTouched.phone && formErrors.phone && (
                                <p className="mt-1 text-sm font-bold text-red-600">{formErrors.phone}</p>
                            )}
                        </div>

                        <div className="col-span-2">
                            <h3 className="font-normal text-[18px] leading-7 tracking-[0.02em] mt-6 mb-2">What service do you need?</h3>
                            {formTouched.service && formErrors.service && (
                                <p className="mb-4 text-sm font-bold text-red-600">{formErrors.service}</p>
                            )}
                            <div className="grid grid-cols-3 mb-2">
                                <div className="flex items-center mb-4">
                                    <input id="checkbox-web-app" type="checkbox" value="Web App" name="service" checked={selectedServices.includes("Web App")}  onChange={handleChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                    <label htmlFor="checkbox-web-app" className="ml-2 text-sm font-medium text-gray-900">Web
                                        App</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="checkbox-mobile-app" type="checkbox" value="Mobile App" name="service" checked={selectedServices.includes("Mobile App")} onChange={handleChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                    <label htmlFor="checkbox-mobile-app" className="ml-2 text-sm font-medium text-gray-900">Mobile
                                        App</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="checkbox-system-dev" type="checkbox" value="System Development" name="service" checked={selectedServices.includes("System Development")}  onChange={handleChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                    <label htmlFor="checkbox-system-dev" className="ml-2 text-sm font-medium text-gray-900">System
                                        Development</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="checkbox-db-mgmt" type="checkbox" value="Database Management" name="service" checked={selectedServices.includes("Database Management")} onChange={handleChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                    <label htmlFor="checkbox-db-mgmt" className="ml-2 text-sm font-medium text-gray-900">Database Management
                                    </label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="checkbox-graphic-design" type="checkbox" value="Graphics Design" name="service" checked={selectedServices.includes("Graphics Design")} onChange={handleChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                    <label htmlFor="checkbox-graphic-design" className="ml-2 text-sm font-medium text-gray-900">Graphic
                                        Design</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="checkbox-cloud-deploy" type="checkbox" value="Cloud Deployment" name="service" checked={selectedServices.includes("Cloud Deployment")} onChange={handleChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                    <label htmlFor="checkbox-cloud-deploy" className="ml-2 text-sm font-medium text-gray-900">Cloud
                                        Deployment</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="checkbox-uiux" type="checkbox" value="UI/UX" name="service" checked={selectedServices.includes("UI/UX")} onChange={handleChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                    <label htmlFor="checkbox-uiux" className="ml-2 text-sm font-medium text-gray-900">UI/UX</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="checkbox-other" type="checkbox" value="Other" name="service" checked={selectedServices.includes("Other")} onChange={handleChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                    <label htmlFor="checkbox-other" className="ml-2 text-sm font-medium text-gray-900">Other</label>
                                </div>
                            </div>

                        </div>

                        <div className="col-span-2">
                            <h3 className="font-normal text-[18px] leading-7 tracking-[0.02em] mb-2">Message</h3>
                            <textarea 
                                id="message" 
                                rows="4" 
                                name='message' 
                                value={formData.message} 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-blue-500 focus:border-blue-500 ${formTouched.message && formErrors.message ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Write your thoughts here..."
                            ></textarea>
                            {formTouched.message && formErrors.message && (
                                <p className="mt-1 text-sm font-bold text-red-600">{formErrors.message}</p>
                            )}
                        </div>
                        <div className="flex gap-5 items-center mt-[20px]">
                            <button 
                                className="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition 
                                disabled:bg-gray-500 disabled:cursor-not-allowed"
                                type='submit' 
                                disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>


            <Footer />

        </>
    )
}

