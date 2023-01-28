import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button1 from './Button1';
import Card1 from './Card1';

const CaseStudies = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const useParallax = (value, dist) => {
    return useTransform(value, [0, 1], ['0%', '50%']);
  };

  const y = useParallax(scrollYProgress, 100);
  return (
    <div
      className='relative px-100 py-10 md:py-40 bg-black/40 overflow-hidden'
      ref={ref}
    >
      {/* Background */}
      <motion.div
        style={{ y }}
        className='h-full w-full absolute inset-x-0 top-0 mx-auto max-w-[2400] -z-10'
      >
        <img
          className='h-full object-cover w-full'
          src='https://res.cloudinary.com/dgplbptdj/image/upload/v1674702946/Round%20Table/case-bg_qrmc4z.png'
        />
      </motion.div>
      {/* Content */}
      <section className='flex flex-col items-center justify-center w-full gap-20 z-0 px-[40px]  '>
        <h1 className='title text-white text-center w-full'>Case Studies</h1>
        <div className='flex h-full flex-col w-full justify-center items-center gap-10 max-w-[700px]'>
          <div className='flex flex-col gap-10 w-full h-full md:flex-row'>
            <Card1
              image='https://res.cloudinary.com/dgplbptdj/image/upload/v1674703502/Round%20Table/Case1_eujhmc.png'
              subTitle='Case 1'
              roundedTopLeft
              roundedBottomLeft
              roundedBottomRight
            />

            <p className='flex text-white caption items-center text-center max-w-[100%] md:max-w-[50%]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius
              duis at consectetur lorem. Curabitur gravida arcu ac tortor
              dignissim convallis aenean. Egestas maecenas pharetra convallis
              posuere. Est ullamcorper eget nulla facilisi etiam dignissim diam
              quis.
            </p>
          </div>
          <div className='flex flex-col flex-col-reverse md:flex md:flex-row gap-10 w-full h-full'>
            <p className='flex text-white caption items-center text-center max-w-[100%] md:max-w-[50%]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius
              duis at consectetur lorem. Curabitur gravida arcu ac tortor
              dignissim convallis aenean. Egestas maecenas pharetra convallis
              posuere. Est ullamcorper eget nulla facilisi etiam dignissim diam
              quis.
            </p>
            <Card1
              image='https://res.cloudinary.com/dgplbptdj/image/upload/v1674749179/Round%20Table/case2_v1ex9b.png'
              subTitle='Case 2'
              roundedTopLeft
              roundedBottomLeft
              roundedBottomRight
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
