import React from 'react';
import { motion } from 'framer-motion';
import { DiscordLogo, PaintBrush, Stack, TwitterLogo } from 'phosphor-react';

const Footer = () => {
  const [email, setEmail] = React.useState('');

  return (
    <div className='z-30 flex flex-col  bg-offBlack w-full justify-center items-center gap-12 md:flex-row py-10 '>
      <div className='flex gap-5'>
        <div className='flex flex-col'>
          <a
            href='https://discord.com'
            className='flex gap-2 justify-center items-center p-2 cursor-pointer'
            target='_blank'
          >
            <DiscordLogo size={40} color='white' />
            <span className='paragraph text-white'>Discord</span>
          </a>
          <a
            href='https://twitter.com'
            className='flex gap-2 justify-center items-center p-2 cursor-pointer'
            target='_blank'
          >
            <TwitterLogo size={40} color='white' />
            <span className='paragraph text-white'>Twitter</span>
          </a>
        </div>
        <div className='flex flex-col '>
          <a
            href='https://discord.com'
            className='flex gap-2 justify-center items-center p-2 cursor-pointer'
            target='_blank'
          >
            <PaintBrush size={40} color='white' />
            <span className='paragraph text-white'>Our Artist</span>
          </a>
          <a
            href='https://discord.com'
            className='flex gap-2 justify-center items-center p-2 cursor-pointer'
            target='_blank'
          >
            <Stack size={40} color='white' />
            <span className='paragraph text-white'>Portfolio</span>
          </a>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
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
      </div>
    </div>
  );
};

export default Footer;
