import React from 'react'

const TrendingProdCards = () => {
  return (

        <div className="flex flex-col gap-10 p-6 items-center">
      {/* Trending Products */}
      <div>
        <h2 className="text-4xl leading-10 font-sans font-bold text-center text-[#151875] mb-4">Trending Products</h2>
        <div className="grid grid-cols-4 gap-6 justify-items-center">

          <div className="border rounded-md shadow-lg w-[270px] h-[350px] p-4 flex flex-col justify-center items-center">
            <img
              src="./chair9.png"
              alt="Cantilever Chair"
              className="bg-[#F5F6F8] w-full h-[244px] object-cover mb-2"
            />
            <h3 className="text-[#151875] font-semibold">Cantilever Chair</h3>
            <p className="text-[#151875] font-bold">$26.00</p>
            <p className="text-sm text-slate-400">$42.00</p>
          </div>

          <div className="border rounded-md shadow-lg  w-[270px] h-[350px] p-4 flex flex-col justify-center items-center">
            <img
              src="./chair10.png"
              alt="Cantilever Chair"
              className="bg-[#F5F6F8] w-full h-[244px] object-cover mb-2"
            />
            <h3 className="text-[#151875] font-semibold">Cantilever Chair</h3>
            <p className="text-[#151875] font-bold">$26.00</p>
            <p className=" text-slate-400 text-sm">$42.00</p>
          </div>

          <div className="border rounded-md shadow-lg w-[270px] h-[350px] p-4 flex flex-col justify-center items-center">
            <img
              src="./chair11.png"
              alt="Cantilever Chair"
              className="bg-[#F5F6F8] w-full h-[244px] object-cover mb-2"
            />
            <h3 className="text-[#151875] font-semibold">Cantilever Chair</h3>
            <p className="text-[#151875] font-bold">$26.00</p>
            <p className="text-sm text-slate-400">$42.00</p>
          </div>

          <div className="border rounded-md shadow-lg w-[270px] h-[350px] p-4 flex flex-col justify-center items-center">
            <img
              src="./chair8.png"
              alt="Cantilever Chair"
              className="bg-[#F5F6F8] w-full h-[244px] object-cover mb-2"
            />
            <h3 className="text-[#151875] font-semibold">Cantilever Chair</h3>
            <p className="text-[#151875] font-bold">$26.00</p>
            <p className="text-sm text-[#151875]">$42.00</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 justify-items-center">

<div className="border rounded-md shadow-lg w-[420px] h-[270px] p-4 flex flex-col justify-center items-center  ">
  
  <h3 className="text-[#151875] w-[269px] h-[26px] text-2xl text-center font-semibold">23% off in all products</h3>
  <button className='bg-white text-pink-600 underline flex items-start w-[74px] h-[19px] ' >
    Shop Now
    </button>
    <br/>
  <img
    src="./clock.png"
    alt="Cantilever Chair"
    className=" w-[150px] h-[150px] "
  />
</div>
<div className="border rounded-md shadow-lg  w-[420px] h-[270px] p-4 flex flex-col justify-center items-center">
 
<h3 className="text-[#151875] w-[269px] h-[26px] text-2xl text-center font-semibold">23% off in all products</h3>
  <button className='bg-white text-pink-600 underline flex items-start w-[112px] h-[19px] ' >
  View Collection
    </button>
  <img
    src="./drawer.png"
    alt="Cantilever Chair"
    className=" w-[312px] h-[170px] object-cover mb-2"
  />
</div>
<div className='gap-4 justify-items-center'>
<div className="border rounded-md shadow-lg w-[267px] h-[74px] p-4 flex flex-row justify-center items-center">
  <img
    src="./chair12.png"
    alt="Cantilever Chair"
    className="bg-[#F5F6F8] w-[64px] h-[71px] object-cover mb-2"
  />
  <h5 className="text-[#151875] text-base font-semibold">Executive Seat chair <br/>$32.00</h5>
 
</div>
<br/>
<div className="border rounded-md shadow-lg w-[267px] h-[74px] p-4 flex flex-row justify-center items-center">
  <img
    src="./chair13.png"
    alt="Cantilever Chair"
    className="bg-[#F5F6F8] w-[64px] h-[71px]  object-cover mb-2"
  />
  <h5 className="text-[#151875] text-base font-semibold">Executive Seat chair <br/>$32.00</h5>
</div>
<br/>
<div className="border rounded-md shadow-lg w-[267px] h-[74px] p-4 flex flex-row justify-center items-center">
  <img
    src="./chair14.png"
    alt="Cantilever Chair"
    className="bg-[#F5F6F8] w-[64px] h-[71px] object-cover mb-2"
  />
  <h5 className="text-[#151875] text-base font-semibold">Executive Seat chair <br/>$32.00</h5>
</div>
</div>

</div>



      <div/>



    </div>
  )
}

export default TrendingProdCards