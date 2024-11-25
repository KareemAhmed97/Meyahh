import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import RfqsIcon from "../../assets/svgs/RfqsIcon";
import OppurtunitiesIcon from "../../assets/svgs/OppurtunitiesIcon";
import OrderIcon from "../../assets/svgs/OrderIcon";
import Button from "../../Ui/Button";
import Robort from "../../assets/svgs/7.svg";
import Logo from "../../assets/images/Screenshot 2024-11-24 225048.png";
export default function SiedMenu() {
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
    <div className="fixed top-18 h-full left-0 w-[250px] bg-grayColor pt-10 pr-5 pl-3 flex flex-col justify-between gap-10 overflow-y-scroll  ">
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
            >
              <span
                className={`${
                  activeTab === tab.name ? "text-primaryColor" : "text-gray-500"
                }`}
              >
                {tab.icon}
              </span>
              <p className="font-bold text-xs">{tab.name}</p>
            </Link>
          ))}
        </div>
      </div>
      {/* help */}
      <div className="bg-white w-full rounded-md p-2 flex flex-col items-center gap-2 pt-8 relative shadow mb-20   group cursor-pointer">
        <div className="size-11 absolute -top-6 left-1/2 transform -translate-x-1/2 rounded-full flex items-center justify-center border-4 border-grayColor">
          <div className="bg-white size-7 rounded-full overflow-hidden  group-hover:scale-110 duration-300">
            <img src={Robort} alt="" className="w-full object-cover" />
          </div>
        </div>
        <h2 className="font-bold text-mainColor">Need help?</h2>
        <p className="text-center text-xs font-medium">
          Let Meyahh water expert help you within your water need
        </p>
        <Button
          className={
            "bg-white border border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white text-xs w-full font-bold duration-300"
          }
        >
          Get Help
        </Button>
      </div>
    </div>
  );
}
