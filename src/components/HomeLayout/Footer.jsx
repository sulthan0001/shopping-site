import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#3A3845] text-white">
      <div className="w-full mx-auto px-10 py-12 grid md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-white text-black p-2 rounded-full">
              {/* Replace with your actual logo */}
              <span className="font-bold">🌕</span>
            </div>
            <h2 className="text-xl font-bold">Moon.</h2>
          </div>
          <p className="text-sm text-gray-300 mb-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            mauris sed ma
          </p>
          <button className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition">
            GET STARTED →
          </button>
        </div>

        {/* Right Section - 4 columns */}
        <div className="md:col-span-3 grid sm:grid-cols-2 md:grid-cols-4 gap-1">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Our Story</li>
              <li>Our Team</li>
              <li>Craftsmanship</li>
              <li>Sustainability</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>Gift Sets</li>
              <li>Tableware</li>
              <li>Home Decor</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Shipping & Delivery</li>
              <li>Returns & Exchanges</li>
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>Branding design</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold mb-2">
              Be the first to know
            </h2>
            <p className="text-white mb-6">For news, collections & more!</p>

            <form className="flex flex-col justify-center items-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
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
          © 2025 Moon &nbsp; |&nbsp; &nbsp; All Rights Reserved &nbsp; &nbsp;
        </p>
        <div className="space-x-4">
          <span>|</span>
          <a href="#" className="hover:text-white">
            Terms and Conditions
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
