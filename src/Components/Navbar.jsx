import React,{useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
function Navbar() {
    const [isOpen,setIsOpen] = useState(false)
    const togle =()=>{
        setIsOpen(!isOpen)
    }
    console.log(isOpen);
    
  return (
    <div>
      <nav className='flex justify-between items-center py-4 px-6 md:px-24 bg-white-sm  w-full ' > 
        <h1 className='text-purple-500 text-3xl font-bold '>Logo</h1>
        <div onClick={togle} className='md:hidden cursor-pointer'>
        {isOpen ? <FaTimes/> : <FaBars/>}
        </div>
        <ul className={`md:flex md:space-x-6  left-0 items-center  flex gap-12 bg-white absolute md:static top-16 md:items-center space-y-4 md:space-y-0 md:w-auto md:bg-transparent w-full md:flex-row flex-col   transistion-all-300  ${isOpen ? "flex" : "hidden"}`}>
            <li className='hover:text-purple-600 cursor-pointer '>Home</li>
            <li className='hover:text-purple-600 cursor-pointer text-lg'>About</li>
            <li className='hover:text-purple-600 cursor-pointer text-lg'>Services</li>
            <li className='hover:text-purple-600 cursor-pointer text-lg'>Project</li> <li className='hover:text-purple-600 cursor-pointer text-lg'>Contact</li>
        </ul>
      </nav><hr className='border border-gray-400'/>
    </div>
  )
}

export default Navbar
