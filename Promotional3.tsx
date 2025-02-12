import React from 'react'

// const Promotional3 = () => {
//   return (
//     <div>   
//       {/* Text Section */}
//       <div className= "flex  flex-col justify-center items-center ">
//         {/* Title */}
//         <h1 className="text-5xl justify-center font-bold font-sans text-[#151875] gap-10 mx-[200px] ">Discount Item</h1>
      
//         {/* Navigation Links */}
//         <nav className="text-sm text-pink-500 flex space-x-3 gap-10 mx-[180px] pt-3">
//           <a href="#" className="hover:underline">Wood Chair</a>
//           <a href="#" className="hover:underline">Plastic Chair</a>
//           <a href="#" className="hover:underline">Sofa Collection</a>
//         </nav>
//         </div>
//         <div className="relative  flex justify-center items-center mt-[100px] md:mt-0"> 
//         {/* Discount Offer */}
//         <div className="mt-[80px] mx-[450px]">
//           <h2 className="text-xl md:text-4xl font-bold text-sans text-[#151875]">
//             20% Discount Of All Products
//           </h2>
//           <p className="text-xl font-semibold text-pink-500 pt-2">Eams Sofa Compact</p>
//           <p className="text-[#B7BACB] text-base">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ex eget
//             feugiat habitasse nec, bibendum condimentum.
//           </p>
//           <ul className="list-disc list-inside text-[#B7BACB] text-base">
//             <li>Material expose like metals</li>
//             <li>Clear lines and geometric figures</li>
//             <li>Simple neutral colours</li>
//           </ul>
//            {/* Button */}
//         <button className="mx-6 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600">
//           Shop Now
//         </button>
      
//         </div>

//        {/* Image Section */}
      
//         <div className=" mt-[30px] mr-[550px] w-96 h-96 bg-pink-100 rounded-full flex items-center justify-center">
//           <img
//             src="/sofa2.png"
//             alt="Sofa"
//             className="w-96 h-96 "
//           />
//         </div>
//      </div>

//     </div>

  
//   )
// }

// export default Promotional3
const Promotional3 = () => {
  return (
    <div className="flex flex-col gap-10 p-6  items-center">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-center text-center space-y-6">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-[#151875]">
          Discount Item
        </h1>

        {/* Navigation Links */}
        <nav className="text-sm sm:text-base text-pink-500 flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:underline">Wood Chair</a>
          <a href="#" className="hover:underline">Plastic Chair</a>
          <a href="#" className="hover:underline">Sofa Collection</a>
        </nav>
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center  mt-10 space-y-10 md:space-y-0 md:space-x-6 px-5">
        {/* Discount Offer */}
        <div className="text-center md:text-left space-y-4 md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151875]">
            20% Discount Of All Products
          </h2>
          <p className="text-lg text-pink-500">Eams Sofa Compact</p>
          <p className="text-[#B7BACB] text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ex eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="list-disc list-inside text-[#B7BACB] text-base space-y-1">
            <li>Material expose like metals</li>
            <li>Clear lines and geometric figures</li>
            <li>Simple neutral colours</li>
          </ul>
          {/* Button */}
          <button className="px-6 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-pink-100 rounded-full flex items-center justify-center">
          <img
            src="/sofa2.png"
            alt="Sofa"
            className="w-60 sm:w-72 md:w-96 h-60 sm:h-72 md:h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Promotional3;
