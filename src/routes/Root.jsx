import React from "react";
import Header from "../Layout/Header";
import SiedMenu from "../Layout/SideMenu";
import { Outlet } from "react-router-dom";
import MobileSideMenu from "../Layout/MobileSideMenu";

export default function Root() {
  return (
    <div className="relative">
      <Header />

      <div className="hidden lg:flex">
        <SiedMenu />
      </div>

      <div className="flex lg:hidden">
        <MobileSideMenu />
      </div>

      <main className="min-h-[80vh]  lg:ml-[265px]  my-[30px] lg:w-[calc(100%-265px)] px-5 ">
        <Outlet />
      </main>
    </div>
  );
}
