import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false); // Close the menu when a link is clicked
    };

    return (
        <div>
            <nav className='bg-gray-50 flex justify-between items-center py-2 px-16 md:px-22 w-full  hover:bg-gray-50 fixed top-0 border-b-2 border-b-purple-200'>
           
          <Link to='/'>  <img src="s4.png" alt="" className='h-8 md:h-10  w-10 relative md:right right-4 ' /></Link>
                <div onClick={toggle} className='md:hidden cursor-pointer  '>
                    {isOpen ? <FaTimes className='w-8 h-9 text-purple-400 absolute bottom-2 right-2 '/> : <FaBars className='absolute bottom-3 right-3 w-8 h-8 text-purple-500 '/>}
                </div>
                <ul className={`md:flex  md:space-x-4 left-0 items-center flex gap-10  bg-purple-100 absolute md:static top-16 md:items-center space-y-10 md:space-y-0 md:w-auto md:bg-transparent w-full md:flex-row flex-col transition-all  p-4  duration-300 ${isOpen ? 'flex' : 'hidden'}`}>
                    {/* Close menu on link click */}
                    <li className='relative cursor-pointer text-2xl md:text-xl'>
                        <Link to="/" className='hover:text-purple-600 transition-all duration-300 ease-in-out before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[3px] before:bg-purple-600 before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-300' onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='relative cursor-pointer text-2xl md:text-xl'>
                        <Link to="/About1" className='hover:text-purple-600 transition-all duration-300 ease-in-out before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-purple-600 before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-300' onClick={closeMenu}>
                            About
                        </Link>
                    </li>
                    <li className='relative cursor-pointer text-2xl md:text-xl'>
                        <Link to="/service1" className='hover:text-purple-600 transition-all duration-300 ease-in-out before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-purple-600 before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-300' onClick={closeMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='relative cursor-pointer text-2xl md:text-xl'>
                        <Link to="/Project1" className='hover:text-purple-600 transition-all duration-300 ease-in-out before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-purple-600 before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-300' onClick={closeMenu}>
                            Project
                        </Link>
                    </li>
                    <li className='relative cursor-pointer text-2xl md:text-xl'>
                        <Link to="/Contact1" className='hover:text-purple-600 transition-all duration-300 ease-in-out before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-purple-600 before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-300' onClick={closeMenu}>
                            Contact
                        </Link>
                    </li>
                 
                </ul>
                <Link to='/login' onClick={closeMenu}>
                        <button className='bg-purple-600 text-white  px-4 rounded-lg hover:bg-purple-800 relative  p-2 md:left-12 ml-2 lg:left-12'>SignUp</button>
                    </Link>
            </nav>
            
        </div>
    );
}

export default Navbar;
