import React, { useState } from "react";
import {
  ShoppingBag,
  Home,
  Package,
  LayoutGrid,
  Tag,
  Search,
  Heart,
  User,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top row with logo and search */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <ShoppingBag size={40} className="text-gray-900 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">Shop</h1>
          </div>

          <div className="hidden md:block flex-1 max-w-xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Cart and Account - always visible */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="flex flex-col items-center text-gray-700 hover:text-gray-900"
            >
              <User size={22} />
              <span className="text-xs mt-1">Account</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center text-gray-700 hover:text-gray-900 relative"
            >
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
              <span className="text-xs mt-1">Cart</span>
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Bottom row with navigation */}
        <nav className={`${isMobileMenuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row md:justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <li>
              <a
                href="#"
                className="flex flex-row md:flex-col items-center text-gray-700 hover:text-gray-900"
              >
                <Home size={20} className="mr-2 md:mr-0" />
                <span className="text-sm md:text-xs md:mt-1">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row md:flex-col items-center text-gray-700 hover:text-gray-900"
              >
                <Package size={20} className="mr-2 md:mr-0" />
                <span className="text-sm md:text-xs md:mt-1">Products</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row md:flex-col items-center text-gray-700 hover:text-gray-900"
              >
                <LayoutGrid size={20} className="mr-2 md:mr-0" />
                <span className="text-sm md:text-xs md:mt-1">Categories</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row md:flex-col items-center text-gray-700 hover:text-gray-900"
              >
                <Tag size={20} className="mr-2 md:mr-0" />
                <span className="text-sm md:text-xs md:mt-1">Deals</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row md:flex-col items-center text-gray-700 hover:text-gray-900"
              >
                <Heart size={20} className="mr-2 md:mr-0" />
                <span className="text-sm md:text-xs md:mt-1">Wishlist</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
