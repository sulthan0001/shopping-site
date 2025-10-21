import React from "react";
import TableWare from "../../assets/tableware.png";
import HomeDecors from "../../assets/homedecor.png";
import Holiday from "../../assets/holiday.png";
import Collection from "../../assets/collection.png";
import ChristmasPlates from "../../assets/blogimage.png";

const Cards = () => {
  return (
    <div className="w-full bg-white py-10">
      {/* ====== Top 4 Cards ====== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 md:px-20 mb-16">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center ">
          <img
            src={TableWare}
            alt="Tableware"
            className="w-full h-56 rounded object-cover mb-3 transition-transform transform hover:scale-105 cursor-pointer"
          />
          <h3 className="text-sm font-semibold tracking-wide text-gray-800 uppercase">
            TABLEWARE
          </h3>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={HomeDecors}
            alt="Home Decor"
            className="w-full h-56 rounded object-cover mb-3 transition-transform transform hover:scale-105 cursor-pointer"
          />
          <h3 className="text-sm font-semibold tracking-wide text-gray-800 uppercase">
            HOME DECOR
          </h3>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={Holiday}
            alt="Holiday"
            className="w-full h-56 rounded object-cover mb-3 transition-transform transform hover:scale-105 cursor-pointer"
          />
          <h3 className="text-sm font-semibold tracking-wide text-gray-800 uppercase">
            HOLIDAY
          </h3>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={Collection}
            alt="Collection"
            className="w-full h-56 rounded object-cover mb-3 transition-transform transform hover:scale-105 cursor-pointer"
          />
          <h3 className="text-sm font-semibold tracking-wide text-gray-800 uppercase">
            COLLECTION
          </h3>
        </div>
      </div>

      {/* ====== Bottom Offer Section ====== */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 md:px-20">
        {/* Left Text Box */}
        <div className="bg-gray-200 flex flex-col justify-center h-[300px] md:h-[350px] p-10 md:p-16 text-center">
          <p className="text-2xl font-bold text-gray-800 mb-4">
            UP TO 40% OFF OUR <br /> CHRISTMAS COLLECTION
          </p>
          <p className="text-gray-500 text-base mb-6 leading-relaxed">
            Timeless craftsmanship meets festive elegance. Elevate your dining
            experience this Christmas.
          </p>
          <button
            className="mx-auto relative text-sm font-semibold tracking-wide pb-0.5
            text-gray-800 bg-transparent px-3 py-1
            transition-all duration-300 ease-in-out
            border border-transparent rounded-md
            hover:bg-blue-500 hover:text-white hover:shadow-md hover:scale-105
            group cursor-pointer"
          >
            Shop Now
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
    </div>
  );
};

export default Cards;
