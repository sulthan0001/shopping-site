import React from "react";
import ChristmasPlates from "../../assets/blogimage.png";

const OurBlog = () => {
  return (
    <div className="w-full bg-white py-10">
      <p className="text-center text-2xl font-semibold tracking-wide mb-6">
        OUR BLOG
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 md:px-20 pb-10">
        {/* Left Text Box */}
        <div className="bg-[#F7F6F5] flex flex-col justify-center h-[300px] md:h-[350px] p-10 md:p-16 text-center">
          <p className="text-xl text-gray-500">Tableware</p>
          <p className="text-3xl font-bold text-gray-800 mb-4">
            The secrets to a <br /> kitchen room
          </p>
          <p className="text-gray-500 text-base mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
          <button
            className="mx-auto relative text-sm font-semibold tracking-wide pb-0.5
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

        {/* Right Image */}
        <div className="h-[300px] md:h-[350px]">
          <img
            src={ChristmasPlates}
            alt="Christmas Collection"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center text-cewnter space-y-6">
        <p className="text-sm text-gray-600 font-medium">
          Sign up for shopping
        </p>
        <h1 className="text-2xl sm:text-2xl font-semibold text-gray-800 tracking-wide uppercase">
          For News, Collections & More
        </h1>
        <div className="space-y-4 flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-75 border-b border-gray-400 focus:outline-none py-2 text-center placeholder-gray-500"
          />
          <button className="mt-4 px-6 py-2 border rounded border-gray-800 text-gray-800 font-medium uppercase tracking-wide hover:bg-gray-100 transition">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
