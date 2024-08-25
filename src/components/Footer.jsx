import Link from "next/link";
import { SiLeaflet } from "react-icons/si";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#33a2a2] py-10 mt-10 flex justify-around items-start w-full rounded-tr-2xl rounded-tl-2xl">
      <div className="flex flex-col gap2 text-gray-300">
        <h1>AGB</h1>
        <h1>Impressum</h1>
        <h1>Datenschutz</h1>
      </div>

      <div className="flex flex-col gap2">
        <Link className="font-bold flex gap-1 text-white items-center" href="">
          <div className="text-[#25dfdf] text-md">
            <SiLeaflet />
          </div>
          Rezept einlosen
        </Link>

        <Link className="font-bold text-white flex gap-1 items-center" href="">
          <div className="text-[#25dfdf] text-md">
            <SiLeaflet />
          </div>
          Videosperschstunde
        </Link>
      </div>
      <div className="flex flex-col gap2">
        <Link className="font-bold flex gap-1 text-white items-center" href="">
          <div className="text-[#25dfdf] text-md">
            <SiLeaflet />
          </div>
          Live Bestand
        </Link>

        <Link className="font-bold text-white flex gap-1 items-center" href="">
          <div className="text-[#25dfdf] text-md">
            <SiLeaflet />
          </div>
          FAQs
        </Link>
        <Link className="font-bold text-white flex gap-1 items-center" href="">
          <div className="text-[#25dfdf] text-md">
            <SiLeaflet />
          </div>
          Kontakt
        </Link>
      </div>

      <div className="flex flex-col gap2">
        <h1 className="font-light text-gray-300">Standort</h1>
        <h1 className=" text-white">
          BergstraBe 49-57 <br /> 69469 Weinheim <br /> (3 Glocken Quartier)
        </h1>
      </div>

      <div className="flex flex-col gap2">
        <h1 className="font-light text-gray-300">Telefon</h1>
        <h1 className=" text-white">0223 545 5250</h1>
      </div>

      <div className="flex flex-col gap2">
        <h1 className="font-light text-gray-300">Offnungszieten</h1>
        <h1 className="font-light text-gray-300">Mon-fr</h1>
        <h1 className=" text-white">09:00 - 18:00 Uhr</h1>
        <br />
        <h1 className="font-light text-gray-300">Sa</h1>
        <h1 className=" text-white">09:00 - 14:00 Uhr</h1>
      </div>
    </div>
  );
};

export default Footer;
