import React from 'react'

const Promotional2:  React.FC = () => {
  return (
    <section className="bg-slate-200 py-0 w-1920 h-764">
      {/* Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-5">
         {/* Add sofa image */}
       <img
            src="\trendingsofa.png" className="w-[509px] h-[550px] top-0 left-[50px]"
        />
        
        {/* Left Content */}
        <div className="text-left w-[507px] h-[92px] pt-0">
          <h1 className="text-[#151875] text-4xl font-sans leading-10 font-bold mb-2">
          Unique Features Of leatest &
          Trending Poducts
          </h1>
          <ul className='list-disc list-outside m-4'>
          <li className='text-[#ACABC3]   marker:text-pink-600 leading-5 m-4 '>All frames constructed with hardwood solids and laminates</li>
          <li className='text-[#ACABC3] marker:text-blue-600  m-4'>Reinforced with double wood dowels, glue, screw - nails corner 
          blocks and machine nails</li>
          <li className='text-[#ACABC3] marker:text-sky-500 m-4 '>Arms, backs and seats are structurally reinforced</li>
          </ul>
          
          <button className="bg-pink-500 text-white font-bold py-2 px-6 rounded hover:bg-pink-600">
            Add To Cart
          </button>
        </div>

        
      </div>
    </section>
         

  )
}

export default Promotional2