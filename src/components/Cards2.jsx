import React from "react";
import Image from "next/image";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Cards2 = () => {
  return (
    <>
      <div className=" flex justify-between items-center gap-3 font-sans ">
        <div className="flex flex-col pt-5 border-2 border-[#60bbbb] rounded-tl-2xl rounded-br-2xl">
          <button className="bg-red-50 max-w-fit mx-5 px-3 py-1 flex items-center text-sm font-medium rounded-2xl text-red-900 ">
            <div className="w-2 h-2 mx-2 rounded-full bg-red-900"></div> nicht
            lieferbar
          </button>
          <div className="image flex justify-center py-4 ">
            <Image
              src="/img.png"
              width={100}
              height={100}
              alt="image"
              className=""
            />
          </div>
          <div className="bg-[#ade4e4] p-5 rounded-br-2xl">
            <h1 className="text-sm bg-[#96d7d7] py-1 w-fit px-3 rounded font-semibold">
              Canify
            </h1>
            <div className="btns flex gap-2 my-5">
              <button className="bg-white  px-4 text-left text-green-900 rounded">
                THC 18%
              </button>
              <button className="bg-[#60bbbb]  text-white px-4 text-left rounded">
                CBD -1%
              </button>
              <button className="text-[#60bbbb] text-2xl">
                <GiPlantsAndAnimals />
              </button>
            </div>
            <h1 className="font-semibold text-l text-[#036767]">
              Cannabis Flos 18/1 PT <br /> Mango
            </h1>
            <div className="flex justify-between items-center my-5">
              <div>
                <h1>Kultivar</h1>
                <h1>Genetik</h1>
              </div>
              <div>
                <h1>Mango</h1>
                <h1>Hybrid</h1>
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <h1 className="text-2xl text-green-900 font-bold">
                  <span className="text-2xl text-[#60bbbb]   font-bold">$</span>
                  11,66
                </h1>
                <h1 className="text-black font-light font-serif">pro Gramm</h1>
              </div>
              <div>
                <button className="bg-lime-200  text-green-900 font-serif font-medium px-4 py-1 rounded-tl-2xl rounded-br-2xl">
                  in den Warenkorb
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-5 border-2 border-[#60bbbb] rounded-tl-2xl rounded-br-2xl">
          <button className="bg-red-50 max-w-fit mx-5 px-3 py-1 flex items-center text-sm font-medium rounded-2xl text-red-900 ">
            <div className="w-2 h-2 mx-2 rounded-full bg-red-900"></div> nicht
            lieferbar
          </button>
          <div className="image flex justify-center py-4 ">
            <Image
              src="/img.png"
              width={100}
              height={100}
              alt="image"
              className=""
            />
          </div>
          <div className="bg-[#ade4e4] p-5 rounded-br-2xl">
            <h1 className="text-sm bg-[#96d7d7] py-1 w-fit px-3 rounded font-semibold">
              Canify
            </h1>
            <div className="btns flex gap-2 my-5">
              <button className="bg-white  px-4 text-left text-green-900 rounded">
                THC 18%
              </button>
              <button className="bg-[#60bbbb]  text-white px-4 text-left rounded">
                CBD -1%
              </button>
              <button className="text-[#60bbbb] text-2xl">
                <GiPlantsAndAnimals />
              </button>
            </div>
            <h1 className="font-semibold text-l text-[#036767]">
              Cannabis Flos 18/1 PT <br /> Mango
            </h1>
            <div className="flex justify-between items-center my-5">
              <div>
                <h1>Kultivar</h1>
                <h1>Genetik</h1>
              </div>
              <div>
                <h1>Mango</h1>
                <h1>Hybrid</h1>
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <h1 className="text-2xl text-green-900 font-bold">
                  <span className="text-2xl text-[#60bbbb]   font-bold">$</span>
                  11,66
                </h1>
                <h1 className="text-black font-light font-serif">pro Gramm</h1>
              </div>
              <div>
                <button className="bg-lime-200  text-green-900 font-serif font-medium px-4 py-1 rounded-tl-2xl rounded-br-2xl">
                  in den Warenkorb
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-5 border-2 border-[#60bbbb] rounded-tl-2xl rounded-br-2xl">
          <button className="bg-red-50 max-w-fit mx-5 px-3 py-1 flex items-center text-sm font-medium rounded-2xl text-red-900 ">
            <div className="w-2 h-2 mx-2 rounded-full bg-red-900"></div> nicht
            lieferbar
          </button>
          <div className="image flex justify-center py-4 ">
            <Image
              src="/img.png"
              width={100}
              height={100}
              alt="image"
              className=""
            />
          </div>
          <div className="bg-[#ade4e4] p-5 rounded-br-2xl">
            <h1 className="text-sm bg-[#96d7d7] py-1 w-fit px-3 rounded font-semibold">
              Canify
            </h1>
            <div className="btns flex gap-2 my-5">
              <button className="bg-white  px-4 text-left text-green-900 rounded">
                THC 18%
              </button>
              <button className="bg-[#60bbbb]  text-white px-4 text-left rounded">
                CBD -1%
              </button>
              <button className="text-[#60bbbb] text-2xl">
                <GiPlantsAndAnimals />
              </button>
            </div>
            <h1 className="font-semibold text-l text-[#036767]">
              Cannabis Flos 18/1 PT <br /> Mango
            </h1>
            <div className="flex justify-between items-center my-5">
              <div>
                <h1>Kultivar</h1>
                <h1>Genetik</h1>
              </div>
              <div>
                <h1>Mango</h1>
                <h1>Hybrid</h1>
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <h1 className="text-2xl text-green-900 font-bold">
                  <span className="text-2xl text-[#60bbbb]   font-bold">$</span>
                  11,66
                </h1>
                <h1 className="text-black font-light font-serif">pro Gramm</h1>
              </div>
              <div>
                <button className="bg-lime-200  text-green-900 font-serif font-medium px-4 py-1 rounded-tl-2xl rounded-br-2xl">
                  in den Warenkorb
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 items-center">
        <FaArrowLeftLong  className="text-[#33a2a2]"/>
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>...</h1>
        <h1>12</h1>
        <FaArrowRightLong className="text-[#33a2a2]" />
      </div>
    </>
  );
};

export default Cards2;
