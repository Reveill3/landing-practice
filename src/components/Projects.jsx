import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className='flex flex-col p-5 gap-10 justify-center align-center w-full py-80 bg-offBlack'>
      <motion.h1
        initial={{ opacity: 0, rotateX: 45 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        transition={{ ease: 'easeIn', duration: 1.25 }}
        viewport={{ once: true }}
        className='text-5xl font-bold leading-relaxed text-white max-w-screen-sm mx-auto text-center '
      >
        We have helped our clients generate over $1,000,000 in revenue
      </motion.h1>
    </section>
  );
};

export default Projects;
