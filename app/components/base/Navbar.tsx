import { Link } from "react-router";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


    return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold tracking-wide">THE ONLINE STORE</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to={"/"}>
                <h1 className="font-inter text-gray-700">Home</h1>
            </Link>
             <text className="text-gray-700 hover:text-gray-900">Shop</text>
             <text className="text-gray-700 hover:text-gray-900">About</text>
             <text className="text-gray-700 hover:text-gray-900">Contact</text>
             <text className="text-gray-700 hover:text-gray-900">Blog</text>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700 md:hidden" onClick={() => setIsOpen(!isOpen)}>
              ☰ 
            </button>
            <button className="text-gray-500 hover:text-gray-700 hidden md:inline">
              🔍
            </button>
            <button className="text-gray-500 hover:text-gray-700 hidden md:inline">
              👤
            </button>
            <Link to={"/shoppingCart"} className="text-gray-500 hover:text-gray-700 hidden md:inline">
              🛒
            </Link>
          </div>

        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-1 bg-gray-50 border-t border-gray-200">
            

          <div className="flex space-x-4 mt-2">
            <button className="text-gray-500 hover:text-gray-700">🔍</button>
            <button className="text-gray-500 hover:text-gray-700">👤</button>
            <Link to={"/shoppingCart"} className="text-gray-500 hover:text-gray-700">🛒</Link>
          </div>
        </div>
      )}
    </header>
  );
};
