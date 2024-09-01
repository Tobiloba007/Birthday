import { useEffect } from 'react'
import { BsCake } from "react-icons/bs";
import { TfiGift } from "react-icons/tfi";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from 'framer-motion'


const Home = ({children}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div className='w-full font-poppins max-w-screen-2xl mx-auto'>
        <div className="md:flex md:items-start md:justify-center md:w-full md:px-0">

           {/* <div data-aos="fade-up" data-aos-duration="2500" */}
           <motion.div 
             animate={{ y: [330, 0], opacity: [0, 0.1, 0.3, 0.5, 0.7, 1], scale: 1 }}
             transition={{
             duration: 2,
             delay: 0.8,
             }}
             initial={{ opacity: 1, scale: 1 }}
           className="hidden md:flex fixed bottom-0 left-7 lg:left-12 xl:left-16 flex-col items-start justify-end z-30">
              <div className="flex flex-col items-center justify-end w-full text-[#C4C4C4]">
                   <TfiGift className='text-[16px] my-2 xl:text-[20px] xl:my-3' />
                   <TfiGift className='text-[16px] my-2 xl:text-[20px] xl:my-3' />
                   <TfiGift className='text-[16px] my-2 xl:text-[20px] xl:my-3' />
                 <hr className="border-[#fff] border-[0.01em] h-20 mt-2 xl:h-24 xl:mt-5" />
               </div>
           </motion.div>

           <div className='w-full'>
              {children}
           </div>

           <motion.div
             animate={{ y: [330, 0], opacity: [0.1, 0.3, 0.5, 0.7, 1], scale: 1 }}
             transition={{
             duration: 2,
             delay: 0.8,
             }}
             initial={{ opacity: 1, scale: 1 }}
           className="hidden md:flex fixed bottom-0 right-7 lg:right-12 xl:right-16 flex-col items-center justify-end z-30">
            <a href="mailto:Olaniyanmichael0@gmail.com?subject=" target="_blank" rel="noreferrer"
            className="my-mail text-[12px] text-[#C4C4C4] text-center tracking-[0.5em] origin-center rotate-180 xl:text-[12px]"
               >
                ADEOLA
               </a>
                 <hr className="border-[#C4C4C4] border-[0.01em] h-20 mt-2 xl:h-24 xl:mt-5" />
           </motion.div>

        </div>
    </div>
  )
}

export default Home