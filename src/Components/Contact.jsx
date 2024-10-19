import React from 'react'

function Contact() {
  return (
    <div>
      <div className='flex items-center justify-center min-h-screen bg-gray-50'>
    <div className='bg-gradient-to-r from bg-purple-500 to bg-indigo-500 p-16 rounded-lg max-w-3xl w-full mx-auto'>
    <div className='text-center mb-8'>
        <h2 className='text-3xl font-bold text-white'>GET UPDATE FROM ANYWHERE</h2>
        <p className='text-white opacity-75 mt-4'> Get In Touch</p>
        </div>
        <div className='flex flex-col justify-center items-center space-x-0'>
            <input type="email" placeholder="Enter your email address" className='w-1/ p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500 md:w-1/2' />
            <input type="message " placeholder='Enter your message' className='w-1/ p-3  rounded-lg border border-gray-300 focus:outline-none my-10 focus:border-purple-500 md:w-1/2' />
            <button className='bg-white text-indigo-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-200'>SUBSCRIBE </button>
        </div>
       
    </div>
      </div>
    </div>
  )
}

export default Contact
