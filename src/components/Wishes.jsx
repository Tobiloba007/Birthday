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
          message: `Happy birthday to an amazing writer, young and purposeful ❤️. Keep being an amazing person , I admire your dedication and commitment in what you do. 
I’m wishing you a fulfilling year, continue to grow in wisdom and knowledge. Cheers 🥂`
        },
        {
          id: 2,
          name: 'Damilola',
          img: DamiCSR,
          title: 'Customer Service Rep.',
          message: `It is world Olohita’s day💖💖  
           A Queen was born innit😂😂😂  I mean, it is the birth of the most beautiful diamond of the season, the one with the vibrant and  intelligent soul.
            It is no news how your intellectual mind captivates me. I love how easy you  articulate your thoughts, how you try to make me smile on days that 
            I don’t feel like it…..I won’t  be saying much here *for a better version awaits in your mailbox* which you might likely see  before you see this one.
             Happy birthday baby girl🫂🫂`
        },
        {
          id: 3,
          name: 'Rukayat',
          img: Rukayat,
          title: 'Customer Service Rep.',
          message: `Happy birthday Lohi! I wish you all the very best in all your endeavors. 🎂🥂`  
        },
        {
          id: 4,
          name: 'Hilda',
          img: Hilda,
          title: 'Customer Service Rep.',
          message: `To the queen of jabs and piercing sarcasm.
Happy birthday Lohi, have a wonderful celebration`
        },
        // {
        //   id: 5,
        //   name: 'Loretta',
        //   img: Loretta,
        //   title: 'Content Writer',
        //   message: "Happy birthday, Ruky! I wish you a very beautiful new year. I pray that you're always happy! All the best ❤️"  
        // },
        {
          id: 6,
          name: 'Praise',
          img: Praise,
          title: 'Videographer',
          message: `Happy birthday Efiko
❤️🤲🏽
God’s blessings is upon you 
Keep excelling in God’s greatness.
Pls be flexible this year 
🤲🏽
Go out enjoy what you save for( in Ayra star’s mom voice).` 
        },
        {
          id: 7,
          name: 'Keem',
          img: Keem,
          title: 'Videographer',
          message: `Happy birthday, my baby girl 
🤗🥰
I wish you all the very best life has to offer. I cherish and love how beautifully you've built 
yourself into a young, confident woman. Even when faced with the unknown, you're never afraid 
to ask or try it out. You've got a brilliant and great future ahead, and I pray that success finds you 
in everything you do. 
May your days be as beautiful and warm as your smile that lights up every room 
😍
. May all your 
heart desires be granted in this new year of yours.
Age gracefully, baby girl🤗🥰`
        },
        {
          id: 8,
          name: 'Oladunni',
          img: Oladunni,
          title: 'Social Media Mgr.',
          message: `Happy birthday, dear Lorenta
❤️
The adorable and funny content writer. I like that you're passionate about your work, diligent, and 
even more so, excellent at it.
I pray that you continue to excel in all that you do.
Lines fall in pleasant places for you.
You would often see Lorenta widely shining her 32
😁
 and I pray that your joy will not cease.
Wishing you a long life in good health and sound mind.
Love you, baby girl, and I'm always rooting for you!
🥂
Have an absolutely fantastic new year🎊🚀`
        },
        {
          id: 9,
          name: 'Adeola',
          img: Adeola,
          title: 'UI/UX Designer',
          message: `Happy birthday Lorenta 
You’re such a sweet person. I pray that good gives you the answers to all your prayers. I pray you 
have a beautiful year just as you are, have a blast love!`
        },
        {
          id: 10,
          name: 'Damilola',
          img: Damilola,
          title: 'Graphics Designer',
          message: `Lorenta!
Happy Birthday to you.
And just when I was getting to connect with y'all, you guys are leaving.
I wish you all the very best.
Thank you for being a good, passionate and considerate person.
I hope we are able to get to work together sometimes in the future.
Until then, have a beautiful and fun filled day🎉🎉`
        },
        {
          id: 11,
          name: 'Christiana',
          img: Christy,
          title: 'Personal Asst.',
          message: `Happy birthday sweetie 
🍰🎈
 a sweet personality. Ready to learn, eager to help and always 
giving your best. I love how we bond and how amazing of a colleague and friend you are. Your 
dedication towards your writing is so admirable and inspiring , I’ll sure recommend you anywhere, 
anyday and anytime. Cheers 
🥂
 to achieving more`
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
          message: `Happy birthday, Lorenta! You’re an inspiring and hardworking young lady, and the world is about 
to witness your positive impact. Wishing you many more years of prosperity and joy ahead.`
        },
        {
          id: 14,
          name: 'NNAMDI',
          img: Nnamdi,
          title: 'Software Engineer',
          message: `Happy birthday Lorenta, I wish you the best things in life. I pray this new year is the best one yet, 
and God perfects his work in your life. Keep being the shining star you are and I wish you the 
very best🥳🎉🎉`
        },
        {
          id: 15,
          name: 'Michael',
          img: Michael,
          title: 'Software Engineer',
          message: `Happy birthday 🎂 to an amazing content writer and colleague, On your special day and as you 
move on to new adventures, we celebrate the incredible stories you've helped tell and the voice 
you've brought to Krent.inc. We'll miss you around here, but we're excited to see where life 
takes you next. Cheers to new beginnings 🍾🥂`
        },
        {
          id: 17,
          name: 'Folahanmi',
          img: Fola,
          title: 'Software Engineer',
          message: `Happy birthday Loretta, wish a wonderful year ahead and as you begin this new phase of life may 
God make it delightful for you.`
        },
        {
          id: 16,
          name: 'Moshood',
          img: Moshood,
          title: 'Project Manager',
          message: `Lorentaaaaaaaa!!!!!!!!
Happy birthday to my NYSC camp buddy, my OBS partner in crime, and my favorite writing 
machine!
You're not only an amazing writer, but also a super talented, incredibly intelligent, and 
ridiculously creative human being (don't @ me, it's true).
From those crazy catering SAED days of nothingness 
💀😂
 to our wholesome Morgen Green 
voyage, you've been my idolo, my confidante, and my partner in shenanigans.
Here's to many more years of creating magic together, pushing each other to greatness, and 
making memories that'll last a lifetime.
May your day be as bright as your smile, as colorful as your personality, and as fabulous as your 
writing skills.
Cheers to another year of slaying the game, my idoloooooo!
Your steeze and composure no go quench In Shaa Allah !!!`
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
