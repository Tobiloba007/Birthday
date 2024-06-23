import React from 'react'
import img1 from '../assets/img1.jpg'
import { GiMagicLamp } from "react-icons/gi";


const Wishes = () => {

    const wishes = [
        {
          id: 1,
          name: 'CHukwueze Timothy',
          title: 'Marketing MANAGER',
          message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
          id: 2,
          name: 'John Doe',
          title: 'Asst. Director',
          message: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."  
        },
        {
          id: 3,
          name: 'Emmanuel Adelaja',
          title: 'Customer Rep.',
          message: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          id: 4,
          name: 'Ciroma Chukwuma',
          title: 'Student',
          message: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."  
        },
        {
          id: 5,
          name: 'Elon Dew',
          title: 'CTO',
          message: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source"  
        },
        {
          id: 6,
          name: 'Jinx Totti',
          title: 'CSO',
          message: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics"
        },
    ]

  return (
    <div className='relative flex flex-col items-center w-full bg-[#000000] my-20 py-12 px-8 md:px-14 lg:px-24 xl:px-52'>
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
                              src={img1} alt='wisher' />
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
