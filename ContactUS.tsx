import React from 'react'
export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 pt-0 pb-4">
      {/* Header Section */}
      <div className="text-left mb-8 bg-[#F6F5FF] w-full h-[286px] ">
        <h1 className="text-4xl font-bold font-sans text-black pt-28 px-40">Contact Us</h1>
        <p className="text-gray-500 mt-2 px-40">Home / Pages / Contact Us</p>
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Information About Us */}
        <div>
          <h2 className="text-4xl font-bold text-[#151875] mb-4">Information About Us</h2>
          <p className="text-[#8A8FB9] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris neque felis, ultrices vel
            facilisis sit amet, molestie id arcu. Lorem ipsum dolor sit amet.
            Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.

          </p>
          <div className="flex space-x-2">
            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            <div className="w-6 h-6 rounded-full bg-pink-500"></div>
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
          </div>
        </div>

        {/* Contact Way */}
     <div>
          <h2 className="text-4xl font-sans font-bold text-[#151875] mb-4">Contact Way</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        <div className="flex items-center">
         <div className="w-[45px] h-[45px] rounded-full bg-purple-500 mr-4"></div>
         <p>Tel: 877-67-88-99 <br />E-Mail: shop@store.com</p>
       </div>
       <div className="flex items-center">
         <div className="w-[45px] h-[45px] rounded-full bg-pink-500 mr-4"></div>
         <p>Support Forum <br />For over 24hr</p>
       </div>
       <div className="flex items-center">
        <div className="w-[45px] h-[45px] rounded-full bg-[#FFB265] mr-4"></div>
        <p>20 Margaret st, London<br />Great Britain, 3NM98-LK</p>
       </div>
       <div className="flex items-center">
        <div className="w-[45px] h-[45px] rounded-full bg-[#1BE982] mr-4"></div>
       <p>Free standard shipping<br />for all orders.</p>
      </div>
  </div>
</div>
      </div>

      {/* Contact Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Form */}
        <div>
          <h2 className="text-4xl font-sans font-bold text-[#151875] mb-4">Get In Touch</h2>
          <p className='text-base text-[#8A8FB9] mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices
              tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-[255px] h-[45px] p-3 mb-4 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-[255px] h-[45px] p-3 mb-4  ml-5 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-[534px] h-[45px] p-3  mb-4 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-[534px] h-[166px] p-3  mb-4 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <br/>
            <button className="bg-pink-500 text-white px-6 py-3 my-4 rounded-lg font-medium hover:bg-pink-600">
              Send Message
            </button>
          </form>
        </div>

        {/* Illustration */}
        <div className="flex justify-center">
          <img src="/g10.png" alt="Contact Illustration" className="w-3/4" />
        </div>
      </div>
    


    </div>
  )
}
