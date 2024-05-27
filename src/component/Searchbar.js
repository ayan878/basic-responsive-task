import React from "react";
import { Search } from "lucide-react";

function Searchbar() {
  return (
    <div className="flex items-center border rounded-md bg-gray-50">
      <input
        type="search"
        className="w-56 bg-gray-50 text-xs p-2 focus:outline-none font-thin"
        placeholder="Search for anything on your hobbies"
      />
      <Search className="w-10 h-10 text-white bg-[#8064A2] rounded-r-md p-2" />
    </div>
  );
}

export default Searchbar;
