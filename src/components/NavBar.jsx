import React from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <div className='fixed top-0 left-0 w-full flex bg-black/40 h-16 z-10 backdrop-blur-md'>
      <div className='w-3.75 text-black p-2 flex items-center'>
        <img
          src='https://picsum.photos/seed/web3/50/50'
          className='rounded-full'
        />
      </div>
      <div className='flex w-3/4 decoration-none text-white items-center gap-5 text-black justify-around'>
          <motion.a
            className='p-3 rounded-md border-transparent'
            href='/'
            whileHover={{
              'background-color': 'rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: { duration: 0.4, ease: 'easeIn' },
            }}
          >Home</motion.a>
          <motion.a
            className='p-3 rounded-md border-transparent'
            href='/'
            whileHover={{
              'background-color': 'rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: { duration: 0.4, ease: 'easeIn' },
            }}
          >About</motion.a>
          <motion.a
            className='p-3 rounded-md border-transparent border-1'
            href='/'
            whileHover={{
              'background-color': 'rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: { duration: 0.4, ease: 'easeIn' },
            }}
          >Projects</motion.a>
      </div>
    </div>
  );
};

export default NavBar;
