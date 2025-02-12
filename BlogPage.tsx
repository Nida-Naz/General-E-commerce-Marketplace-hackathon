import React from 'react'
import Image from "next/image";
const BlogPage = () => {
  return (
  <div>
    <div className="container mx-auto px-4 pt-0 pb-4 w-full">
      {/* Header Section */}
      <div className="text-left mb-8 bg-[#F6F5FF] w-full h-[286px] ">
      <h1 className="text-4xl font-bold font-sans text-[#151875] pt-28 px-40">Blog Page</h1>
      <p className="text-[#8A8FB9]   mt-2 px-40">Home / Pages / Blog Page</p>
      </div>
    </div>

    <div className="bg-gray-50 py-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/blog4.png"
              alt="Blog 1"
              width={870}
              height={453}
              className=" object-cover"
            />
            <div className="p-6">
              <p className="text-sm font-semibold text-blue-950">Jan 12, 2025 | Lifestyle</p>
              <h2 className="text-3xl font-bold font-sans text-blue-950 mt-2">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-slate-400 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.
                 Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
              </p>
              <a
                href="#"
                className="text-blue-950 text-lg font-semibold hover:underline mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/blog5.png"
              alt="Blog 2"
              width={1200}
              height={600}
              className="w-[870px] h-[453px] object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500">Jan 10, 2025 | Travel</p>
              <h2 className="text-2xl font-semibold text-gray-800 mt-2">
                Aenean vitae in aliquam ultrices lectus. Etiam.
              </h2>
              <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                facilisis feugiat augue non consectetur...
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/blog6.png"
              alt="Blog 3"
              width={1200}
              height={600}
              className="w-[870px] h-[453px] object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500">Jan 8, 2025 | Fashion</p>
              <h2 className="text-2xl font-semibold text-gray-800 mt-2">
                Sit nam congue feugiat nisl, mauris amet nisl.
              </h2>
              <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                facilisis feugiat augue non consectetur...
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Search */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Search</h3>
            <input
              type="text"
              placeholder="Search..."
              className="w-full mt-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Categories */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Lifestyle
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Travel
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Fashion
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Technology
                </a>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-[#151875]">Recent Posts</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center space-x-4">
                <Image
                  src="/blogimage7.png"
                  alt="Recent Post 1"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  How to Travel the World on a Budget
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/blogimage8.png"
                  alt="Recent Post 2"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  10 Tips for a Healthy Lifestyle
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/blogimage9.png"
                  alt="Recent Post 2"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  10 Tips for a Healthy Lifestyle
                </a>
              </li>

              <li className="flex items-center space-x-4">
                <Image
                  src="/blogimage10.png"
                  alt="Recent Post 2"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  10 Tips for a Healthy Lifestyle
                </a>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Follow</h3>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full"
              >
              F
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-blue-400 text-white rounded-full"
              >
                T
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-pink-500 text-white rounded-full"
              >
                I
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className='items-center justify-center ml-80 py-6'> 
    <img
    src="./signature.png"
    alt=""
    className='w-[904px] h-[93px] object-cover mb-2'
    />
    </div>


   </div> 
  )
}

export default BlogPage