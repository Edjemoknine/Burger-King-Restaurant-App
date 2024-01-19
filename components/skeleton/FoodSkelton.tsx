import React from "react";
import Skeleton from "react-loading-skeleton";

const FoodSkelton = () => {
  return (
    <div className="bg-[#1a1c1f] h-72 p-6 mt-20 relative">
      <div className=" absolute left-0 right-0  -top-24">
        <Skeleton width={170} height={170} circle className=" rounded-md" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <Skeleton width={150} height={10} className=" rounded-md" />
        <Skeleton width={200} height={6} className=" rounded-md" />
        <Skeleton width={200} height={6} className=" rounded-md" />
        <Skeleton width={80} height={7} className=" rounded-md" />
        <Skeleton width={100} height={15} className=" rounded-md" />
      </div>
    </div>
  );
};

export default FoodSkelton;
