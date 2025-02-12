import React from 'react'

const Headingbar = () => {
  return (
    <div className='flex items-center justify-center h-[44px] w-[1920px], my-14px, mx-377px, bg-violet-600 gap-0'>
     <span className='text-white font-sans font-semibold text-xs leading-4 text-left '>
       nidanaveed@gmail.com  <a className='mx-7 underline' href="/home">(12345)67890</a>
     </span>
     <select className=' bg-violet-600 text-white mx-10'>
      <option value="english">English</option>
      </select>
       
     <select className=' bg-violet-600 text-white'>
      <option value="usd">USD</option>
     </select>
 
    </div>
  )
}

export default Headingbar

