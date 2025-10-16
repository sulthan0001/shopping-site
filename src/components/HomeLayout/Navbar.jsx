import { useState, useRef, useEffect } from "react";
import { Search, User, Heart, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const navLinks = ["Home", "Shop", "About", "Contact"];
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const searchRef = useRef(null);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-6 px-15">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            alt="Logo"
            className="h-8 w-8"
          />
          <span className="text-xl font-semibold tracking-wide">MOON.</span>
        </div>

        {/* Center Navigation */}
        <ul className="hidden md:flex items-center gap-4 space-x-10">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                onClick={() => setActiveLink(link)}
                className={`text-sm font-medium transition-colors ${
                  activeLink === link
                    ? "text-black border-b-2 border-indigo-600 pb-1 px-2"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-3 space-x-4 relative">
          {/* Search Section */}
          <div
            ref={searchRef}
            className="relative flex items-center transition-all duration-300 ease-in-out"
          >
            {!searchOpen && (
              <button
                onClick={() => setSearchOpen(true)}
                className="cursor-pointer text-gray-700 hover:text-gray-900"
              >
                <Search size={20} />
              </button>
            )}

            {searchOpen && (
              <div className="absolute right-0 flex items-center border border-gray-300 bg-white rounded-full px-2 w-48 h-8 shadow transition-all duration-300 ease-in-out">
                <Search size={18} className="text-gray-600" />
                <input
                  type="text"
                  placeholder="Search..."
                  autoFocus
                  className="ml-2 w-full text-sm bg-transparent outline-none text-gray-700"
                />
              </div>
            )}
          </div>

          {/* Other Icons */}
          <button className="text-gray-700 hover:text-gray-900">
            <User size={20} />
          </button>
          <button className="text-gray-700 hover:text-gray-900">
            <Heart size={20} />
          </button>
          <button className="text-gray-700 hover:text-gray-900">
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Optional if needed) */}
      <div className="md:hidden flex justify-center border-t border-gray-100 py-3">
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
