import React from 'react';
import { PaintBrushIcon } from '@heroicons/react/24/outline';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { UserGroupIcon } from '@heroicons/react/24/outline';

const Services = () => {
  return (
    <section className='flex flex-col gap-10 bg-tan1 px-4 py-20 md:px-24 md:py-60 justify-center items-center'>
      <h1 className='title text-white'>What we do</h1>
      <div className='flex flex-col md:flex-row w-full max-w-7xl justify-center items-center gap-5'>
        <div className='flex flex-col gap-7 w-full h-60 justify-center items-center bg-black/60 rounded-lg'>
          <PaintBrushIcon className='h-[75px] w-[75px] text-white mx-auto' />
          <p className='text-center text-white'>Token Artwork</p>
        </div>
        <div className='flex flex-col  w-full h-60 gap-7 justify-center items-center bg-black/60 rounded-lg'>
          <CodeBracketIcon className='h-[75px] w-[75px] text-white mx-auto' />
          <p className='text-center text-white'>Smart Contract Development</p>
        </div>
        <div className='flex flex-col  w-full h-60 gap-7 justify-center items-center bg-black/60 rounded-lg'>
          <UserGroupIcon className='h-[75px] w-[75px] text-white mx-auto' />
          <p className='text-center text-white'>Social Media Marketing</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
