import React from 'react'
import img1 from '../assets/img1.jpg'
import { GiMagicLamp } from "react-icons/gi";
import HR from '../assets/hr.PNG' 
import Rukayat from '../assets/rukayat.JPG' 
import Hilda from '../assets/hilda.PNG' 
import Loretta from '../assets/loretta.PNG' 
import Praise from '../assets/praise.PNG' 
import Oladunni from '../assets/oladunni.JPG' 
import Damilola from '../assets/damilola.JPG' 
import Adeola from '../assets/adeola.JPG' 
import Christy from '../assets/christy.JPG' 
import Ibrahim from '../assets/ibrahim.JPG' 
import Nnamdi from '../assets/nnamdi.PNG' 
import Michael from '../assets/michael.JPG' 
import Ayomipo from '../assets/ayomipo.PNG' 
import Moshood from '../assets/moshood.JPG' 
import Keem from '../assets/keem.PNG' 


const Wishes = () => {

    const wishes = [
        {
          id: 1,
          name: 'Michelle Akinmade',
          img: HR,
          title: 'Human Resource Manager',
          message: "Happy birthday to an extraordinary lady Damilola. I wish you a year filled with blessings and favour. Thank you for being amazing"
        },
        {
          id: 2,
          name: 'Rukayat',
          img: Rukayat,
          title: 'Customer Service Rep.',
          message: "Hey Lola, you're such a kind and wonderful person, and there's so much about you that I love. I believe in you and I know you have the potential to do even better. I just want the best for you, my dear. Thank you for being an amazing colleague at work"  
        },
        {
          id: 3,
          name: 'Hilda',
          img: Hilda,
          title: 'Customer Service Rep.',
          message: "You've been one of the best influences I have had in this phase of my life and it's been my pleasure knowing and learning from you. Because of you, I'm going to treasure some experiences I've had in Krent, thanks for being a wonderful colleague. I wish you much success in your career and all your endeavours, and that you'll stand out when accolades are being awarded and that God will grant you your passion and the best husband to share that with. All my love to you on your birthday. Enjoy"
        },
        {
          id: 4,
          name: 'Loretta',
          img: Loretta,
          title: 'Content Writer',
          message: "When I first met Dami, I immediately noticed her poise. The way she carries herself? Just admirable! Then I noticed her free spirit. And in no time, we became friends. Before coworkers, we were friends first. So this is me wishing my girl a very happy birthday. Thank you for being amazing. Thank you for your genuine care. Have a beautiful day. I love youuuu!"  
        },
        {
          id: 5,
          name: 'Praise',
          img: Praise,
          title: 'Videographer',
          message: "Dear Dami For the little time I have known you, thank you for being considerate, caring and annoying. Stop wearing the mask of I’m not a good person because even when you try to hide behind those mask, your true caring behavior comes out. In this new year, try to fall in love and stop forming hard girl I wish all the best life has to offer "  
        },
        {
          id: 6,
          name: 'Oladunni',
          img: Oladunni,
          title: 'Social Media Mgr.',
          message: "Happy birthday, Dami. I wish you all of God's blessings. Have a blessed new year"
        },
        {
          id: 7,
          name: 'Adeola',
          img: Adeola,
          title: 'UI/UX Designer',
          message: "Happy birthday Dami, I wish you long life with happiness and great success God bless you and the works of your hands Have a beautiful year and I hope you had a blast today!"
        },
        {
          id: 8,
          name: 'Damilola',
          img: Damilola,
          title: 'Graphics Designer',
          message: "Happy Birthday, Dami! Wishing you a day filled with joy, laughter, and all the things you love most. Cheers to another fantastic year ahead!"
        },
        {
          id: 9,
          name: 'Christiana',
          img: Christy,
          title: 'Personal Asst.',
          message: "Happy birthday darling Do have a beautiful and fulfilling year ahead . Cheers"
        },
        {
          id: 10,
          name: 'Ibrahim',
          img: Ibrahim,
          title: 'Software Engineer',
          message: "Happy Birthday, Dami! Wishing you a wonderful day filled with joy and celebration. Your diligence and dedication at work are truly inspiring, and it's a pleasure to have you as a colleague. May you enjoy a long life filled with prosperity and happiness. Here's to many more years of success and fulfillment!"
        },
        {
          id: 11,
          name: 'NNAMDI',
          img: Nnamdi,
          title: 'Software Engineer',
          message: "Happy Birthday, Damilola. Your dedication and positive attitude to work is inspiring. I wish you all the joy and success in the world. May this year bring you happiness, good health, and all the wonderful things you deserve. Have a great year."
        },
        {
          id: 12,
          name: 'Michael',
          img: Michael,
          title: 'Software Engineer',
          message: "Happy birthday to an amazing colleague and an even more incredible person! Wishing you a day filled with joy and a year full of successes."
        },
        {
          id: 13,
          name: 'Ayomipo',
          img: Ayomipo,
          title: 'Software Engineer',
          message: "Happy birthday to the sunshine of our office, Damilola! Wishing you a day as sparkling as your personality and filled with laughter and delicious cake!"
        },
        {
          id: 14,
          name: 'Moshood',
          img: Moshood,
          title: 'Project Manager',
          message: "Happy Birthday to an amazing colleague and friend! Wishing you a day filled with love, laughter, and all of your favorite things. May this new year bring you endless joy, success, and adventures. You deserve it all my proper corporate baddie!! Cheers to another year of creating memories together! Idolo"
        },
        {
          id: 15,
          name: 'Keem',
          img: Keem,
          title: 'Videographer',
          message: "Happy birthday, Dami! May your day be as wonderful and special as you are. Your diligence and outright spirit are truly inspiring and amazing. May all your wishes be fulfilled and silent prayers be answered. Enjoy your special day!"
        }
    ]

  return (
    <div className='relative flex flex-col items-center w-full bg-[#000000] my-10 py-12 px-8 md:px-14 lg:px-24 xl:px-52'>
        <div className='flex items-center justify-start w-full'>
            <GiMagicLamp className='text-white mr-2 text-lg md:mr-3 lg:text-xl xl:text-2xl xl:mr-4' />
            <p className="text-[16px] text-[#6FC400] font-[400] md:text-[17px] xl:text-[20px]">
               Wishes
            </p>
        </div>

         <div className='absolute top-20 flex items-start justify-start w-full mt-10 pl-6 overflow-x-auto [&>div]:flex-shrink-0 no-scrollbar md:justify-start md:mt-14 md:pl-14 
                         lg:mt-16 lg:pl-24 xl:pl-52'>
              {wishes.map((item) => {
                return(
              <div key={item} className='flex flex-col items-start w-[250px] mr-10 md:w-[255px] md:mr-12 lg:w-[285px] xl:w-[300px] lg:mr-20'>
                   <div className='flex items-center justify-start wfull'>
                        <div className='w-14 h-14 rounded-full border-[2px] border-[#869e68] lg:h-16 lg:w-16'>
                             <img className='w-full h-full rounded-full object-cover'
                              src={item.img} alt='wisher' />
                        </div>

                        <div className='flex flex-col items-start ml-2 lg:ml-3'>
                            <p className="text-xs text-[#ffffff] font-[400] lg:text-[13px]">
                               {item.name}
                            </p>
                            <p className="text-xs text-[#858282] font-[400] pt-[2px] lg:text-[13px] lg:pt-1">
                               {item.title}
                            </p>
                        </div>
                   </div>

                   <div className='w-full mt-2'>
                       <p className="text-[11px] text-[#858282] font-[400] pt-[2px] w-full leading-5 lg:text-[12px] xl:text-[13px]">
                           {item.message}
                       </p>
                   </div>
              </div>
                  )
              })}

         </div>

    </div>
  )
}

export default Wishes
