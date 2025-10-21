import React from "react";
import Blog1 from "../../assets/blogimage.png";
import Blog2 from "../../assets/holiday.png";
import Blog3 from "../../assets/homedecor.png";

const blogPosts = [
  {
    id: 1,
    category: "Holiday Tableware",
    title: "Setting the Perfect Festive Dining Table",
    description:
      "Discover how handcrafted ceramics and timeless porcelain plates can transform your holiday dining. Learn to create a warm, inviting Christmas table setup.",
    image: Blog1,
  },
  {
    id: 2,
    category: "Home Décor",
    title: "How to Style Your Living Space with Natural Vases",
    description:
      "Bring the calm of nature indoors. Explore how neutral-toned ceramic vases can elevate your room’s warmth and aesthetic effortlessly.",
    image: Blog2,
  },
  {
    id: 3,
    category: "Design Inspiration",
    title: "Minimalist Touch: Art in Everyday Tableware",
    description:
      "From shape to shade, explore how minimalist tableware can blend function with art to create your perfect dining experience.",
    image: Blog3,
  },
];

const OurBlog = () => {
  return (
    <div className="w-full bg-white py-10">
      {/* Section Title */}
      <p className="text-center text-2xl font-semibold tracking-wide mb-10">
        OUR BLOG
      </p>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 md:px-20">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col bg-[#F7F6F5] rounded-md overflow-hidden shadow-sm transition-transform transform hover:scale-101"
          >
            <div className="h-56 md:h-64">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col text-center">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                {post.category}
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {post.description}
              </p>
              <button
                className="mx-auto relative cursor-pointer text-sm font-semibold tracking-wide pb-0.5
                text-gray-800 bg-transparent px-3 py-1
                transition-all duration-300 ease-in-out
                border border-transparent rounded-md
                hover:bg-blue-500 hover:text-white hover:shadow-md hover:scale-105
                group"
              >
                Read More
                <span
                  className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-800
                  transition-opacity duration-300 group-hover:opacity-0"
                ></span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Signup Section */}
      <div className="mt-16 flex flex-col justify-center items-center text-center space-y-6">
        <p className="text-sm text-gray-600 font-medium">Join Our Community</p>
        <h1 className="text-2xl sm:text-2xl font-semibold text-gray-800 tracking-wide uppercase">
          Get the Latest Designs & Style Tips
        </h1>
        <div className="space-y-4 flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-75 border-b border-gray-400 focus:outline-none py-2 text-center placeholder-gray-500"
          />
          <button className="mt-4 px-6 py-2 border cursor-pointer rounded border-gray-800 text-gray-800 font-medium uppercase tracking-wide hover:bg-gray-100 transition">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
