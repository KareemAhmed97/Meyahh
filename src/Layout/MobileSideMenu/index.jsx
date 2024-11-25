import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import RfqsIcon from "../../assets/svgs/RfqsIcon";
import OppurtunitiesIcon from "../../assets/svgs/OppurtunitiesIcon";
import OrderIcon from "../../assets/svgs/OrderIcon";
import Button from "../../Ui/Button";
import Logo from "../../assets/images/Screenshot 2024-11-24 225048.png";

export default function MobileSideMenu() {
  const { pathname } = useLocation();

  const getPathName = (path) => {
    return path.startsWith("/") ? path.split("/")[1] : path.split("/")[0];
  };

  const Tabs = [
    {
      name: "My RFQS",
      icon: <RfqsIcon />,
      path: "",
    },
    {
      name: "My Opportunities",
      icon: <OppurtunitiesIcon />,
      path: "/opportunities",
    },
    {
      name: "My Orders",
      icon: <OrderIcon />,
      path: "/orders",
    },
  ];

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const currentPath = getPathName(pathname);
    const currentTab = Tabs.find(
      (tab) => getPathName(tab.path) === currentPath
    );
    setActiveTab(currentTab?.name || "");
  }, [pathname]);

  return (
    <div className="drawer z-[1000]">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className=" w-[250px] md:w-[400px] bg-grayColor py-10 pr-5 pl-3  flex flex-col justify-between  gap-10 overflow-scroll  h-full">
          <div>
            {/* Logo */}
            <div className="p-2 text-center border-b-2 border-secondaryColor flex justify-center items-center">
              <div className="w-7/12">
                <img src={Logo} className="w-full object-cover" />
              </div>
            </div>
            {/* Tabs */}
            <div className="mt-5 flex flex-col gap-2">
              {Tabs.map((tab, index) => (
                <Link
                  to={tab.path}
                  key={index}
                  className={`${
                    activeTab === tab.name ? "bg-white rounded-lg shadow" : ""
                  } flex items-center gap-2 pl-2 cursor-pointer`}
                  onClick={() =>
                    (document.getElementById("my-drawer").checked = false)
                  }
                >
                  <p
                    className={`${
                      activeTab === tab.name
                        ? "text-primaryColor"
                        : "text-gray-500"
                    }`}
                  >
                    {tab.icon}
                  </p>
                  <p className="font-bold text-xs">{tab.name}</p>
                </Link>
              ))}
            </div>
          </div>
          {/* help */}
          <Button className="border-none text-primaryColor text-xs font-bold underline">
            Get Help?
          </Button>
        </div>
      </div>
    </div>
  );
}
