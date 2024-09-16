import React from 'react'
import { GiMagicLamp } from "react-icons/gi";
import HR from '../assets/hr.PNG' 
import DamiCSR from '../assets/DamiCSR.jpeg'
import Loretta from '../assets/loretta.PNG' 
import Oladunni from '../assets/oladunni.JPG' 
import Damilola from '../assets/damilola.JPG' 
// import Adeola from '../assets/adeola.JPG' 
import Christy from '../assets/christy.JPG' 
// import Mohammed from '../assets/Mohammed.PNG' 
import Ibrahim from '../assets/ibrahim.JPG' 
import Nnamdi from '../assets/nnamdi.PNG' 
import Michael from '../assets/michael.JPG' 
import Fola from '../assets/fola.PNG' 
import keem from '../assets/keem.PNG'
import blessing from '../assets/blessing.JPG'
import ebenezer from '../assets/ebenezer.JPG'
import efeoghene from '../assets/efeoghene.JPG'
import foluke from '../assets/foluke.JPG'
import grace from '../assets/grace.JPG'
import lucky from '../assets/lucky.JPG'
import obaro from '../assets/obaro.JPG'
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../../src/sanityClient'


const Wishes = ({data}) => {

  const builder = imageUrlBuilder(sanityClient);

//     const wishes = [
//         {
//           id: 1,
//           name: 'Michelle Akinmade',
//           img: HR,
//           title: 'Human Resource Manager',
//           message: `Happy birthday beautiful Adeola 
// Keep shining
// `
//         },
//         {
//           id: 2,
//           name: 'Damilola',
//           img: DamiCSR,
//           title: 'Customer Service Rep.',
//           message: `Happy Birthday Adeola🥳🥳

// I’m wishing all the best in your endeavors. Continue to soar and shine bright!!!!

// Hip Hip Hip…..hurrrrrraaaaaaahhhhhh💖
// `
//         },
//         {
//           id: 3,
//           name: 'Lucky',
//           img: lucky,
//           title: 'Customer Service Rep.',
//           message: `Happy birthday Adeola, it's another complete work around the sun. I pray for long life and prosperity and that you encounter favour all the days of your life.`  
//         },
//         {
//           id: 4,
//           name: 'Blessing',
//           img: blessing,
//           title: 'Customer Service Rep.',
//           message: `Happy birthday Adeola🎉 this new year sha come with new beginnings for you😇
// `
//         },
//         {
//           id: 5,
//           name: 'Ebenezer',
//           img: ebenezer,
//           title: 'Customer Service Rep.',
//           message: `Happy birthday adeola
// Wishing you all the best

// `
//         },
//         {
//           id: 6,
//           name: 'Grace',
//           img: grace,
//           title: 'Customer Service Rep.',
//           message: `Happy Birthday Adeola🥳 many more years to come in good health and prosperity 🎊 cheers 🥂`
//         },
//         {
//           id: 7,
//           name: 'Obaro',
//           img: obaro,
//           title: 'Intern',
//           message: `Happy birthday to our amazing UI/UX Queen👸! May your day be as bright and beautiful as you are. Wishing you a year filled with love, laughter, and incredible design inspirations. Cheers to another year of creating magic!`
//         },
//         {
//           id: 8,
//           name: 'Lorenta',
//           img: Loretta,
//           title: 'Content Writer',
//           message: `If you've worked with Adeola, one of the first traits you'd notice is her enthusiasm. Her tendency to always be on the ball, her quick responsiveness when something needs her attention, and her politeness are simply unmissable.

// I wish you the happiest of birthdays, Adeola. I think you’re amazing, and even though we don’t work on many projects together, I’m still a big fan of your work. I pray that you’re always happy and that you never lose your incredible spirit. 

// Have a beautiful new year, Sis!❤️
// ` 
//         },
// //         {
// //           id: 9,
// //           name: 'Praise',
// //           img: Praise,
// //           title: 'Videographer',
// //           message: `Happy birthday Efiko
// // ❤️🤲🏽
// // God’s blessings is upon you 
// // Keep excelling in God’s greatness.
// // Pls be flexible this year 
// // 🤲🏽
// // Go out enjoy what you save for( in Ayra star’s mom voice).` 
// //         },
//         {
//           id: 10,
//           name: 'Keem',
//           img: keem,
//           title: 'Videographer',
//           message: `Happy birthday Adeola, wishing you the best life has to offer.🎊🥳`
//         },
//         {
//           id: 11,
//           name: 'Oladunni',
//           img: Oladunni,
//           title: 'Social Media Mgr.',
//           message: `Happy birthday, Adeola.
// I wish you all of God's blessings.
// Have a blessed new year.
// `
//         },
// //         {
// //           id: 12,
// //           name: 'Adeola',
// //           img: Adeola,
// //           title: 'UI/UX Designer',
// //           message: `Happy birthday Lorenta 
// // You’re such a sweet person. I pray that good gives you the answers to all your prayers. I pray you 
// // have a beautiful year just as you are, have a blast love!`
// //         },
//         {
//           id: 13,
//           name: 'Damilola',
//           img: Damilola,
//           title: 'Graphics Designer',
//           message: `Happy Birthday to you Adeola.
// Many happy returns.
// I cherish your drive and willingness towards learning and work.
// I pray that all your wishes come to fulfilment on this day

// Cheers to a new year🎊🥳
// `
//         },
//         {
//           id: 14,
//           name: 'Christiana',
//           img: Christy,
//           title: 'Personal Asst.',
//           message: `Blissful birthday Ade!🎉

// I wish you everything fine and yummy. May God bless this new age and fill your life with so much joy . I admire your dedication and calmness towards work, and how you always want to get things done in your best way, I so much admire it. 
// Ensure to have a great year ahead . Cheers 🥂 ❤️`
//         },
//         // {
//         //   id: 12,
//         //   name: 'Mohammed',
//         //   img: Mohammed,
//         //   title: 'Software Engineer',
//         //   message: "Dear Ayomipo, It’s been an incredible journey working with you. As the backend developer, your expertise and dedication have been crucial to our team's success. Your problem-solving skills and innovative approach have consistently impressed me and made my job as a front end developer a lot smoother. While I’m sad to see you go, I’m excited for the new opportunities that await you. I have no doubt that you’ll continue to excel and achieve great things in your next endeavor. Wishing you all the best in your future pursuits. Stay in touch."
//         // },
//         {
//           id: 15,
//           name: 'Ibrahim',
//           img: Ibrahim,
//           title: 'Software Engineer',
//           message: `Happy Birthday, Adeola!
// Wishing you a fantastic day filled with joy and celebration! Your dedication and strong work ethic are truly inspiring. May this new year bring you an abundance of wealth, good health, and countless moments of happiness.`
//         },
//         {
//           id: 16,
//           name: 'NNAMDI',
//           img: Nnamdi,
//           title: 'Software Engineer',
//           message: `Happy Birthday, Adeola! 
// I wish you a fulfilling and joyous birthday celebration. You bring energy and passion to every project and it's inspiring to see. Have a fantastic year ahead🥂`
//         },
//         {
//           id: 17,
//           name: 'Michael',
//           img: Michael,
//           title: 'Software Engineer',
//           message: `Happy Birthday Adeola,
// I wish you all the joy, happiness, and success the world has to offer. May this special day bring you love, laughter, and a year filled with prosperity.
// `
//         },
//         {
//           id: 18,
//           name: 'Folahanmi',
//           img: Fola,
//           title: 'Software Engineer',
//           message: `Happy birthday Adeola 🎉🎉, as you have made beautiful designs, may God make your life beautiful and bless you all round. 🥂`
//         },
//         {
//           id: 19,
//           name: 'Foluke',
//           img: foluke,
//           title: 'Project Manager',
//           message: `Happy birthday Adeola, I wish you all the blessings life has to offer. Have fun today🎉`
//         },
//         {
//           id: 20,
//           name: 'EFEOGHENE',
//           img: efeoghene,
//           title: 'Project Manager',
//           message: `Sending you warm wishes and happy vibes on your special day! May it be as bright and awesome as you are. Happy Birthday Adeola✨`
//         },
//     ]


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
              {data.map((item) => {
                return(
              <div key={item} className='flex flex-col items-start w-[250px] mr-10 md:w-[255px] md:mr-12 lg:w-[285px] xl:w-[300px] lg:mr-20'>
                   <div className='flex items-center justify-start wfull'>
                        <div className='w-14 h-14 rounded-full border-[2px] border-[#869e68] lg:h-16 lg:w-16'>
                             <img className='w-full h-full rounded-full object-cover'
                              src={builder.image(item.image.asset._ref).url()}
                               alt='wisher' />
                        </div>

                        <div className='flex flex-col items-start ml-2 lg:ml-3'>
                            <p className="text-xs text-[#ffffff] font-[400] lg:text-[13px]">
                               {item.name}
                            </p>
                            <p className="text-xs text-[#858282] font-[400] pt-[2px] lg:text-[13px] lg:pt-1">
                               {item.role}
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
