import React from 'react'

const ShopGridDefault = () => {
  return (
<div className="container mx-auto px-4 pt-0 pb-4">
      {/* Header Section */}
      <div className="text-left mb-8 bg-[#F6F5FF] w-full h-[286px] ">
      <h1 className="text-4xl font-bold font-sans text-[#151875] pt-28 px-40">Shop Grid Default</h1>
      <p className="text-[#8A8FB9]   mt-2 px-40">Home / Pages / Shop Grid Default</p>
      </div>
      {/* Main Content */}
      <main className="container mx-auto py-8">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Ecommerce Accessories & Fashion Items</h2>
        <div className="flex justify-between items-center mb-6">
          <p className='text-xs text-[#8A8FB9] '>About 9,620 results (0.62 seconds)</p>
          <div className="flex space-x-4">
            <div>
              <label htmlFor="perPage" className="text-sm text-[#3F509E]">Per Page:</label>
              <input type="text" id="perPage" className="ml-2 border rounded-md p-1" />
            </div>
            <div>
              <label htmlFor="sortBy" className="text-sm text-[#3F509E] ">Sort By:</label>
              <select id="sortBy" className="ml-2 border rounded-md p-1 text-slate-300 ">
                <option>Best Match</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div>
              <label htmlFor="view" className="text-sm text-[#3F509E]">View:</label>
              <input type="text" id="view" className="ml-2 border rounded-md p-1" />
            </div>
          </div>
        </div>
      </main>
      
      
   <div className="grid grid-cols-4 gap-6 justify-items-center">
     {/* product Grid row 1 */}
    <div className=" w-[270px] h-[363px] p-4 flex flex-col justify-center items-center">
      <div className='bg-[#F6F7FB] h-[270px] w-[280px] rounded-md flex items-center justify-center'>
        <img
         src="./chair16.png"
         alt="Cantilever Chair"
         className="bg-[#F6F7FB] w-[178px] h-[178px] object-cover mb-2"
        />
     </div>
      <h3 className="text-[#151875] text-xl font-normal">Vel elit euismod</h3>
      <p className="text-[#151875] text-base font-normal">$26.00   $42.00</p>
    </div>


    <div className="  w-[270px] h-[363px] p-4 flex flex-col justify-center items-center">
      <div className='bg-[#F6F7FB] h-[270px] w-[280px] rounded-md  flex items-center justify-center'>
       <img
        src="./sofa3.png"
        alt="Cantilever Chair"
        className="bg-[#F6F7FB] rounded-full w-[200px] h-[200px] object-cover mb-2"
        />
      </div>  
       <h3 className="text-[#151875] text-xl font-normal">Ultricies condimentum imperdiet</h3>
       <p className="text-[#151875] text-base font-normal">$26.00   $42.00</p>
    </div>

    <div className=" w-[270px] h-[363px] p-4 flex flex-col justify-center items-center">
       <div className='bg-[#F6F7FB] h-[270px] w-[280px] rounded-md  flex items-center justify-center'>
       <img
       src="./chair17.png"
       alt="Cantilever Chair"
       className="bg-[#F6F7FB] rounded-full w-[178px] h-[178px] object-cover mb-2"
       />
     </div>
     <h3 className="text-[#151875] text-xl font-normal">Vitae suspendisse sed</h3>
     <p className="text-[#151875] text-base font-normal">$26.00   $42.00</p>
    </div>

    <div className="  w-[270px] h-[363px] p-4 flex flex-col justify-center items-center">
      <div className='bg-[#F6F7FB] h-[270px] w-[280px] rounded-md  flex items-center justify-center'>
      <img
      src="./bag1.png"
      alt="Cantilever Chair"
      className="bg-[#F6F7FB] rounded-full w-[178px] h-[178px] object-cover mb-2"
      />
     </div>
     <h3 className="text-[#151875] text-xl font-normal">Sed at fermentum</h3>
     <p className="text-[#151875] text-base font-normal">$26.00   $42.00</p>
    </div>
      {/* product Grid row 2 */}
      <div className=" w-[270px] h-[363px] p-4 flex flex-col justify-center items-center">
      <div className='bg-[#F6F7FB] h-[270px] w-[280px] rounded-md flex items-center justify-center'>
        <img
         src="./watch1.png"
         alt="Cantilever Chair"
         className="bg-[#F6F7FB] w-[178px] h-[178px] object-cover mb-2"
        />
     </div>
      <h3 className="text-[#151875] text-xl font-normal">Fusce pellentesque at</h3>
      <p className="text-[#151875] text-base font-normal">$26.00   $42.00</p>
    </div>

    <div className=" w-[270px] h-[363px] p-4 flex flex-col justify-center items-center">
      <div className='bg-[#F6F7FB] h-[270px] w-[280px] rounded-md flex items-center justify-center'>
        <img
         src="./watch2.png"
         alt="Cantilever Chair"
         className="bg-[#F6F7FB] w-[178px] h-[178px] object-cover mb-2"
        />
     </div>
      <h3 className="text-[#151875] text-xl font-normal">Vestibulum magna laoreet</h3>
      <p className="text-[#151875] text-base font-normal">$26.00   $42.00</p>
    </div>

    <div className=" w-[270px] h-[363px] p-4 flex flex-col justify-center items-center">
      <div className='bg-[#F6F7FB] h-[270px] w-[280px] rounded-md flex items-center justify-center'>
        <img
         src="./headphone1.png"
         alt="Cantilever Chair"
         className="bg-[#F6F7FB] w-[178px] h-[178px] object-cover mb-2"
        />
     </div>
      <h3 className="text-[#151875] text-xl font-normal">Sollicitudin amet orci</h3>
      <p className="text-[#151875] text-base font-normal">$26.00   $42.00</p>
    </div>
     
    <div className=" w-[270px] h-[363px] p-4 flex flex-col justify-center items-center">
      <div className='bg-[#F6F7FB] h-[270px] w-[280px] rounded-md flex items-center justify-center'>
        <img
         src="./sofa4.png"
         alt="Cantilever Chair"
         className="bg-[#F6F7FB] w-[178px] h-[178px] object-cover mb-2"
        />
     </div>
      <h3 className="text-[#151875] text-xl font-normal">Ultrices mauris sit</h3>
      <p className="text-[#151875] text-base font-normal">$26.00   $42.00</p>
    </div>
    {/* product Grid row 3 */}
    <div className=" w-[270px] h-[363px] p-4 flex flex-col justify-center items-center">
      <div className='bg-[#F6F7FB] h-[270px] w-[280px] rounded-md flex items-center justify-center'>
        <img
         src="./watch3.png"
         alt="Cantilever Chair"
         className="bg-[#F6F7FB] w-[178px] h-[178px] object-cover mb-2"
        />
     </div>
      <h3 className="text-[#151875] text-xl font-normal">Pellentesque condimentum ac</h3>
      <p className="text-[#151875] text-base font-normal">$26.00   $42.00</p>
    </div>


    <div className=" w-[270px] h-[363px] p-4 flex flex-col justify-center items-center">
      <div className='bg-[#F6F7FB] h-[270px] w-[280px] rounded-md flex items-center justify-center'>
        <img
         src="./camera1.png"
         alt="Cantilever Chair"
         className="bg-[#F6F7FB] w-[178px] h-[178px] object-cover mb-2"
        />
     </div>
      <h3 className="text-[#151875] text-xl font-normal">Cras scelerisque velit</h3>
      <p className="text-[#151875] text-base font-normal">$26.00   $42.00</p>
    </div>


    <div className=" w-[270px] h-[363px] p-4 flex flex-col justify-center items-center">
      <div className='bg-[#F6F7FB] h-[270px] w-[280px] rounded-md flex items-center justify-center'>
        <img
         src="./headphone2.png"
         alt="Cantilever Chair"
         className="bg-[#F6F7FB] w-[178px] h-[178px] object-cover mb-2"
        />
     </div>
      <h3 className="text-[#151875] text-xl font-normal">Lectus vulputate faucibus</h3>
      <p className="text-[#151875] text-base font-normal">$26.00   $42.00</p>
    </div>

    <div className=" w-[270px] h-[363px] p-4 flex flex-col justify-center items-center">
      <div className='bg-[#F6F7FB] h-[270px] w-[280px] rounded-md flex items-center justify-center'>
        <img
         src="./bag2.png"
         alt="Cantilever Chair"
         className="bg-[#F6F7FB] w-[178px] h-[178px] object-cover mb-2"
        />
     </div>
      <h3 className="text-[#151875] text-xl font-normal">Purus risus, ut</h3>
      <p className="text-[#151875] text-base font-normal">$26.00   $42.00</p>
    </div>
  </div>
  <div className='items-center justify-center px-40 py-6'> 
    <img
    src="./signature.png"
    alt=""
    className='w-[904px] h-[93px] object-cover mb-2'
    />
  </div>


</div>   

  )
}

export default ShopGridDefault