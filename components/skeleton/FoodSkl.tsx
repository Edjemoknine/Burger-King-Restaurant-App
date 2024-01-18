import React from "react";
import Skeleton from "react-loading-skeleton";
const FoodSkl = () => {
  return (
    <div>
      <Skeleton width={160} height={160} className="w-40 h-40 rounded-full" />
      <Skeleton className="w-60 h-72 rounded-md" />
    </div>
  );
};

export default FoodSkl;
