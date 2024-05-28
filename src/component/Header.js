import React from "react";
import {
  Bell,
  Bookmark,
  ChevronDown,
  Compass,
  ShoppingCart,
  Star,
} from "lucide-react";
import Logo from "../assets/Logo.png";
import Searchbar from "./Searchbar";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  return (
    <header className="bg-white flex items-center border-b shadow-md px-4 py-2 h-20 justify-between">
      <div className="flex items-center gap-8">
        <img src={Logo} alt="logo" className="w-32 h-12 p-2 md:w-64 md:h-16" />
        <Searchbar />
      </div>
      <div className="hidden lg:flex items-center gap-4">
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
     <HamburgerMenu/>
    </header>
  );
}

export default Header;
