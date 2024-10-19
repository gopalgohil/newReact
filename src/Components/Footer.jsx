import React, { useState } from 'react';
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send to an API)
        console.log({ name, email, message });
        // Reset form
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <footer className="bg-purple-100 text-black py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col items-center md:items-start mb-6">
                    <h3 className="text-lg font-bold mb-2">Junior Web Developer</h3>
                    <p className="text-sm mb-4">Creating impactful and responsive web applications.</p>
                    <p className="text-sm">
                        Email: <a href="mailto:your-email@example.com" className="text-black underline">your-gopalgohel249@gmail.com</a>
                    </p>
                </div>
                <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">    
                    <h4 className="font-semibold mb-2">Quick Links</h4>
                    <ul className="list-none space-y-1">
                        <li><a href="#about" className="hover:underline">About</a></li>
                        <li><a href="#projects" className="hover:underline">Projects</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                <div className="flex flex-col items-center  space-y-2 md:items-start">
                <h4 className="font-semibold mb-2">Contact</h4>
                    <div className="flex items-center space-x-2">
                        
                        <FaMapMarkerAlt className="text-xl" />
                        <p className="text-sm">123 Your Address, City, Country</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaPhoneAlt className="text-xl" />
                        <p className="text-sm">+123 456 7890</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MdEmail className="text-xl" />
                        <p className="text-sm">
                            Email: <a href="mailto:your-email@example.com" className="text-black underline">your-gopalgohel249@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        
            {/* Contact Section */}
            <div className="container mx-auto mt-10">
                <h4 className="font-semibold text-center mb-4">Contact Me</h4>
                <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="p-2 border border-black rounded w-full max-w-xs" 
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="p-2 border border-black rounded w-full max-w-xs" 
                        required 
                    />
                    <textarea 
                        placeholder="Your Message" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        className="p-2 border border-black rounded w-full max-w-xs" 
                        rows="4" 
                        required 
                    />
                    <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-500">
                        Send Message
                    </button>
                </form>
                {/* Contact Details */}
               
            </div>
            <div className="flex justify-center items-center gap-8 mt-6">
                <a href="https://www.linkedin.com/feed/"><IoLogoLinkedin className="text-3xl cursor-pointer"/></a>
                <a href="https://www.instagram.com/accounts/login/"><FaInstagram className='text-3xl cursor-pointer'/></a>
                <a href="https://github.com/gopalgohil"><FaGithub className='text-3xl cursor-pointer'/></a>
                <a href="https://x.com/Log%20in/"><FaTwitter className='text-3xl cursor-pointer'/></a> 
            </div>
            <div className="text-center relative top-6">
                <p className="text-sm">© 2024 Your Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
