import React from "react";
import image from "../../assets/homepageImage.png";
import { GiFalconMoon } from "react-icons/gi";

const Home = () => {
  return (
    <div
      className="relative w-full h-[90vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay background (optional: dark tint for readability) */}
      <div className="absolute inset-0 bg-black/15"></div>

      {/* Left text section */}
      <div className="relative bg-[#826F66] gap-3 z-10 h-[90vh] flex flex-col justify-center items-center w-full md:w-1/3 lg:w-2/7 ml-10 md:ml-40 text-white space-y-6">
        {/* Icon */}
        <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
          <GiFalconMoon className="w-8 h-8" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm uppercase tracking-wide">
            Handcrafted in VietNam since 1650
          </p>
          <h1 className="text-4xl font-bold tracking-wider leading-snug mt-2">
            BAT TRANG <br /> DINNER SET
          </h1>
        </div>

        {/* Button */}
        <button className="bg-white w-50 cursor-pointer rounded text-[#8d7b6f] px-6 py-2 font-semibold hover:bg-gray-100 transition">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Home;
