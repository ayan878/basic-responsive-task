import React, { useState } from "react";
import {
  Bell,
  Bookmark,
  ChevronDown,
  Compass,
  Search,
  ShoppingCart,
  Star,
  X,
} from "lucide-react";
import smallLogo from "../assets/SmallLogo.jpg";
import Logo from "../assets/Logo.png";

import Searchbar from "./Searchbar";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const handleSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };

  return (
    <>
      {isOpenSearch ? (
        <div className="w-full border justify-center shadow-md p-4 bg-slate-100  ">
          
          <X
            className="cursor-pointer items-end text-gray-500 hover:text-gray-700"
            onClick={handleSearch}
          />
          <Searchbar />
        </div>
      ) : (
        <header className="bg-white flex items-center border-b shadow-md px-4 py-2 h-20 justify-between">
          {/* Mobile View: Logo, Searchbar, Hamburger Menu */}
          <div className="flex items-center justify-between w-full md:hidden">
            <img
              src={smallLogo}
              alt="logo"
              className="w-16 h-16 p-2 md:w-64 md:h-16"
            />
            <div className="flex items-center gap-4">
              <Search onClick={handleSearch} />
              <Bell />
              <HamburgerMenu />
            </div>
          </div>

          {/* Desktop View: Logo, Searchbar, Navigation Icons */}
          <div className="hidden md:flex items-center gap-8">
            <img
              src={Logo}
              alt="logo"
              className="w-32 h-12 p-2 md:w-64 md:h-16"
            />
            <Searchbar />
            <span className="flex items-center gap-2">
              <Compass className="text-[#8064A2] w-4 h-4" />
              Explore
              <ChevronDown className="text-gray-400" />
            </span>
            <span className="flex items-center gap-2">
              <Star className="text-[#8064A2] w-4 h-4" />
              Hobbies
              <ChevronDown className="text-gray-400" />
            </span>
            <Bookmark className="text-[#8064A2]" />
            <Bell className="text-[#8064A2]" />
            <ShoppingCart className="text-[#8064A2]" />
            <button className="border border-[#8064A2] font-semibold text-[#8064A2] px-4 py-1 rounded-md">
              Sign In
            </button>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
