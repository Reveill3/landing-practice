import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button1 from './Button1';

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
    <div className='relative px-100 py-40 bg-black/20' ref={ref}>
      <motion.div
        style={{ y }}
        className='h-full w-full absolute inset-x-0 top-0 mx-auto max-w-[2400] -z-10'
      >
        <img
          className='h-full object-cover w-full'
          src='https://res.cloudinary.com/dgplbptdj/image/upload/v1674702946/Round%20Table/case-bg_qrmc4z.png'
        />
      </motion.div>
        <div className='flex items-center w-full h-[860px] gap-10 z-0 px-[100px]'>
          {/* Card Stack left */}
          <div className='flex flex-col gap-10 w-[300px] h-[600px]'>
            {/* Card 1 */}
            <div className=' w-full h-[300px] relative '>
              <img
                className='shadow1 h-full absolute top-0 object-cover rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] z-0'
                src='https://res.cloudinary.com/dgplbptdj/image/upload/v1674703502/Round%20Table/Case1_eujhmc.png'
              />
              <div className="flex flex-col sectionTitle text-white backdrop-blur-sm items-center justify-center w-[300px] h-1/3 bg-black/60 rounded-[30px] absolute bottom-0 z-10">

                Case 1
              </div>
              
            </div>
          </div>
        </div>

    </div>
  );
};

export default CaseStudies;

