import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const outerVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  open: {
    height: 400,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const HamburgerMenu = ({ open }) => {
  const navigate = useNavigate();

  return (
      <motion.div
        initial={{
          height: 0,
          opacity: 0,
        }}
        animate={{
          height: 400,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        exit={{
          height: 0,
          opacity: 0,
          transition: {
            duration: 1,
          },
        }}
        className='w-full fixed top-[64px] bg-black/40 z-10 p-[20px] overflow-visible md:hidden backdrop-blur-md'
      >
        <div className='h-full w-full'>
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: '100%',
              opacity: 1,
              transition: {
                duration: 1.5,
              },
            }}
            exit={{
                height: 0,
                opacity: 0,
                transition: {
            duration: 1,
          },
            }}
            className='flex flex-col max-w-[360px] bg-black/40 mx-auto rounded-lg px-5 overflow-hidden'
          >
            <motion.div
                onClick={() => navigate('/')}
              whileTap={{
                x: 10,
                opacity: 0.5,
              }}
              className='flex flex-col justify-between w-full h-[50px] cursor-pointer'
            >
              <p
                href='/'
                className='flex items-center text-white w-full h-full'
              >
                Home
              </p>
              <div className='w-full h-[2px] bg-white/40'></div>
            </motion.div>
            <motion.div
            onClick={() => navigate('/newsletter')}
              whileTap={{
                x: 10,
                opacity: 0.5,
              }}
              className='flex flex-col justify-between w-full h-[50px] cursor-pointer'
            >
              <p
                href='/'
                className='flex items-center text-white w-full h-full'
              >
                Newsletter
              </p>
              <div className='w-full h-[2px] bg-white/40'></div>
            </motion.div>
            <motion.div
            onClick={() => navigate('/about')}
              whileTap={{
                x: 10,
                opacity: 0.5,
              }}
              className='flex flex-col justify-between w-full h-[50px] cursor-pointer'
            >
              <p
                href='/'
                className='flex items-center text-white w-full h-full'
              >
                About
              </p>
              <div className='w-full h-[2px] bg-white/40'></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
  );
};

export default HamburgerMenu;
