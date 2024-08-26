import React from "react";
import { SiLeaflet } from "react-icons/si";
import { FaAngleDown } from "react-icons/fa";

const Leftsidebar = () => {
  return (
    <div className="hidden sm:block h-full text-center">
      <div className="title bg-[#e8fbfb] p-1 ">
        <h1 className="text-2xl text-green-900 font-semibold">Filter</h1>
      </div>
      <div className="costrange my-8">
        <h2 className="font-bold ">Preis</h2>
        <div className="btns flex gap-1 my-5">
          <button className="bg-gray-100 w-[46%] px-3 text-left rounded-xl">
            5$
          </button>
          -
          <button className="bg-gray-100 w-[46%] px-3 text-left rounded-xl">
            10$
          </button>
        </div>
        <div className="border-b-2 border-[#d1eeee] w-full"></div>
      </div>
      <div>
        <h2 className="font-bold ">Hersteller</h2>
        <div className="flex flex-col gap-4 text-left">
          <h2>ADREXpharma</h2>
          <h2>Aurora</h2>
          <h2>Avaay</h2>
          <h2>Bedrocan</h2>
          <h2>Cannamedical</h2>
        </div>
        <button className="border border-lime-300 px-5 py-1 m-5 rounded-tl-2xl rounded-br-2xl">
          mehr anzeigen
        </button>
        <div className="border-b-2 border-[#d1eeee] w-full"></div>

        <div className="costrange my-8">
          <h2 className="font-bold ">THC Gehlat</h2>
          <div className="btns flex gap-1 my-5">
            <button className="bg-gray-100 w-[46%] px-3 text-left rounded-xl">
              11%
            </button>
            -
            <button className="bg-gray-100 w-[46%] px-3 text-left rounded-xl">
              18%
            </button>
          </div>
          <div className="border-b-2 border-[#d1eeee] w-full"></div>
        </div>

        <div className="costrange my-8">
          <h2 className="font-bold ">CBD Gehlat</h2>
          <div className="btns flex gap-1 my-5">
            <button className="bg-gray-100 w-[46%] px-3 text-left rounded-xl">
              1%
            </button>
            -
            <button className="bg-gray-100 w-[46%] px-3 text-left rounded-xl">
              5%
            </button>
          </div>
          <div className="border-b-2 border-[#d1eeee] w-full"></div>
        </div>

        <div className="costrange my-8">
          <h2 className="font-bold ">Genetik</h2>
          <div className="btns flex gap-1 my-5">
            <button className="bg-[#76b9b9] w-[58%] py-1 text-center text-white text-md rounded">
              Indica
            </button>
            <button className="bg-[#ade4e4] w-[58%] py-1 text-center text-md rounded">
              Sativa
            </button>
            <button className="bg-[#ade4e4] w-[58%] py-1 text-center text-md rounded">
              Hybrid
            </button>
          </div>
          <div className="border-b-2 border-[#d1eeee] w-full"></div>
        </div>

        <div className="costrange my-8">
          <h2 className="font-bold ">Bestrahaltung</h2>
          <div className="btns flex gap-1 my-5">
            <button className="bg-[#76b9b9] w-[45%] py-1 text-center text-white text-md rounded">
              bestrahalt
            </button>
            <button className="bg-[#ade4e4] w-[58%] py-1 text-center text-md rounded">
              nichbestrahalt
            </button>
          </div>
          <div className="border-b-2 border-[#d1eeee] w-full"></div>
        </div>

        <div className="costrange my-8">  
          <div className="flex justify-around items-center text-center">
          <h2 className="font-bold ">Terpene</h2>
          <FaAngleDown className="text-[#33a2a2]" />
          </div> 
          <div className="border-b-2 my-8 border-[#d1eeee] w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Leftsidebar;
