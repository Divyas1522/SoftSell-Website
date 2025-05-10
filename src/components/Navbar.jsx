import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ToggelTheme';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-22 bg-transparent backdrop-blur-md dark:bg-gray-900/50 dark:text-white transition-all ease-in-out duration-300">
      <div className="max-w-8xl h-full mx-auto px-8 flex justify-between items-center">

        {/* Logo */}
        <a href="#" className="flex items-center space-x-1 ">
          <div className=" md:ml-0 ml-[-50px] h-35 w-35 overflow-hidden hover:scale-108 transition-all ease-in-out duration-300">
            <img
              src="/icon-softsell.png"
              alt="SoftSell Icon"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="md:ml-0 ml-[-30px] bg-gradient-to-r from-yellow-500 to-pink-500 hover:scale-108 transition-all ease-in-out duration-300 text-transparent bg-clip-text text-3xl ml-[-10px] font-bold">
            SoftSell
          </span>
        </a>

        {/* Navbar Links */}
        <nav className="hidden md:flex space-x-10">
          {['Home', 'How It Works', 'Why Choose us', 'Contact'].map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
              className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-xl font-medium hover:text-pink-500 dark:bg-gradient-to-r dark:from-yellow-600 dark:to-pink-600 dark:bg-clip-text dark:text-transparent dark:hover:text-pink-400 hover:scale-130 transition-all ease-in-out duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden md:mr-0 ml-30 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded transition-transform duration-300 transform hover:scale-110 focus:outline-none"
          >
            {isOpen ? (
              <X className="text-pink-600" size={28} />
            ) : (
              <Menu className="text-pink-600" size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu with Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-40 flex flex-col items-center justify-start pt-24 bg-blue-100/60 dark:bg-gray-900/80 backdrop-blur-sm">
            <div className="w-full max-w-sm bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-xl rounded-xl p-6 mx-4 space-y-5 transition-all duration-300 ease-in-out">
              {['Home', 'How It Works', 'Why Choose us', 'Contact'].map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                  className="block text-center text-lg font-semibold text-gray-800 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}




        {/* Theme Toggle & Button */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
