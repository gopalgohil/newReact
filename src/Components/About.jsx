import React from 'react'

function About() {
  return (
    <div>
      <section className='flex justify-center items-center min-h-screen bg-gray-50 px-6 py-12'>
        <div className='mx-w-6xl flex flex-col items-center gap-16  md:flex-row'>
            <div className='flex-1 justify-center'>
                <img src="about.png" alt=""  className='w-90 h-auto'/>
            </div>

            <div className='flex-1 text-center md:text-left space-y-6'> 
                <h2 className='text-4xl font-bold '>LET'S INTRODUCE ABOUT MYSELF</h2>
                <p className='text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rerum aliquid delectus perferendis voluptate! Adipisci, dignissimos tenetur. Pariatur id quae accusantium provident.
                rerum aliquid delectus perferendis voluptate! Adipisci, dignissimos tenetur. Pariatur id quae accusantium provident. </p>
                <a href="cv.pdf" className='inline-block bg-purple-600 text-white py-3 px-8 rounded-lg hover:bg-purple-800'>Download CV</a>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About
