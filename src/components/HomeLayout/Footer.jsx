import React from "react";
import { GiFalconMoon } from "react-icons/gi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#3A3845] to-[#1F1E2C] text-white">
      <div className="w-full mx-auto px-6 md:px-10 py-12 grid md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="text-white p-2 rounded-full">
              <GiFalconMoon className="h-9 w-9" />
            </div>
            <h2 className="text-xl font-bold">Moon Ceramics</h2>
          </div>
          <p className="text-sm text-gray-300 mb-6">
            Crafting timeless handmade ceramic pieces with care, creativity, and
            quality for your home.
          </p>
          <button className="border cursor-pointer border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition">
            START SHOPPING →
          </button>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-[#C69B7B] transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-[#C69B7B] transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-[#C69B7B] transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-[#C69B7B] transition">
              <FaPinterestP size={20} />
            </a>
          </div>
        </div>

        {/* Right Section - 4 columns */}
        <div className="md:col-span-3 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-[#C69B7B] cursor-pointer">Our Story</li>
              <li className="hover:text-[#C69B7B] cursor-pointer">Our Team</li>
              <li className="hover:text-[#C69B7B] cursor-pointer">
                Craftsmanship
              </li>
              <li className="hover:text-[#C69B7B] cursor-pointer">
                Sustainability
              </li>
              <li className="hover:text-[#C69B7B] cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-[#C69B7B] cursor-pointer">
                New Arrivals
              </li>
              <li className="hover:text-[#C69B7B] cursor-pointer">
                Best Sellers
              </li>
              <li className="hover:text-[#C69B7B] cursor-pointer">Gift Sets</li>
              <li className="hover:text-[#C69B7B] cursor-pointer">Tableware</li>
              <li className="hover:text-[#C69B7B] cursor-pointer">
                Home Decor
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-[#C69B7B] cursor-pointer">
                Shipping & Delivery
              </li>
              <li className="hover:text-[#C69B7B] cursor-pointer">
                Returns & Exchanges
              </li>
              <li className="hover:text-[#C69B7B] cursor-pointer">FAQs</li>
              <li className="hover:text-[#C69B7B] cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-[#C69B7B] cursor-pointer">
                Brand Guidelines
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="flex flex-col justify-center items-center text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-2">Stay Updated</h2>
            <p className="text-white mb-6">
              Subscribe for latest news, product launches, and exclusive offers.
            </p>

            <form className="flex flex-col justify-center items-center gap-4 max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#C69B7B] text-white rounded-md hover:bg-[#a67b63] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-500 mx-6" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-center items-center text-sm text-gray-400">
        <p className="mb-4 md:mb-0">
          © 2025 Moon Ceramics &nbsp; | &nbsp; All Rights Reserved
        </p>
        <div className="space-x-4">
          <span>|</span>
          <a href="#" className="hover:text-white">
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
