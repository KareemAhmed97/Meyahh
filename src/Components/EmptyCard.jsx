import React from "react";
import { Link } from "react-router-dom";
import Button from "../Ui/Button";

export default function EmptyCard({ title, message, path, name }) {
  return (
    <div className="w-full border-[3px] border-secondaryColor rounded-lg min-h-20 flex flex-col items-center justify-center gap-6 py-10">
      <h3 className="text-mainColor font-bold text-base sm:text-lg md:text-[20px]">
        {title}
      </h3>
      <p className="text-sm sm:text-md md:text-lg text-center">{message}</p>
      <Link to={path}>
        <Button className={"bg-primaryColor text-white font-bold text-xs"}>
          {name}
        </Button>
      </Link>
    </div>
  );
}
