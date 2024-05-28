import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Compass, Star, X } from "lucide-react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isHobbiesOpen, setIsHobbiesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        className="text-gray-600 hover:text-gray-800"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50">
          <div className="p-4">
            <button
              className="text-gray-600 hover:text-gray-800 block mb-4"
              onClick={closeMenu}
            >
              <X />
            </button>
            <Link to="/sign-in">
              <button className="text-[#8064a2] text-lg w-full h-10 border rounded-md hover:text-gray-800" onClick={closeMenu}>
                Sign In
              </button>
            </Link>

            {/* Explore dropdown */}
            <div className="relative">
              <button
                className="text-gray-600 hover:text-gray-800 w-full flex justify-between items-center pl-4 pr-2"
                onClick={() => setIsExploreOpen(!isExploreOpen)}
              >
                <Compass />
                Explore
                <FaChevronDown
                  className={`ml-1 ${
                    isExploreOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {isExploreOpen && (
                <ul className="bg-white shadow-md rounded mt-1 py-2 w-full">
                  <li>
                    <Link
                      to="/explore/option1"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Option 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/explore/option2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Option 2
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Hobbies dropdown */}
            <div className="relative mt-4">
              <button
                className="text-gray-600 hover:text-gray-800 w-full flex justify-between items-center pl-4 pr-2"
                onClick={() => setIsHobbiesOpen(!isHobbiesOpen)}
              >
                <Star />
                Hobbies
                <FaChevronDown
                  className={`ml-1 ${
                    isHobbiesOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {isHobbiesOpen && (
                <ul className="bg-white shadow-md rounded mt-1 py-2 w-full">
                  <li>
                    <Link
                      to="/hobbies/option1"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Option 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/hobbies/option2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Option 2
                    </Link>
                  </li>
                  {/* Add more options as needed */}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
