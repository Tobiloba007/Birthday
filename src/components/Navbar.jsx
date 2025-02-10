import { useState } from 'react'
import { TfiClose } from 'react-icons/tfi'
import { motion } from 'framer-motion'
import { BsCake2Fill } from "react-icons/bs";
import { BsBalloonFill } from "react-icons/bs";




const Navbar = () => {
    const [drawer, setDrawer] = useState(false)

    const handleDrawer = () => {
        setDrawer(!drawer)
    }

  return (
    <div className="relative flex flex-col items-center justify-center w-full px-8 z-50 md:px-14 lg:px-16">

                  {/* MOBILE NAVBAR */}
        <div className="fixed top-10 flex items-center justify-between w-[85%] z-50 bg-[#10101A] border-[0.01em] border-[#3d3b4b] rounded-2xl h-[3.9rem] 
        p-4 lg:hidden">
            <div className='flex items-center justify-start w-full'>
               {/*<img className='h-8'
               src={logo} alt="logo" />*/}
               <div className='container'>
                  <p className='scrolling-text flex items-center justify-start w-full text-[#C4C4C4] ml-2 text-[10px] z-20 font-semibold tracking-widest'>
                     HAPPY BIRTHDAY    
                     <BsBalloonFill className='ml-2 text-lg' />
                  </p>
               </div>
            </div>

            <div>
                {
                  drawer
                  ?<TfiClose onClick={handleDrawer}
                  className='text-[23px] text-[#6FC400]' />
                  :<BsCake2Fill onClick={handleDrawer}
                    className='text-[20px] text-[#6FC400]' />
                }
            </div>

        </div>

               {/* DRAWER */}
        { 
        drawer      
        ?<motion.div 
          animate={{ x: [330, 0], opacity: 1, scale: 1 }}
          transition={{
          duration: 0.7,
          delay: 0,
          }}
          initial={{ opacity: 1, scale: 1 }}
         className='fixed top-0 flex justify-end w-full h-[100vh] z-40 backdrop-blur-sm lg:hidden'>

            <div className='flex flex-col items-center justify-center w-[75%] pt-7 bg-[#10101A] shadow-2xl shadow-[#323232] md:w-[50%] md:pt-24'>
               <a href='#home' onClick={handleDrawer}
               className='text-[13px] flex flex-col items-center justify-center w-full mb-4'>
                 <p className='text-[#C4C4C4]'>01.</p>
                 <p className='text-[#6FC400]'>Home</p>
               </a>
              <a href='#gallery' onClick={handleDrawer} 
              className='text-[13px] flex flex-col items-center justify-center w-full my-4'>
                <p className='text-[#C4C4C4]'>02.</p>
                <p className='text-[#6FC400]'>Gallery</p>
              </a>
               <a href='#wishes' onClick={handleDrawer}
               className='text-[13px] flex flex-col items-center justify-center w-full my-4'>
                <p className='text-[#C4C4C4]'>03.</p>
                <p className='text-[#6FC400]'>Wishes</p>
              </a>

            </div>

        </motion.div>
        :''
        }
        

        {/* DESKTOP SCREEN */}
        <div className='hidden lg:flex items-center justify-end w-full mt-10'>
          <a href='#home' className='text-[13px] flex items-center justify-center mx-4 xl:text-[15px] xl:mx-5'>
            <p className='text-[#C4C4C4]'>01.</p>
            <p className='ml-2 text-[#6FC400]'>Home</p>
          </a>
          <a href='#gallery' className='text-[13px] flex items-center justify-center mx-4 xl:text-[15px] xl:mx-5'>
            <p className='text-[#C4C4C4]'>02.</p>
            <p className='ml-2 text-[#6FC400]'>Gallery</p>
          </a>
          <a href='#wishes' className='text-[13px] flex items-center justify-center mx-4 xl:text-[15px] xl:mx-5'>
            <p className='text-[#C4C4C4]'>03.</p>
            <p className='ml-2 text-[#6FC400]'>Wishes</p>
          </a>
          <a href='#' className='text-[13px] flex items-center justify-center mx-4 xl:text-[15px] xl:mx-5'>
               <BsCake2Fill className='text-[#6FC400] text-3xl' />
          </a>

        </div>
        


    </div>
  )
}

export default Navbar