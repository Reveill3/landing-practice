import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {

  const [email, setEmail] = React.useState('');
  
  return (
    <div className='flex flex-col h-[300px] bg-offBlack w-full justify-center items-center gap-5 md:flex-row py-0 md:h-[150px] md:py-20'>
      <p className='text-white sectionTitle'>Sign up for our newsletter</p>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}     className='rounded-lg paragraph border-none h-[40px] focus:outline-none px-3' />
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
    </div>
  );
};

export default Footer;
