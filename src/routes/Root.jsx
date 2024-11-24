import React from "react";
import Header from "../Layout/Header";
import SiedMenu from "../Layout/SideMenu";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="relative">
      <Header />

      <div className="hidden lg:flex">
        <SiedMenu />
      </div>

      <main className="min-h-[80vh]  lg:ml-[265px]  my-[30px] lg:w-[calc(100%-265px)] px-5 ">
        <Outlet />
      </main>
    </div>
  );
}
