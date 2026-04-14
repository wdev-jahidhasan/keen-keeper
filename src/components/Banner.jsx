import React from 'react';

const Banner = () => {
  return (
    <div className='text-center space-y-4 my-12'>
      <h1 className='text-3xl md:4xl lg:text-5xl font-bold'>Friends to keep close in your life</h1>
      <p className='text-gray-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture <br /> the
relationships that matter most.</p>
      <button className='btn bg-[#244D3F] text-white'>+  Add a Friend</button>
    </div>
  );
};

export default Banner;