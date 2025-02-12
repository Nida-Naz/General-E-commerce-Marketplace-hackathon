import React from "react";

const PromotionalHeader: React.FC = () => {
  return (
    <section className="flex flex-col items-center bg-[#F2F0FF] py-0  bg-center bg-cover">
      {/* Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5">
         {/* Add lamp image */}
       <img
            src="\2.png" className="w-96 h-96 mt-0 left-5"// Replace with the actual lamp image path
        />
        
        {/* Left Content */}
        <div className="text-left lg:w-1/2 my-14">
          <h4 className="text-[#FB2E86] text-xs font-bold w-[230px] h-[28px] mt-6 ">
            Best Furniture For Your Castle...
          </h4>
          <h1 className="text-gray-900 text-4xl font-bold leading-7 font-mono mt-6 w-[644px] h-[140px] ">
            New Furniture Collection <br/> Trends in 2020
          </h1>
          <h5 className="text-[#8A8FB9] text-sm leading-7 w-[559px] h-[56] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
          in phasellus non in justo.
          </h5>
          
          <button className="bg-pink-500 text-white font-bold py-2 px-6 rounded hover:bg-pink-600">
            Shop Now
          </button>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex items-center justify-center relative">
          {/* Background Circle */}
          <div className="absolute bg-indigo-100 w-80 h-80 rounded-full -z-10"></div>

          {/* Images */}
          {/* Add sofa image */}
          <img
            src="\1.png" 
            
            className="w-706 h-689 mt-161 ml-1040 border-1px object-cover rounded-lg"
          />
          
          {/* Badge */}
          <div className="absolute top-10 right-10 bg-blue-500 text-white font-bold py-1 px-3 rounded-full text-sm ">
            50% off
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalHeader;
