import React from 'react'

function Hero() {
  return (
    <div>
      <section className='bg-white flex flex-col md:flex-row items-center justify-between py-12 px-16 md:px-24'>
        <div className='flex flex-col items-start space-y-6 md:space-8 md:2-2/2 mt-10'>
            <h1 className='text-3xl md:text-4xl font-bold'>HELLO
            <hr className='w-20 border-t-4 border-black my-2' />
            <span className='text-4xl md:text-6xl'>I AM GOPAL</span>
            </h1>
            <p className='text-gray-700 text-larg md:text-xl'>JUNIOR WEB DEVLOPER</p>
            <div className='flex space-x-4'>
                <button className='bg-purple-600 text-white md:py-4 rounded-xl p-2 md:px-4 hover:bg-purple-800 hover:text-white text-lg '>HIRE ME</button>
                <button className=' border border-purple-600 py-3 px-8 rounded-lg hover:bg-purple-600 hover:text-white text-lg'> GET CV</button>
            </div>
        </div>
        <div className='mt-8 md:mt-0 md:w-1/3 flex justify-center'>
            <img src="home.png" alt="" className='w-80 md:w-90 lg:w-[400px] h-auto ml-10  my-9 md:mt-12 lg:ml-12 md:w-full md:h-[400px]'/>
        </div>
      </section>
    </div>
  )
}

export default Hero
