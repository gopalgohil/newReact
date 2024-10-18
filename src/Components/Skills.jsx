import React from 'react'

function Skills() {
  return (
    <div>
        <div className='text-center mb-8'>
                <h2 className='text-2xl font-bold mb-2'>Skills</h2>
                
            </div>
      <section className='flex justify-center items-center min-h-screen bg-gray-50 px-6 py-12'>
        <div className='max-w-6xl w-full grid  grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8'>
                <div className='bg-gray-100 h-24 flex justify-center items-center'>HTML</div>
                <div className='bg-gray-100 h-24 flex justify-center items-center'>CSS</div>
                <div className='bg-gray-100 h-24 flex justify-center items-center'>JavaScript</div>
                <div className='bg-gray-100 h-24 flex justify-center items-center'>React Js</div>
                <div className='bg-gray-100 h-24 flex justify-center items-center'>Express JS</div>
                <div className='bg-gray-100 h-24 flex justify-center items-center'>Node js</div>
            </div>
            <div className='relative bg-white p-8 rounded-lg shadow-md'>
                <div className='flex items-center space-x-4 flex-col md:item-start space-y-4'>
                    <div className='border-dashed border-2 border-gray-300 p04 w-full'>
                        <span className='text-5xl font-bold text-purple-500'>5</span>
                    </div>
                    <div className='text-gray-700 text-lg'>Years Experience <br/>Working</div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
