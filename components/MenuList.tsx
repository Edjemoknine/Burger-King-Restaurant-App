import { getProducts } from "@/actions/action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuList = async () => {
  const { products } = await getProducts(0, "", 0);

  return (
    <div className="grid md:grid-cols-2 place-items-center gap-10">
      {products.map((meal: any) => (
        <Link href={`/${meal.id}`} key={meal.id}>
          <div className="flex items-center gap-8">
            <div className="relative h-36 w-36">
              <Image
                className="object-contain"
                src={meal.images[0]}
                alt="meal"
                fill
              />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-white font-medium">{meal.title}</h4>
              <p className="text-xs max-w-[200px] text-gray-400">
                {meal.description}
              </p>
              <span className="font-dancing text-amber-700 font-semibold">
                {meal.price[0]}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuList;
