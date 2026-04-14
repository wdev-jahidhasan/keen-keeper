import React from 'react';

const Count = () => {
  return (
    <div className='grid grid-cols-2 mx-3 lg:grid-cols-4 gap-5 my-5 pb-10 border-b-2 border-dotted border-gray-300'>
      <div className='text-center shadow-sm py-5 px-12'>
        <h3 className='text-2xl font-semibold text-green-800'>12</h3>
        <h1 className='text-lg lg:text-xl text-gray-500'>Total Friend</h1>
      </div>
      <div className='text-center shadow-sm py-5 px-12'>
        <h3 className='text-2xl font-semibold text-green-800'>3</h3>
        <h1 className='text-lg lg:text-xl text-gray-500'>On Track</h1>
      </div>
      <div className='text-center shadow-sm py-5 px-12'>
        <h3 className='text-2xl font-semibold text-green-800'>6</h3>
        <h1 className='text-lg lg:text-xl text-gray-500'>Need Attention</h1>
      </div>
      <div className='text-center shadow-sm py-5 px-12'>
        <h3 className='text-2xl font-semibold text-green-800'>7</h3>
        <h1 className='text-lg lg:text-xl text-gray-500'>Interacted</h1>
      </div>
    </div>

  );
};

export default Count;