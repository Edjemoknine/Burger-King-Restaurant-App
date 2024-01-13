"use client";
import { addProduct } from "@/providers/redux/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

const FoodCard = ({ meal }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-[#1a1c1f] p-6 mt-20 relative">
      <Link href={`/${meal.id}`}>
        <Image
          className="w-44 h-44 object-contain mx-auto absolute left-0 right-0 -top-24"
          src={meal.images[0]}
          alt=""
          width={80}
          height={80}
        />
      </Link>
      <div className="flex flex-col mt-16 gap-6 items-center text-center">
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
        <button
          onClick={() => dispatch(addProduct(meal))}
          className="px-4 text-sm py-2 border-gray-300 border"
        >
          ADD TO CART {">"}
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
