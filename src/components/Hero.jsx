import { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import Button1 from './Button1';

const Hero = () => {
  
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({target: ref, offset: ["start start", "end start"]});
  
  const useParallax = (value, dist) => {
    return useTransform(value, [0, 1], ['0%', '50%']);
  }

  const y = useParallax(scrollYProgress, 100);
  return (
    <>

    <motion.div style={{y}} className="h-full absolute inset-x-0 top-0 -z-20 mx-auto">
      <img className="min-h-[1200px] h-full object-cover w-full" src="https://res.cloudinary.com/dgplbptdj/image/upload/v1674671643/Round%20Table/hero-bg_r0bapx.png"/>
    </motion.div>
    <motion.section ref={ref} >
      <div className='flex flex-col justify-center text-center w-full h-[1200px] bg-black/40 gap-10'>
        <motion.h1
          initial={{ opacity: 0, rotateX: 45 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ ease: 'easeIn', duration: 1.5 }}
          className='title text-white p-5'
        >
          Maximizing your revenue with web3
        </motion.h1>
        <div className='w-[150px] mx-auto'>

        <Button1 />
        </div>
      </div>
    </motion.section>
    </>
  );
};

export default Hero;
