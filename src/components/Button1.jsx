import React from 'react'
import { motion } from 'framer-motion'

const Button1 = () => {
  return (
    <div className="flex  justify-center items-center ">

    <motion.button whileTap={{
        scale: 0.9,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        transition: { duration: 0.2, ease: 'easeIn' },

    }} className='paragraph bg-white text-offBlack rounded-md border-none w-full px-[10px] h-[40px]'>Book A Call</motion.button>
    </div>
  )
}

export default Button1