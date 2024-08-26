import { SiLeaflet } from "react-icons/si";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center   mx-5 md:mx-20 my-10">
      <div className="logo flex gap-1 items-center">
      <div className="text-[#25dfdf] text-2xl"><SiLeaflet /></div>
        <h1 className="md:text-3xl text-4xl font-bold text-green-900">Bluten</h1>
      </div>
      <div className="links hidden lg:flex gap-[2rem]">
        <input
          type="text"
          placeholder="Suschen"
          className="border bg-gray-100 text-md rounded-2xl px-5 py-1 "

        />
        <button className="bg-[#ade4e4] flex items-center gap-2 text-md px-2 py-1 rounded">Sortieren Nach
        <FaAngleDown className="text-[#33a2a2] text-xl" />
        </button>
        <button className="bg-[#ade4e4]  flex items-center gap-2  px-2 py-1 rounded">Verfugbarket
        <FaToggleOn className="text-[#33a2a2] text-xl" />
        </button>
        <button className="bg-[#ade4e4] flex items-center gap-2 px-2 py-1 rounded">
        <GiHamburgerMenu className="text-[#33a2a2] text-xl"/>
        </button>
      </div>
      <button className="bg-[#ade4e4] lg:hidden flex items-center gap-2 px-2 py-1 rounded">
        <GiHamburgerMenu className="text-[#33a2a2] text-xl"/>
        </button>
    </div>
  );
};

export default Navbar;
