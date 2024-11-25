import React from "react";
import EmptyCard from "../Components/EmptyCard";

export default function MyRfqs() {
  return (
    <div className="flex flex-col gap-20">
      <h1 className="text-2xl md:text-3xl text-mainColor font-bold">
        Welcome Samah !
      </h1>
      <div className="lg:w-11/12">
        <EmptyCard
          title={"You will view your RFQs here!"}
          message={"Get your water treatment needs at the best price."}
          name={"Create a RFQ"}
          path={""}
        />
      </div>
    </div>
  );
}
