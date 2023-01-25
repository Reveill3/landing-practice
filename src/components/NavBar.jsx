import React from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <div className='fixed top-0 left-0 w-full flex bg-black/60 h-16 z-10 backdrop-blur-md'>
      <div className='p-4 text-black flex items-center w-1/6'>
        <img
          width='125px'
          height='125px'
          src='https://res.cloudinary.com/dgplbptdj/image/upload/v1674663826/Round%20Table/RT_logo_dx3hce.png'
          className='rounded-full'
        />
      </div>
      <div className='flex w-3/4 decoration-none text-white items-center gap-5 text-black justify-around'>
          <motion.a
            className='p-3  rounded-md border-transparent w-[100px] text-center'
            href='/'
            whileHover={{
              'background-color': 'rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              transition: { duration: 0.4, ease: 'easeIn' },
            }}
          >Home</motion.a>
          <motion.a
            className='p-3 rounded-md border-transparent w-[100px] text-center'
            href='/'
            whileHover={{
              'background-color': 'rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              transition: { duration: 0.4, ease: 'easeIn' },
            }}
          >About</motion.a>
          <motion.a
            className='p-3 rounded-md border-transparent w-[100px] text-center'
            href='/'
            whileHover={{
              'background-color': 'rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              transition: { duration: 0.4, ease: 'easeIn' },
            }}
          >Projects</motion.a>
      </div>
    </div>
  );
};

export default NavBar;
