import React from 'react';
import { motion } from 'framer-motion';
import Button1 from './Button1';

const NavBar = () => {
  return (
    <div className='fixed top-0 left-0 w-full flex bg-black/60 h-16 backdrop-blur-md py-3 px-[40px]  justify-between z-10'>
      <div className='hidden p-4 text-black items-center w-1/10 md:flex'>
        <img
          width='125px'
          height='125px'
          src='https://res.cloudinary.com/dgplbptdj/image/upload/v1674663826/Round%20Table/RT_logo_dx3hce.png'
          className='rounded-full'
        />
      </div>
      <div className="w-[44px] h-[44px]">
        <div className="w-[22px] h-2px bg-white content-none">&nbsp</div>
      </div>
      <div className='hidden  w-3/5 decoration-none items-center text-black justify-between md:flex'>
          <motion.a
            className='p-3 rounded-md border-transparent w-[100px] text-center text-white'
            href='/'
            whileHover={{
              'background-color': 'rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              transition: { duration: 0.4, ease: 'easeIn' },
            }}
          >Home</motion.a>
          <motion.a
            className='p-3 rounded-md border-transparent w-[100px] text-center text-white'
            href='/'
            whileHover={{
              'background-color': 'rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              transition: { duration: 0.4, ease: 'easeIn' },
            }}
          >About</motion.a>
          <motion.a
            className='p-3 rounded-md border-transparent w-[100px] text-center text-white'
            href='/'
            whileHover={{
              'background-color': 'rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              transition: { duration: 0.4, ease: 'easeIn' },
            }}
          >Projects</motion.a>
      </div>
      <Button1 />
    </div>
  );
};

export default NavBar;
