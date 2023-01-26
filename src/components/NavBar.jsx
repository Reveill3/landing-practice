import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button1 from './Button1';
import HamburgerMenu from './HamburgerMenu';
import { useNavigate } from 'react-router-dom';

const variants = {
  rotate1: {
    rotate: 45,
    y: 8,
  },
  rotate2: {
    rotate: -45,
    y: -12,
  },
  middleRotate: {
    rotate: 45,
    y: -3,
    x: 1,
    opacity: 0,
  },
  base: {
    rotate: 0,
  },
};

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className='fixed top-0 left-0 w-full flex bg-black/60 h-16 backdrop-blur-md py-3 px-[40px]  justify-between z-10'>
        <div
          onClick={() => navigate('/')}
          className='hidden p-4 text-black items-center w-1/10 md:flex cursor-pointer'
        >
          <img
            width='125px'
            height='125px'
            src='https://res.cloudinary.com/dgplbptdj/image/upload/v1674663826/Round%20Table/RT_logo_dx3hce.png'
            className='rounded-full'
          />
        </div>
        <div
          onClick={handleClick}
          className='flex flex-col gap-2 w-[44px] h-[44px] justify-center md:hidden'
        >
          <motion.div
            variants={variants}
            animate={isOpen ? 'rotate1' : 'base'}
            className='w-[22px] h-[2px] bg-white'
          ></motion.div>
          <motion.div
            variants={variants}
            animate={isOpen ? 'middleRotate' : 'base'}
            className='w-[18px] h-[2px] bg-white'
          ></motion.div>
          <motion.div
            variants={variants}
            animate={isOpen ? 'rotate2' : 'base'}
            className='w-[22px] h-[2px] bg-white'
          ></motion.div>
        </div>
        <div className='hidden max-w-3/5 gap-20 decoration-none items-center text-black justify-between md:flex'>
          <motion.a
            onClick={() => navigate('/newsletter')}
            className='p-3 rounded-md border-transparent w-[100px] text-center text-white cursor-pointer'
            whileHover={{
              'background-color': 'rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              transition: { duration: 0.4, ease: 'easeIn' },
            }}
          >
            Newsletter
          </motion.a>
          <motion.a
            onClick={() => navigate('/about')}
            className='p-3 rounded-md border-transparent w-[100px] text-center text-white cursor-pointer'
            whileHover={{
              'background-color': 'rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              transition: { duration: 0.4, ease: 'easeIn' },
            }}
          >
            About
          </motion.a>
        </div>
        <Button1 />
      </div>
      <AnimatePresence>
        {isOpen && <HamburgerMenu open={isOpen} />}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
