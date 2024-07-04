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
          message: "Ayo, the talkative! 😂. With your curiosity, one would think you have a career in law. As you embark on this new chapter, I wish you all the best. May your passion for work continue to serve you well. You will be missed in our office, but I'm excited to see the impact you'll make! Keep shining, Ayo!"
        },
        {
          id: 2,
          name: 'Damilola',
          img: DamiCSR,
          title: 'Customer Service Rep.',
          message: "Although our paths didn't cross much, I’m wishing you all the very best on your new journey ahead. May your future be bright and full of success. Farewell! Fighting 💪🏽💪🏽 in Korean"  
        },
        {
          id: 3,
          name: 'Rukayat',
          img: Rukayat,
          title: 'Customer Service Rep.',
          message: "Saying goodbye is never easy, but I wanted to thank you for the great memories. It was a pleasure working with you, Ayomiposi. Here's to hearing great things about each other in the future. Cheers to reaching greater heights!"  
        },
        {
          id: 4,
          name: 'Hilda',
          img: Hilda,
          title: 'Customer Service Rep.',
          message: "Thank you for being a friend and a colleague. I wish you greater heights and bigger pursuits"
        },
        {
          id: 5,
          name: 'Loretta',
          img: Loretta,
          title: 'Content Writer',
          message: "Once, I asked Ayo how he managed to balance academics with work and all. He just smiled, as if to say 'I'm winging it' . That's how I knew he was super hardworking. That's also how I know there's a lot he'll do for himself. I'll miss your carefree self, Ayomipo, and maybe your tendency to always call me by my full name, haha. I know you'll do great, and I'm rooting for you. Cheers!"  
        },
        {
          id: 6,
          name: 'Praise',
          img: Praise,
          title: 'Videographer',
          message: "Dearest gentle reader, ( sorry I meant Ayomipo 😂) Thank you for being such an important part of the team these past few months I have known you, We wouldn't have accomplished what we have now on Krent website without you. I’m going to miss seeing you around the office and having you argue with Moshood and Loretta. Wishing you all the best on your new adventure."  
        },
        {
          id: 7,
          name: 'Keem',
          img: Keem,
          title: 'Videographer',
          message: "Dear Ayomipo, here's to wishing you all the best in your new journey. Your presence will be missed, but I'm excited for your future and growth. Stay in touch bro. ~ Keem"
        },
        {
          id: 8,
          name: 'Oladunni',
          img: Oladunni,
          title: 'Social Media Mgr.',
          message: "I wish you greater feats and the best in all your endeavours. Best of luck, Ayomipo."
        },
        {
          id: 9,
          name: 'Adeola',
          img: Adeola,
          title: 'UI/UX Designer',
          message: "Hello Ayomipo! This is from Ade… I know we haven’t spent a lot of time working together but the time we spent together, I think you’re pretty cool! I wish you huge success in all your career goals, Keep growing!"
        },
        {
          id: 10,
          name: 'Damilola',
          img: Damilola,
          title: 'Graphics Designer',
          message: "This is to wish you all the best in your future endeavours Ayomipo. Your contributions and impact would surely be greatly missed and I wish that your journey ahead be filled with success happiness and fulfilment .. Best wishes."
        },
        {
          id: 11,
          name: 'Christiana',
          img: Christy,
          title: 'Personal Asst.',
          message: "Parting ways never comes easy. You’ll be surely missed at Krent, we will miss you. To greater heights and achievements, cheers !"
        },
        {
          id: 12,
          name: 'Ibrahim',
          img: Ibrahim,
          title: 'Software Engineer',
          message: "Dear Ayomipo, It's been a pleasure working with you, and we'll truly miss your presence in the office. Your hard work and positive attitude have made a significant impact on our team. As you move on to new opportunities, I wish you all the best and great fortune in your future endeavors. May success follow you wherever you go."
        },
        {
          id: 13,
          name: 'NNAMDI',
          img: Nnamdi,
          title: 'Software Engineer',
          message: "Life has different stages, and I'm sure yours is moving on to a new and exciting chapter. You're talented and skilled at your job. Your presence definitely made a significant impact on the Krent team. I wish you all the best in your future endeavors. Cheers to growth!"
        },
        {
          id: 14,
          name: 'Michael',
          img: Michael,
          title: 'Software Engineer',
          message: "I wish you goodluck Ayomipo, although we never met in person, our virtual collaboration has been enjoyable over the past few weeks. Your dedication and expertise have also been invaluable to the Krent team. May your new chapter bring you growth, happiness, and success."
        },
        {
          id: 15,
          name: 'Moshood',
          img: Moshood,
          title: 'Project Manager',
          message: "Best wishes to an awesome colleague and friend as you embark on a new journey! It's been a pleasure working with you 💯 May your next chapter be filled with unprecedented growth, excitement, and happiness. Stay in touch and keep shining bro!"
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
