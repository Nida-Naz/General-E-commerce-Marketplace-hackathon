
    import React from 'react'
    
    const topCategories = () => {
      return (
           <div className="flex flex-col gap-10 p-6 items-center">
      {/* Top categ0ries */}
      <div>
        <h2 className="text-4xl leading-10 font-sans font-bold text-center text-[#151875] mb-4">Top Categories</h2>
        <div className="grid grid-cols-4 gap-6 justify-items-center">

          <div className=" w-[269px] h-[345px] p-4 flex flex-col justify-center items-center">
            <div className='bg-[#F6F7FB] h-[269px] w-[269px] rounded-full flex items-center justify-center'>
            <img
              src="./chair15.png"
              alt="Cantilever Chair"
              className="bg-[#F6F7FB] w-[178px] h-[178px] object-cover mb-2"
            />
            </div>
            <h3 className="text-[#151875] text-xl font-normal">Mini LCW Chair</h3>
            <p className="text-[#151875] text-base font-normal">$56.00</p>
            
          </div>

          
          <div className=" w-[269px] h-[345px] p-4 flex flex-col justify-center items-center">
          <div className='bg-[#F6F7FB] h-[269px] w-[269px] rounded-full flex items-center justify-center'>
            <img
              src="./chair.png"
              alt="Cantilever Chair"
              className="bg-[#F6F7FB] rounded-full w-[200px] h-[200px] object-cover mb-2"
            />
          </div>  
            <h3 className="text-[#151875] text-xl font-normal">Mini LCW Chair</h3>
            <p className="text-[#151875] text-base font-normal">$56.00</p>
            
          </div>

          <div className=" w-[269px] h-[345px] p-4 flex flex-col justify-center items-center">
          <div className='bg-[#F6F7FB] h-[269px] w-[269px] rounded-full flex items-center justify-center'>
            <img
              src="./chair9.png"
              alt="Cantilever Chair"
              className="bg-[#F6F7FB] rounded-full w-[178px] h-[178px] object-cover mb-2"
            />
          </div>  
            <h3 className="text-[#151875] text-xl font-normal">Mini LCW Chair</h3>
            <p className="text-[#151875] text-base font-normal">$56.00</p>
            
          </div>

          <div className=" w-[269px] h-[345px] p-4 flex flex-col justify-center items-center">
          <div className='bg-[#F6F7FB] h-[269px] w-[269px] rounded-full flex items-center justify-center'>
            <img
              src="./chair15.png"
              alt="Cantilever Chair"
              className="bg-[#F6F7FB] rounded-full w-[178px] h-[178px] object-cover mb-2"
            />
            </div>
            <h3 className="text-[#151875] text-xl font-normal">Mini LCW Chair</h3>
            <p className="text-[#151875] text-base font-normal">$56.00</p>
            
          </div>
        </div>
      </div> 
      {/* latest update */}
    <div className="relative h-[462px] min-h-[462px] w-[1920px] bg-cover bg-center  " style={{ backgroundImage: "url('/BgImage.png')" }}> 
      <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-[#151875]">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 font-sans">Get Leatest Update By Subscribe<br/>
          0ur Newslater</h1>
          
          <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-lg">
          Shop Now
          </button>
        </div>
      </div>
    </div>

     {/* signaturs */}

     <div>
     <img
              src="./signature.png"
              alt=""
              className=" w-[904px] h-[93px] object-cover mb-2"
            />  
     </div>

     </div>         
         
      )
    }
    
    export default topCategories