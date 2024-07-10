import React from 'react'
import { GiMagicLamp } from "react-icons/gi";
import HR from '../assets/hr.PNG' 
import DamiCSR from '../assets/DamiCSR.jpeg' 
import Rukayat from '../assets/rukayat.JPG' 
import Hilda from '../assets/hilda.PNG' 
import Loretta from '../assets/loretta.PNG' 
import Praise from '../assets/praise.PNG' 
import Oladunni from '../assets/oladunni.JPG' 
import Damilola from '../assets/damilola.JPG' 
import Adeola from '../assets/adeola.JPG' 
import Christy from '../assets/christy.JPG' 
// import Mohammed from '../assets/Mohammed.PNG' 
import Ibrahim from '../assets/ibrahim.JPG' 
import Nnamdi from '../assets/nnamdi.PNG' 
import Michael from '../assets/michael.JPG' 
import Fola from '../assets/fola.PNG' 
import Moshood from '../assets/moshood.JPG' 
import Keem from '../assets/keem.PNG' 


const Wishes = () => {

    const wishes = [
        {
          id: 1,
          name: 'Michelle Akinmade',
          img: HR,
          title: 'Human Resource Manager',
          message: "Happy birthday to my beautiful selfless lady. It's been a beautiful journey watching you grow as a woman 💕 I admire how you put yourself together in difficult times. I wish you a year filled with so much love, blessings and a good husband 😘 Have a good bday 🎈🎂 "
        },
        {
          id: 2,
          name: 'Damilola',
          img: DamiCSR,
          title: 'Customer Service Rep.',
          message: "Heyyyy Rukks, Happy Birthday to you 🥳🥳 Thank you for being part of a fulfilling journey at Krent. We’ve all certainly had a few share of ups and downs but I wouldn’t have had it any other way. Thank you for being a wonderful and beautiful person even if you tend to be extremely personal and sensitive about everything. It’s your day today and I’m wishing only the very best that life has to offer you. Hip Hip Hip….hurrayyyyyyyy💖💖"  
        },
        // {
        //   id: 3,
        //   name: 'Rukayat',
        //   img: Rukayat,
        //   title: 'Customer Service Rep.',
        //   message: ""  
        // },
        {
          id: 4,
          name: 'Hilda',
          img: Hilda,
          title: 'Customer Service Rep.',
          message: "Rukayat, I remember that what helped me adjust when I started Krent is the warm and friendly reception from Ruky that never wavered. Everyday I looked forward to her presence in the office; things are never dull with her around (unless she picks offence). I want to celebrate the sensitive and beautiful soul you are and you might always need reminding that we love you for the free spirit you are and don't want you to change even one aspect, I mean it! Happy birthday sweet sister and I pray for Allah's good rewards for you."
        },
        {
          id: 5,
          name: 'Loretta',
          img: Loretta,
          title: 'Content Writer',
          message: "Happy birthday, Ruky! I wish you a very beautiful new year. I pray that you're always happy! All the best ❤️"  
        },
        {
          id: 6,
          name: 'Praise',
          img: Praise,
          title: 'Videographer',
          message: "My pumpkin pie ❤️ Happy birthday boo 🤭 Thank you for you’re such an amazing soul. I wish you all the best life has to offer. I love that you are a genuine person. Keep shining your light baby because it warms people hearts ❤️"  
        },
        {
          id: 7,
          name: 'Keem',
          img: Keem,
          title: 'Videographer',
          message: "Happy birthday Abisola,🎊🎉 May your life be filled with good health, wealth, happiness, and God's abundant blessings. May all your dreams come true this new year of yours. You're one of the kindest and most understanding people I know, and I'm grateful to call you my friend🤗🥰. I know you feel overwhelmed and confused sometimes, but that's how life is, we just need to follow the process. Allah already assured us in Quran 93:4, 'And verily the Hereafter will be better for thee than the present.' You just need to take care of yourself amidst all the challenges. You're achieving so much in your 20s already and need to prioritize your happiness and wellbeing over every other thing. May this year bring you boundless joy and success. Here's to aging gracefully baby girl🤗🥰❤️"
        },
        {
          id: 8,
          name: 'Oladunni',
          img: Oladunni,
          title: 'Social Media Mgr.',
          message: "Happy birthday, baby girl.❤️  I wish you a long life in good health and sound mind. I really love that you're bubbly and you light up wherever you are with your beautiful smile. May you continuously enjoy boundless joy. I pray the things which you so much desire will be granted. Have a prosperous new year, Rukayat! It's already your year of soaring.✨  Cheers to a new year 🥂"
        },
        {
          id: 9,
          name: 'Adeola',
          img: Adeola,
          title: 'UI/UX Designer',
          message: "Happy birthday Rukayat! I wish you long life and prosperity. I pray that God blesses you this new year. Have a beautiful year"
        },
        {
          id: 10,
          name: 'Damilola',
          img: Damilola,
          title: 'Graphics Designer',
          message: "Happy Birthday to you Rukayat, Many happy returns of the day., May your special day be filled with joy, laughter, and everything you love. Here's to another year, of success, happiness, and making wonderful memories. Enjoy every moment!"
        },
        {
          id: 11,
          name: 'Christiana',
          img: Christy,
          title: 'Personal Asst.',
          message: "Happy birthday sweetie 🍰🎈 May blessings rain on you. I pray all the amazing things you’re planning click for you . Cheers 🥂 to a year of fulfillment "
        },
        // {
        //   id: 12,
        //   name: 'Mohammed',
        //   img: Mohammed,
        //   title: 'Software Engineer',
        //   message: "Dear Ayomipo, It’s been an incredible journey working with you. As the backend developer, your expertise and dedication have been crucial to our team's success. Your problem-solving skills and innovative approach have consistently impressed me and made my job as a front end developer a lot smoother. While I’m sad to see you go, I’m excited for the new opportunities that await you. I have no doubt that you’ll continue to excel and achieve great things in your next endeavor. Wishing you all the best in your future pursuits. Stay in touch."
        // },
        {
          id: 13,
          name: 'Ibrahim',
          img: Ibrahim,
          title: 'Software Engineer',
          message: "Happy birthday, Rukayat! You are an amazing young lady with a vibrant and lively nature. I wish you many more fulfilling years ahead. 🎂🍾🎉"
        },
        {
          id: 14,
          name: 'NNAMDI',
          img: Nnamdi,
          title: 'Software Engineer',
          message: "Happy birthday Rukayat. I wish you more of God's blessings. Have a great year."
        },
        {
          id: 15,
          name: 'Michael',
          img: Michael,
          title: 'Software Engineer',
          message: "Happy birthday Rukayat, Wishing you a day filled with joy, love, and laughter. May your year ahead be blessed with success, happiness, and fulfillment."
        },
        {
          id: 17,
          name: 'Folahanmi',
          img: Fola,
          title: 'Software Engineer',
          message: "Happy Birthday! Wishing you a wonderful day and a year filled with success and happiness. I'm looking forward to working with you."
        },
        {
          id: 16,
          name: 'Moshood',
          img: Moshood,
          title: 'Project Manager',
          message: "Happy birthday to an amazing colleague! Wishing you a day filled with joy, love, and all your favorite things. May this new year bring you endless blessings and opportunities. Cheers to another year of shining! 🎉🎂"
        },
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
