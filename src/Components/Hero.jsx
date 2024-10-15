import React from 'react'

function Hero() {
  return (
    <div>
      <section className='bg-white flex flex-col md:flex-row items-center justify-between py-12 px-16 md:px-24'>
        <div className='flex flex-col items-start space-y-6 md:space-8 md:2-2/3'>
            <h1 className='text-3xl md:text-4xl font-bold'>HELLO
            <hr className='w-20 border-t-4 border-black my-2' />
            <span className='text-6xl md:text-txl'>I AM GOPAL</span>
            </h1>
            <p className='text-gray-700 text-larg md:text-xl'>SENIOR WEB DEVLOPER</p>
            <div className='flex space-x-4'>
                <button className='bg-purple-600 text-white py-3 rounded-xl px-6 hover:bg-purple-800 hover:text-white text-lg'>HIRE ME</button>
                <button className=' border border-purple-600 py-3 px-8 rounded-lg hover:bg-purple-600 hover:text-white text-lg'> GET CV</button>
            </div>
        </div>
        <div className='mt-8 md:mt-0 md:w-1/2 flex justify-center'>
            <img src="home.png" alt="" className='w-80 md:w-90 lg:w-[400px] h-auto ml-10 md:ml:0'/>
        </div>
      </section>
    </div>
  )
}

export default Hero
