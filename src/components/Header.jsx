import Link from "next/link";
import { SiLeaflet } from "react-icons/si";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


const Header = () => {
  return (
    <div className="Navbar hidden lg:flex justify-between gap-10 md:gap-0 items-center mx-5 md:mx-20">
      <div>
        <input
          type="text"
          placeholder="Suschen "
          className="border bg-[#e8fbfb] text-[#51a9a9] rounded-2xl px-5 py-1 "
         
        />
    
    
      </div>

      <div className="links  lg:flex items-center gap-[3rem]">
        <Link className="font-bold flex gap-1 items-center" href="">
          <div className="text-[#25dfdf] text-md">
            <SiLeaflet />
          </div>
          Rezept einlosen
        </Link>
        <Link className="font-bold flex gap-1 items-center" href="">
          <div className="text-[#b9dcdc] text-md">
            <SiLeaflet />
          </div>
          Live Bestand
        </Link>
        <Link className="font-bold flex gap-1 items-center" href="">
          <div className="text-[#b9dcdc] text-md">
            <SiLeaflet />
          </div>
          Videosperschstunde
        </Link>
        <Link className="font-bold flex gap-1 items-center" href="">
          <div className="text-[#b9dcdc] text-md">
            <SiLeaflet />
          </div>
          Feks
        </Link>
        <Link className="font-bold flex gap-1 items-center" href="">
          <div className="text-[#b9dcdc] text-md">
            <SiLeaflet />
          </div>
          Kontakt
        </Link>
        <div>
        <FaCartShopping className="text-xl text-[#33a2a2] cursor-pointer" />
        </div>
      </div>
      <div>
        <button className="bg-lime-200 px-4 py-1 rounded-tl-2xl rounded-br-2xl">
          Ammelden
        </button>
      </div>
    </div>
  );
};

export default Header;
