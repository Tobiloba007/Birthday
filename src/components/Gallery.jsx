import React from 'react';
import { IoIosCamera } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../../src/sanityClient'




const Gallery = ({data}) => {

  const builder = imageUrlBuilder(sanityClient);


  return (
    <div className='flex flex-col items-center w-full bg-[#000000] mt-36 py-12 md:pb-0 md:mb-0'>
         <div className='flex items-center justify-start w-full px-8 md:px-14 lg:px-24 xl:px-52'>
             <IoIosCamera className='text-white mr-2 text-lg md:mr-3 lg:text-xl xl:text-2xl xl:mr-4' />
             <p className="text-[16px] text-[#6FC400] font-[400] md:text-[17px] xl:text-[20px]">
                Gallery
             </p>
         </div>


         <div className='flex justify-right w-full mt-16 z-10 md:mt-20 xl:mt-28'>
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

        {data.map((item) => (
         <SwiperSlide>
           <img src={builder.image(item.asset._ref).url()}
           alt="slide_image" />
         </SwiperSlide>
          ))  
        }
 
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
