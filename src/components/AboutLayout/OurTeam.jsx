import React from "react";
import Founder from "../../assets/founder.png";
import Director from "../../assets/director.png";
import Artist from "../../assets/artist.png";
import Marketing from "../../assets/marketing.png";

const OurTeam = () => {
  return (
    <div className="w-full bg-white py-10">
      <p className="text-center text-2xl font-semibold tracking-wide mb-6">
        MEET OUR TEAM
      </p>
      {/* ====== Top 4 Cards ====== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 md:px-20 mb-16">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center ">
          <img
            src={Founder}
            alt="Tableware"
            className="w-full h-80 rounded object-cover mb-3 transition-transform transform hover:scale-105 cursor-pointer"
          />
          <h3 className="text-sm font-semibold tracking-wide text-gray-800 uppercase">
            Bernie PATTERSON
          </h3>
          <p className="text-sm text-gray-400">CEO & Founder</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={Director}
            alt="Home Decor"
            className="w-full h-80 rounded object-cover mb-3 transition-transform transform hover:scale-105 cursor-pointer"
          />
          <h3 className="text-sm font-semibold tracking-wide text-gray-800 uppercase">
            Ophelia Vase
          </h3>
          <p className="text-sm text-gray-400">Creative Director</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={Artist}
            alt="Holiday"
            className="w-full h-80 rounded object-cover mb-3 transition-transform transform hover:scale-105 cursor-pointer"
          />
          <h3 className="text-sm font-semibold tracking-wide text-gray-800 uppercase">
            CorbiN HOSSAIN
          </h3>
          <p className="text-sm text-gray-400">Artist</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={Marketing}
            alt="Collection"
            className="w-full h-80 rounded object-cover mb-3 transition-transform transform hover:scale-105 cursor-pointer"
          />
          <h3 className="text-sm font-semibold tracking-wide text-gray-800 uppercase">
            Seren Bowl
          </h3>
          <p className="text-sm text-gray-400">Marketing</p>
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

export default OurTeam;
