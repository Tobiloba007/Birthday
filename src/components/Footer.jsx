import React from 'react'
import { GiSteamBlast } from "react-icons/gi";


const Footer = () => {
  return (
    <div className='flex flex-col items-center w-full bg-[#000000] mt-[350px] px-8 pb-3 md:px-14 md:mt-96 lg:px-24 xl:px-52 xl:mt-[420px]'>

        <div className='flex flex-col items-center justify-center w-full py-5 xl:py-12'>
             <i className='text-[10px] md:text-[11px] text-white xl:text-sm'>
                 With <span className='text-lg md:text-xl xl:text-3xl'>❤️</span> from the entire Morgen Green & Krent staff . . .
             </i>

             <i className='text-[10px] mt-5 md:text-[11px] text-[#6FC400] xl:text-sm'>
                  HAVE FUN ! 💃🏻
             </i>
        </div>

    </div>
  )
}

export default Footer
