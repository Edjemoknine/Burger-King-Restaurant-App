import React from "react";
import Skeleton from "react-loading-skeleton";
const FoodSkl = () => {
  return (
    <div className="relative w-full">
      <div className="flex items-center gap-8">
        <Skeleton width={145} height={145} className=" rounded-full" />
        <div className="flex flex-col gap-3">
          <Skeleton width={100} height={10} className=" rounded-md" />
          <Skeleton width={200} height={6} className=" rounded-md" />
          <Skeleton width={200} height={6} className=" rounded-md" />
          <Skeleton width={80} height={10} className=" rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default FoodSkl;
