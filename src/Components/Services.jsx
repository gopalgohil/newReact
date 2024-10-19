import React from 'react'

function Services() {
  return (
    <div>
      <section className='bg-white py-12'>
        <div className='bg-white container mx-auto px-4'>
            <div className='text-center mb-8'>
                <h2 className='text-2xl font-bold mb-2'>SERVICE OFFERS</h2>
                <p className='text-gray-500 mx-w-2xl mx-auto'>Service offers in web development typically include custom website design and development, ensuring a user-friendly experience across all devices. Additionally, services often encompass e-commerce solutions, content management systems, and ongoing website maintenance and support to keep the digital presence robust and up-to-date.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:w-full mx-auto'>
                <div className='bg-gray-50 p-6 rounded-lg text-center transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-500 cursor-pointer '>
                    <div className='mb-4 '>
                    <img src="web.png" alt="" className='h-20 mx-auto'/>
                    </div>
              
                <h3 className='text-xl font-bold'>WEB DEVLOPER</h3>
                <p>A web developer specializes in building and maintaining websites and web applications. They use languages like HTML, CSS, and JavaScript for front-end development and technologies like Node.js, PHP, or Python for back-end processes, ensuring a seamless user experience and efficient server-side operations.</p>
            </div>
            <div className='bg-gray-50 p-6 rounded-lg text-center transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-500 cursor-pointer '>
                    <div className='mb-4 '>
                    <img src="data.jfif" alt="" className='h-20 mx-auto'/>
                    </div>
              
                <h3 className= 'text-xl font-bold'>Data Analysis</h3>
                <p>Data analysis involves inspecting, cleaning, and interpreting data to discover useful insights and support decision-making. Using statistical methods, tools like Excel, Python, or R, and data visualization techniques, analysts transform raw data into actionable information to solve business problems and guide strategy..</p>
            </div>
            <div className='bg-gray-50 p-6 rounded-lg text-center transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-500 cursor-pointer '>
                    <div className='mb-4 '>
                    <img src="python.jfif" alt="" className='h-20 mx-auto'/>
                    </div>
              
                <h3 className='text-xl font-bold'>Python Devloper</h3>
                <p>A Python developer is a skilled programmer who specializes in writing server-side applications using Python. They are proficient in building, testing, and maintaining web applications, automation scripts, data analysis tools, and artificial intelligence models. 

</p>
            </div>
            <div className='bg-gray-50 p-6 rounded-lg text-center transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-500 cursor-pointer '>
                    <div className='mb-4 '>
                    <img src="testing.jfif" alt="" className='h-20 mx-auto'/>
                    </div>
              
                <h3 className='text-xl font-bold'>Software Testing</h3>
                <p>Software testing is the process of evaluating and verifying that a software application works as expected. It involves identifying bugs, ensuring functionality, performance, and security, and validating that the software meets the specified requirements.</p>
            </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Services
