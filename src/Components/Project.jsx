import React, { useState } from 'react';

function Project() {
  const imagesData = [
    { id: 1, category: 'All', title: 'All Designs', img: 'home.png' },
    { id: 2, category: 'Popular', title: 'Popular Designs', img: 'about.png' },
    { id: 3, category: 'Latest', title: 'Latest Designs', img: 'home.png' },
  ];
  
  const categories = ['All', 'Popular', 'Latest'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filterImg = activeCategory === 'All' ? imagesData : imagesData.filter((img) => 
    img.category === activeCategory
  );

  return (
    <div>
      <div className='container mx-auto p-5 '>
        <div className='flex  justify-center space-x-4 mb-6 '>

        {categories.map((category) => (
          <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-lg ${activeCategory === category ? 'bg-purple-600 text-white' : 'bg-gray-200 hover:bg-purple-700 hover:text-white' }`}>
            {category}
          </button>
        ))}
        </div>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6
      '>
        {filterImg.map((image) => (
          <div key={image.id} className='bg-white shadow-lg rounded-lg p-4 hover:shadow-lg hover:shadow-gray-400 cursor-pointer'>
            <img src={image.img} alt={image.title} className='w-full h50 object-cover rounded-t-md'/>
            <h1 className='text-sm'>{image.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
