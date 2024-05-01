"use client";

import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ meal }: any) => {
  return (
    <div className="bg-[#1a1c1f] p-6 mt-20 relative">
      <div className=" absolute left-0 right-0  -top-24">
        <Link href={`/${meal.id}`}>
          <div className="w-44 h-44 relative mx-auto">
            <Image
              className=" object-contain"
              src={meal.images[0]}
              alt="food img"
              fill
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-col mt-16 gap-3 items-center text-center">
        <Link href={`/${meal.id}`}>
          <h4
            className="text-xl  font-semibold uppercase
          "
          >
            {meal.title}
          </h4>
        </Link>
        <p className="text-gray-400 text-xs leading-5 max-w-[250px]">
          {meal.description}
        </p>
        <span className="text-xl font-dancing font-medium">
          ${meal.price[0]}
        </span>
      </div>
    </div>
  );
};

export default FoodCard;
