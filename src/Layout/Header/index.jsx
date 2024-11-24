import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../../assets/svgs/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] shadow-md border border-gray-300 bg-white px-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className=" flex lg:hidden">
          <RxHamburgerMenu />
        </div>
        <div className="w-[40px] h-[60px]">
          <img src={Logo} alt="Logo" className=" w-full h-full object-cover" />
        </div>
        <div className="h-[30px] w-[1px] bg-gray-300"></div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-6 w-6 bg-white rounded-md shadow-lg border border-gray-300">
            <p className="text-primaryColor font-bold text-xs">W</p>
          </div>
          <p className="text-mainColor font-bold text-xs">Waterx</p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-3">
        <h3 className="text-mainColor font-bold text-sm capitalize">
          John Clone
        </h3>
        <div className="flex items-center justify-center h-10 w-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white">
          <p className="font-bold">J</p>
        </div>
        <IoIosArrowDown className="text-gray-500" size={20} />
      </div>
    </header>
  );
}
