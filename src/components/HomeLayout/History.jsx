import React from "react";
import History2 from "../../assets/penimage.png";
import History1 from "../../assets/pot image.png";

const History = () => {
  return (
    <section className="w-full overflow-hidden py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-20 pb-5">
        {/* Left Text Block */}
        <div className="flex flex-col justify-center items-center text-center bg-[#F7F6F5] p-8 h-full md:h-[300px]">
          <h2 className="text-lg font-semibold tracking-wide uppercase mb-2">
            Made in Viet Nam Since 1450
          </h2>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
          <button className="text-xs font-semibold tracking-wide text-gray-800 hover:text-blue-500 transition-all">
            LEARN MORE
          </button>
        </div>

        {/* Right Image */}
        <div className="h-[300px]">
          <img
            src={History2}
            alt="Pottery Work"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Image */}
        <div className="h-[300px]">
          <img
            src={History1}
            alt="Pottery Making"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Text Block */}
        <div className="flex flex-col justify-center items-center text-center bg-[#F7F6F5] p-8 h-full md:h-[300px]">
          <h2 className="text-lg font-semibold tracking-wide uppercase mb-2">
            Our History
          </h2>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
          <button className="text-xs font-semibold tracking-wide text-gray-800 hover:text-blue-500 transition-all">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default History;
