import React from "react";
import GardenSetImage from "../../assets/gardenset.png";

const GardenSet = () => {
  return (
    <div className="container w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 pb-5">
        {/* Bottom Image */}
        <div className="h-[350px]">
          <img
            src={GardenSetImage}
            alt="Garden Making"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Text Block */}
        <div className="flex flex-col justify-center items-center text-center bg-[#F7F6F5] p-8 h-full md:h-[350px]">
          <h2 className="text-lg font-semibold tracking-wide uppercase mb-2">
            What's in a Garden set?
          </h2>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed max-w-md">
            Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.
            dolor sit amet consectetur adipiscing eli mattis sit phasellus
            mollis sit aliquam sit
          </p>
          <button className="text-xs font-semibold tracking-wide text-gray-800 hover:text-blue-500 transition-all">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default GardenSet;
