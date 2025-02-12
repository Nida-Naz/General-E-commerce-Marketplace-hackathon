// import React from 'react'

// // components/LatestBlog.js
// export default function LatestBlogs() {
//     const blogs = [
//       {
//         id: 1,
//         image: '/blog1.png', // Replace with your actual image paths
//         author: 'SaberAli',
//         date: '21 August 2020',
//         title: 'Top essential Trends in 2021',
//         description: 'More of this less hello salamander lied much over tightly circa horse taped mightily.',
//       },
//       {
//         id: 2,
//         image: '/blog2.png',
//         author: 'Surfauxion',
//         date: '21 August 2020',
//         title: 'Top essential trends in 2021',
//         description: 'More of this less hello salamander lied much over tightly circa horse taped mightily.',
//       },
//       {
//         id: 3,
//         image: '/blog3.png',
//         author: 'SaberAli',
//         date: '21 August 2020',
//         title: 'Top essential Trends in 2021',
//         description: 'More of this less hello salamander lied much over tightly circa horse taped mightily.',
//       },
//     ];
  
//     return (
//       <div className="container mx-auto px-4 py-12">
//         <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Latest Blog</h2>
//         <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {blogs.map((blog) => (
//             <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
//               <div className="p-6">
//                 <div className="text-sm text-gray-600 mb-2">
//                   <span className="text-red-500">✎ {blog.author}</span> | {blog.date}
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-3">{blog.title}</h3>
//                 <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
//                 <a href="#" className="text-blue-500 font-medium hover:underline">
//                   Read More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  // components/LatestBlog.js
function LatestBlogs() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold font-sans text-center text-[#151875] mb-8">Latest Blog</h2>
      <div className="grid gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Blog Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[370px] h-[490px] ">
          <img src="/blog1.png" alt="Blog 1" className="w-full h-[255px] object-cover" />
          <div className="p-4">
            <p className="text-sm text-[#151875] mb-4">✎ SaberAli | 21 August 2020</p>
            <h3 className="text-lg font-semibold text-[#151875] mb-4">Top essential Trends in 2021</h3>
            <p className="text-base text-[#72718F] mb-4">More off this less hello samlande lied much
            over tightly circa horse taped mightly</p>
            <a href="#" className="text-[#151875] font-medium underline">Read More</a>
          </div>
        </div>
        {/* Blog Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden  w-[370px] h-[490px]">
          <img src="/blog2.png" alt="Blog 2" className="w-full h-[255px] object-cover" />
          <div className="p-4">
            <p className="text-sm text-[#151875] mb-4">✎ Surfauxion | 21 August 2020</p>
            <h3 className="text-lg font-semibold text-pink-600 mb-4">Top essential trends in 2021</h3>
            <p className="text-base text-[#72718F] mb-4">More off this less hello samlande lied much
            over tightly circa horse taped mightly</p>
            <a href="#" className="text-pink-500 font-medium underline">Read More</a>
          </div>
        </div>
        {/* Blog Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden  w-[370px] h-[490px]">
          <img src="/blog3.png" alt="Blog 3" className="w-full h-[255px] object-cover" />
          <div className="p-4">
            <p className="text-sm text-[#151875] mb-4">✎ SaberAli | 21 August 2020</p>
            <h3 className="text-lg font-semibold text-[#151875] mb-4">Top essential Trends in 2021</h3>
            <p className="text-base text-[#72718F] mb-4">More off this less hello samlande lied much
            over tightly circa horse taped mightly</p>
            <a href="#" className="text-[#151875] font-medium underline">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestBlogs;
