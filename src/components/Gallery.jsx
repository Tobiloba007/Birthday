import React from 'react';
import { IoIosCamera } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import slide_image_1 from '../assets/celebrant1.JPG';
import slide_image_2 from '../assets/celebrant2.JPG';
import slide_image_3 from '../assets/celebrant3.JPG';
import slide_image_4 from '../assets/celebrant4.JPG';
import slide_image_5 from '../assets/celebrant5.JPG';
import slide_image_6 from '../assets/celebrant6.JPG';
import slide_image_7 from '../assets/celebrant7.JPG';
import slide_image_8 from '../assets/celebrant8.JPG';
import slide_image_9 from '../assets/celebrant9.JPG';
import slide_image_10 from '../assets/celebrant10.JPG';
import slide_image_11 from '../assets/celebrant11.JPG';
import slide_image_12 from '../assets/celebrant12.JPG';
import slide_image_13 from '../assets/celebrant13.JPG';
import slide_image_14 from '../assets/celebrant14.JPG';
import slide_image_15 from '../assets/celebrant15.JPG';
import slide_image_16 from '../assets/celebrant16.JPG';
import slide_image_17 from '../assets/celebrant17.PNG';
import slide_image_18 from '../assets/celebrant18.JPG';




const Gallery = () => {
  return (
    <div className='flex flex-col items-center w-full bg-[#000000] mt-36 py-12 md:pb-0 md:mb-0'>
         <div className='flex items-center justify-start w-full px-8 md:px-14 lg:px-24 xl:px-52'>
             <IoIosCamera className='text-white mr-2 text-lg md:mr-3 lg:text-xl xl:text-2xl xl:mr-4' />
             <p className="text-[16px] text-[#6FC400] font-[400] md:text-[17px] xl:text-[20px]">
                Gallery
             </p>
         </div>


         <div className='flex justify-center w-full mt-16 z-10 md:mt-20 xl:mt-28'>
         <Swiper
         effect={'coverflow'}
         grabCursor={true}
         centeredSlides={true}
         loop={true}
         slidesPerView={'auto'}
         coverflowEffect={{
           rotate: 0,
           stretch: 0,
           depth: 100,
           modifier: 2.5,
         }}
         pagination={{ el: '.swiper-pagination', clickable: true }}
         navigation={{
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
           clickable: true,
         }}
         modules={[EffectCoverflow, Pagination, Navigation]}
         className="swiper_container"
       >
         <SwiperSlide>
           <img src={slide_image_3} alt="slide_image" />
         </SwiperSlide>
         <SwiperSlide>
           <img src={slide_image_4} alt="slide_image" />
         </SwiperSlide>
         <SwiperSlide>
           <img src={slide_image_1} alt="slide_image" />
         </SwiperSlide>
         <SwiperSlide>
           <img src={slide_image_5} alt="slide_image" />
         </SwiperSlide>
         <SwiperSlide>
           <img src={slide_image_2} alt="slide_image" />
         </SwiperSlide>
         <SwiperSlide className='h-full w-full'>
           <img src={slide_image_6} alt="slide_image" />
         </SwiperSlide>
         <SwiperSlide className='h-full w-full'>
           <img src={slide_image_7} alt="slide_image" />
         </SwiperSlide>
         <SwiperSlide className='h-full w-full'>
           <img src={slide_image_8} alt="slide_image" />
         </SwiperSlide>
         <SwiperSlide className='h-full w-full'>
           <img src={slide_image_9} alt="slide_image" />
         </SwiperSlide>
         <SwiperSlide className='h-full w-full'>
           <img src={slide_image_10} alt="slide_image" />
         </SwiperSlide>
         <SwiperSlide className='h-full w-full'>
           <img src={slide_image_11} alt="slide_image" />
         </SwiperSlide>
         <SwiperSlide className='h-full w-full'>
           <img src={slide_image_12} alt="slide_image" />
         </SwiperSlide>
         <SwiperSlide className='h-full w-full'>
           <img src={slide_image_13} alt="slide_image" />
         </SwiperSlide>
         <SwiperSlide className='h-full w-full'>
           <img src={slide_image_14} alt="slide_image" />
         </SwiperSlide>
         <SwiperSlide className='h-full w-full'>
           <img src={slide_image_15} alt="slide_image" />
         </SwiperSlide>
         <SwiperSlide className='h-full w-full'>
           <img src={slide_image_16} alt="slide_image" />
         </SwiperSlide>
         <SwiperSlide className='h-full w-full'>
           <img src={slide_image_17} alt="slide_image" />
         </SwiperSlide>
         <SwiperSlide className='h-full w-full'>
           <img src={slide_image_18} alt="slide_image" />
         </SwiperSlide>
 
         {/*<div className="slider-controler">
           <div className="swiper-button-prev slider-arrow">
             <GoArrowLeft className='text-xs text-black' />
           </div>
           <div className="swiper-button-next slider-arrow">
             <ion-icon name="arrow-forward-outline"></ion-icon>
             <GoArrowRight className='text-xs text-black' />
           </div>
           <div className="swiper-pagination"></div>
         </div>*/}
       </Swiper>
         </div>
      
    </div>
  )
}

export default Gallery
