import React from "react";
import History2 from "../../assets/1910.png";
import History1 from "../../assets/1990.png";
import History3 from "../../assets/2010.png";
const AboutMoon = () => {
  return (
    <section className="w-full overflow-hidden py-5">
      <div className="p-5 flex flex-col justify-center items-center gap-3 py-10">
        <h1 className="text-2xl sm:text-2xl font-semibold tracking-wide uppercase">
          ABOUT MOON
        </h1>
        <p className="text-sm text-gray-500 text-center font-medium">
          Moon's handmade ceramic products have been around <br /> since 1650,
          let's explore our journey
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-20 pb-5">
        {/* Left Text Block */}
        <div className="flex flex-col justify-center items-center text-center bg-[#F7F6F5] p-8 h-full md:h-[400px]">
          <p className="text-3xl font-semibold tracking-wide uppercase mb-2">
            1910
          </p>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
          <button className="text-xs font-semibold tracking-wide text-gray-800 hover:text-blue-500 transition-all">
            LEARN MORE
          </button>
        </div>

        {/* Right Image */}
        <div className="h-[400px]">
          <img
            src={History2}
            alt="Pottery Work"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Image */}
        <div className="h-[400px]">
          <img
            src={History1}
            alt="Pottery Making"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Text Block */}
        <div className="flex flex-col justify-center items-center text-center bg-[#F7F6F5] p-8 h-full md:h-[400px]">
          <p className="text-3xl font-semibold tracking-wide uppercase mb-2">
            1990
          </p>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed max-w-md">
            Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.
            dolor sit amet consectetur adipiscing eli mattis sit phasellus
            mollis sit aliquam sit
          </p>
          <button className="text-xs font-semibold tracking-wide text-gray-800 hover:text-blue-500 transition-all">
            LEARN MORE
          </button>
        </div>
        <div className="flex flex-col justify-center items-center text-center bg-[#F7F6F5] p-8 h-full md:h-[400px]">
          <h2 className="text-lg font-semibold tracking-wide uppercase mb-2">
            2010
          </h2>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed max-w-md">
            Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque
            tempus. sit aliquam sit nullam neque ultrices.
          </p>
          <button className="text-xs font-semibold tracking-wide text-gray-800 hover:text-blue-500 transition-all">
            LEARN MORE
          </button>
        </div>

        {/* Right Image */}
        <div className="h-[400px]">
          <img
            src={History3}
            alt="Pottery Work"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMoon;
