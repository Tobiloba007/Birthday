import React, { useRef, useState } from 'react';
import { IoIosCamera } from "react-icons/io";
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Gallery = () => {
  return (
    <div className='flex flex-col items-center w-full bg-[#000000] mt-36 py-12 px-8 md:px-14 lg:px-24 xl:px-52'>
         <div className='flex items-center justify-start w-full'>
             <IoIosCamera className='text-white mr-2 text-lg md:mr-3 lg:text-xl xl:text-2xl xl:mr-4' />
             <p className="text-[16px] text-[#6FC400] font-[400] md:text-[17px] xl:text-[20px]">
                Gallery
             </p>
         </div>


         <div className='flex justify-center w-full mt-6'>
         <Swiper
         effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className='w-[300px] h-[300px]'
       >
         <SwiperSlide className='h-80 w-80 bg-red-400'>Slide 1</SwiperSlide>
         <SwiperSlide className='h-80 w-80 bg-red-400'>Slide 2</SwiperSlide>
         <SwiperSlide className='h-80 w-80 bg-red-400'>Slide 3</SwiperSlide>
         <SwiperSlide className='h-80 w-80 bg-red-400'>Slide 4</SwiperSlide>
       </Swiper>
         </div>
    </div>
  )
}

export default Gallery
