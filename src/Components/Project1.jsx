import React from 'react'

function Project1() {
  return (
    <div className='md:flex md:flex-col justify-center items-center w-screen min-h-screen'>
     
      {/* Main content below the fixed navbar */}
      <div className='md:flex md:m-4 justify-between md:space-x-4 md:flex-col md:space-y-2 md:mt-14 mt-20 space-y-8'>
        
        <div className='bg-gray-100 p-4 md:p-10  cursor-pointer'>
          <img src="second.png" alt="Profile 1" className='md:w-full mt-10 md:mt-10 md:h-90  '/>
          <h2>Project Name: BestCoding</h2>
          <h4>Frontend Developer</h4>
        </div>

        <div className='bg-gray-100 p-8 md:p-10 cursor-pointer '>
          <img src="first.png" alt="Profile 1" className='md:w-full mt-10 md:ml-0  md:h-90'/>
          <h2>Project Name: Signature Spice</h2>
          <h4>Frontend Developer</h4>
        </div>
      </div>

      <div className="md:w-full md:p-6 p-4 mt-4 mb-4">
  <h1 className="text-center text-3xl font-bold underline ">
    JAVASCRIPT PROJECT
  </h1>
</div>

      <div className='bg-gray-100   md:p-14 md:flex space-x-0 md:justify-center items-center md:flex-row flex-col p-3 md:space-y-0 md:m-10 space-y-8 justify-center md:w-full gap-4'>
       
        <div className='bg-white md:p-12 p-4 md:flex md:flex-col justify-center 
         items-center h-auto w-full hover:bg-gray-100 hover hover:shadow-lg hover:shadow-purple-300  md:mt-0 mt-10'>
         <a href="index.html"><img src="todo.png" alt="" className='h-40 w-50'/></a>
          <button className='bg-purple-500 text-white md:p-3 md:hover:bg-purple-700 md:w-[270px] md:mt-2 md:text-2xl md:items-center p-2   ml-24 md:ml-0  mt-2'><a href="index.html">ToDo List</a></button>
        </div>
   
        <div className='bg-white md:p-12 p-4 md:flex md:flex-col justify-center 
         items-center w-full  hover:bg-gray-100 hover hover:shadow-lg hover:shadow-purple-300 '>
         <a href="tictoc.html"><img src="tictoc.png" alt="" className='md:h-40 md:w-full w-40 h-40 ml-16 md:ml-0'/></a>
          <button className='bg-purple-500 text-white md:p-3 md:hover:bg-purple-700 md:w-[147px] md:mt-2 md:text-2xl md:items-center p-2 ml-24  mt-2 md:ml-0'><a href="index.html">Tic Tac Toe</a></button>
        </div>
        <div className='bg-white md:p-12 p-4 md:flex md:flex-col justify-center 
         items-center w-full  hover:bg-gray-100 hover hover:shadow-lg hover:shadow-purple-300'>
         <a href="cal.html"><img src="cal2.png" alt="" className='md:h-40 md:w-full w-40 h-40 ml-16 md:ml-0'/></a>
          <button className='bg-purple-500 text-white md:p-3 md:hover:bg-purple-700 md:w-[147px] md:mt-2 md:text-2xl md:items-center p-2 ml-24  mt-2 md:ml-0'><a href="cal.html">Calculator</a></button>
        </div>
        
      </div>
    </div>
    
  )
}

export default Project1;
