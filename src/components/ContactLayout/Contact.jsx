import React from "react";
import image from "../../assets/contactimage.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Contact = () => {
  return (
    <div
      className="relative w-full h-[90vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${image})`, height: "75vh" }}
    >
      {/* Overlay background (optional: dark tint for readability) */}
      {/* <div className="absolute inset-0 bg-black/15"></div> */}

      {/* Left text section */}
      <div className="relative bg-[#3A3845] gap-3 z-10 h-[75vh] flex flex-col justify-center items-center w-full md:w-1/3 lg:w-2/7 ml-10 md:ml-40 text-white space-y-6">
        {/* Icon */}
        <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold">◎</span>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold tracking-wider leading-snug ">
            CONTACT US
          </h1>
          <hr className="text-white w-60 mt-5" />
          <p className="text-sm mt-5">Follow us on social media</p>
        </div>
        <div className="flex flex-row gap-5">
          <div className=" bg-[#C69B7B] text-center p-2 rounded cursor-pointer">
            <FaFacebookF />
          </div>
          <div className=" bg-[#C69B7B] text-center p-2 rounded cursor-pointer">
            <FaTwitter />
          </div>
          <div className=" bg-[#C69B7B] text-center p-2 rounded cursor-pointer">
            <RiInstagramFill />
          </div>
          <div className=" bg-[#C69B7B] text-center p-2 rounded cursor-pointer">
            <FaLinkedinIn />
          </div>
          <div className=" bg-[#C69B7B] text-center p-2 rounded cursor-pointer">
            <IoLogoYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
