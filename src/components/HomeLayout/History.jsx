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
            Handcrafted in Vietnam Since 1650
          </h2>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed max-w-md">
            For over three centuries, the artisans of Bat Trang have shaped clay
            into timeless creations. Each piece is hand-thrown, painted, and
            glazed with care — preserving a tradition passed down through
            generations.
          </p>
          <button className="text-xs font-semibold tracking-wide text-gray-800 hover:text-blue-500 transition-all">
            LEARN MORE
          </button>
        </div>

        {/* Right Image */}
        <div className="h-[300px]">
          <img
            src={History2}
            alt="Vietnamese Artisan Crafting Pottery"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Image */}
        <div className="h-[300px]">
          <img
            src={History1}
            alt="Traditional Pottery Studio"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Text Block */}
        <div className="flex flex-col justify-center items-center text-center bg-[#F7F6F5] p-8 h-full md:h-[300px]">
          <h2 className="text-lg font-semibold tracking-wide uppercase mb-2">
            Our Heritage of Craft
          </h2>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed max-w-md">
            Every bowl, vase, and dinner plate tells a story of patience and
            artistry. Inspired by nature and tradition, our craftsmen blend
            modern design with age-old techniques to create pieces that endure.
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
