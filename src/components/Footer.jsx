import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center w-full bg-[#000000] mt-96 px-8 md:px-14 lg:px-24 xl:px-52'>
        <hr className='w-full border-[0.001em] border-[#6FC400] md:hidden' />

        <div className='flex items-center justify-center w-full py-5'>
             <i className='text-[10px] text-white xl:text-xs'>
                 With ❤️ from the entire Morgen Green & Krent staff.
             </i>
        </div>
    </div>
  )
}

export default Footer
