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

const SignUp = ({ open }) => {
  

    const [email, setEmail] = React.useState('');

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
      className='w-full fixed top-[64px] bg-black/40 z-10 p-[20px] overflow-visible backdrop-blur-md'
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
          className='flex flex-col gap-10 justify-center items-center max-w-[600px] bg-black/40 mx-auto rounded-lg px-5'
        >
          <p className='text-white sectionTitle'>Sign up for our newsletter</p>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='rounded-lg paragraph border-none h-[40px] focus:outline-none px-3'
          />
          <div className='flex  justify-center items-center '>
            <motion.button
              whileTap={{
                scale: 0.9,
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                transition: { duration: 0.2, ease: 'easeIn' },
              }}
              className='paragraph bg-white text-offBlack rounded-md border-none w-full px-[10px] h-[40px]'
            >
              Sign Up
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SignUp;
