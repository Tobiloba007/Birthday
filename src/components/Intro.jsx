import { BiSolidRightArrow } from 'react-icons/bi'
import img1 from '../assets/celebrant3.JPG'
import img2 from '../assets/celebrant1.JPG'
import { motion } from 'framer-motion'



const Intro = () => {

  return (
    <div className="flex flex-col items-center justify-start w-full mt-52 px-8 md:px-14 md:mt-52 lg:px-24 lg:mt-32 lg:flex-row lg:items-end lg:justify-between xl:px-52 xl:mt-40">

        <div className="flex flex-col items-start justify-center w-full lg:w-[55%]">
             <p className="text-[15px] text-[#C4C4C4] font-[400] md:text-[17px] xl:text-[20px]">
                 Happy Birthday
             </p>
             <h1 className="text-[33px] font-[800] tracking-wider mb-1 pt-[3px] bg-gradient-to-r from-[#6FC400] to-[#ffffff] text-transparent bg-clip-text
             md:text-[43px] lg:text-[45px] xl:text-[53px]">
                 LORETTA
             </h1>
             <p className="text-[12px] font-normal leading-5 text-[#C4C4C4] w-[90%] md:text-[14px] md:leading-6 md:w-[60%] lg:text-[14px] lg:w-[100%] xl:text-[16px] 
                           xl:leading-8">
                 Today we gather to celebrate an amazing colleague and friend, we appreciate all your efforts and commitment to the team.
             </p>
        </div>
        
        <div className='relative flex items-center justify-left w-full px-6 mt-14 md:justify-center md:mr-28 md:mt-28 lg:w-[45%] lg:mt-0 lg:mr-0 lg:justify-center lg:pb-16 xl:pb-20'>
             <motion.div 
             animate={{opacity: [0, 0.1, 0.3, 0.5, 0.7, 1], scale: 1 }}
             transition={{
             duration: 2,
             delay: 1.8,
             }}
             initial={{ opacity: 1, scale: 1 }}
             className='top-0 left-0 flex items-center justify-center w-[150px] h-[180px] border-[1px] border-[#6FC400] rounded-md origin-bottom -rotate-6 md:left-0 
                             md:w-[180px] md:h-[210px] lg:left-0 lg:mr-7 lg:w-[140px] lg:h-[175px] xl:w-[170px] xl:h-[220px]'>
                   <img className='h-full w-full object-cover rounded-md'
                   src={img1} alt='first_image' />
             </motion.div>

             <motion.div 
             animate={{opacity: [0, 0.1, 0.3, 0.5, 0.7, 1], scale: 1 }}
             transition={{
             duration: 2,
             delay: 3.5,
             }}
             initial={{ opacity: 1, scale: 1 }}
             className='absolute top-10 right-0 flex items-center justify-center w-[150px] h-[180px] border-[1px] border-[#6FC400] rounded-md origin-top-left rotate-12 
                             md:w-[180px] md:h-[210px] md:right-14 lg:right-0 lg:w-[140px] lg:h-[175px] xl:w-[170px] xl:h-[220px]'>
                    <img className='h-full w-full object-cover rounded-md'
                    src={img2} alt='first_image' />
             </motion.div>
        </div>

    </div>
  )
}

export default Intro