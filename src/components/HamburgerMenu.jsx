import { motion } from 'framer-motion'
import React from 'react'

const HamburgerMenu = () => {
  return (
    <div className='h-[400px] w-full fixed top-[64px] bg-black/40 z-10 pt-[20px]'>
        <div className="flex flex-col max-w-[360px] bg-black/20 mx-auto rounded-lg px-5">
        <motion.div whileTap={{
            x: 10,
            opacity: 0.5
        }} className="flex flex-col justify-between w-full h-[50px]">
            <p href="/" className="flex items-center text-white w-full h-full">Home</p>
            <div className='w-full h-[2px] bg-white/40'></div>
        </motion.div>
        <motion.div whileTap={{
            x: 10,
            opacity: 0.5
        }} className="flex flex-col justify-between w-full h-[50px]">
            <p href="/" className="flex items-center text-white w-full h-full">Newsletter</p>
            <div className='w-full h-[2px] bg-white/40'></div>
        </motion.div>
        <motion.div whileTap={{
            x: 10,
            opacity: 0.5
        }} className="flex flex-col justify-between w-full h-[50px]">
            <p href="/" className="flex items-center text-white w-full h-full">About</p>
            <div className='w-full h-[2px] bg-white/40'></div>
        </motion.div>

        </div>
    </div>
  )
}

export default HamburgerMenu