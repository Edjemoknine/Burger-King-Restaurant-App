/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import FoodCard from "@/components/FoodCard";
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";
import { Product } from "@prisma/client";
import { useDispatch } from "react-redux";
import { addProduct } from "@/providers/redux/cartSlice";

const fetcher = (...args: any[]) =>
  fetch(...args, { cache: "no-store" }).then((res) => res.json());

const page = ({ params: { id } }) => {
  const { data, error, isLoading } = useSWR<Product>(
    `http://localhost:3000/api/products/${id}`,
    fetcher
  );
  const dispatch = useDispatch();
  const [currentTab, setcurrentTab] = useState<string>("description");
  const [currentIMG, setCurrentIMg] = useState<number>(0);

  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(data?.price[size]);

  const [quantity, setQuantity] = useState<number>(1);
  const [ChosenExtras, setChosenExtras] = useState([]);

  const handleChoose = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      setChosenExtras([...ChosenExtras, option]);
    } else {
      setChosenExtras(ChosenExtras.filter((op) => op.id !== option.id));
    }
  };

  const slug = ChosenExtras.map((op) => op.text).join();

  if (isLoading) return "..loading...";
  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 px-8">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="relative h-96">
            <Image
              className="h-full w-60 object-contain"
              src={data.images[currentIMG]}
              alt="burger"
              fill
            />
          </div>
          <div className="flex mt-10 justify-center gap-3">
            {data.images.map((image: string, index: number) => (
              <Image
                key={index}
                className="h-48 cursor-pointer w-40 object-cover"
                width={80}
                height={80}
                src={image}
                alt="burger"
                onClick={() => setCurrentIMg(index)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl uppercase">{data.title}</h2>
          <h3 className="font-dancing">${data?.price[size]}</h3>
          <p className="text-xs text-gray-300 leading-5 min-h-40">
            {data.description}
          </p>

          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-6 ">
              <span>Size</span>
              <select
                onChange={(e) => setSize(e.target.value)}
                className="px-4 py-2"
              >
                <option className="bg-black text-white" value={0}>
                  small 12"(6 Slices)"
                </option>
                <option className="bg-black text-white" value={1}>
                  medium 16"(8 Slices)"
                </option>
                <option className="bg-black text-white" value={2}>
                  Extra 24"(12 Slices)"
                </option>
              </select>
            </div>
            <div className="grid grid-cols-3 gap-3 my-4 ">
              {data.extraOptions.map((option: any, index: number) => (
                <div key={option.text} className="flex gap-3 items-center">
                  <label className="cursor-pointer" htmlFor={option.text}>
                    {option.text}
                  </label>
                  <input
                    onClick={(e) => handleChoose(e, option)}
                    className="w-4 h-4 bg-black"
                    type="checkbox"
                    name={option.text}
                    id={option.text}
                    value={index}
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button className="text-black hover:text-amber-600 px-4 py-2 bg-amber-600 hover:bg-transparent border border-amber-600">
                Clear
              </button>
            </div>
            {/* <h3 className="font-medium font-dancing text-xl mt-6">$ 5.00</h3> */}
            <div className="flex items-center gap-3">
              <input
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
                value={quantity}
                className="w-16 text-center p-2  "
              />
              <button
                onClick={() =>
                  dispatch(
                    addProduct({ ...data, quantity, size, ChosenExtras, slug })
                  )
                }
                className="text-black px-4 py-2 hover:text-amber-600 bg-amber-600 hover:bg-transparent border border-amber-600"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" my-20">
        <div className="flex mb-10 justify-center gap-1 border-b-2 border-r-gray-400">
          <button
            onClick={() => setcurrentTab("description")}
            className={`${
              currentTab === "description" &&
              "bg-[#0f0f0f] relative after:absolute after:w-full after:h-3 after:bg-[#0f0f0f] after:-bottom-3 after:left-0  "
            } border border-gray-400 px-4 py-2 hover:bg-gray-700 `}
          >
            DESCRIPTION
          </button>
          <button
            onClick={() => setcurrentTab("additional")}
            className={`${
              currentTab === "additional" &&
              "bg-[#0f0f0f] relative after:absolute after:w-full after:h-3 after:bg-[#0f0f0f] after:-bottom-3 after:left-0  "
            } border border-gray-400 px-4 py-2 hover:bg-gray-700 `}
          >
            ADDITIONAL INFORMATION
          </button>
          <button
            onClick={() => setcurrentTab("views")}
            className={`${
              currentTab === "views" &&
              "bg-[#0f0f0f] relative after:absolute after:w-full after:h-3 after:bg-[#0f0f0f] after:-bottom-3 after:left-0  "
            } border border-gray-400 px-4 py-2 hover:bg-gray-700 `}
          >
            VIEWS (0)
          </button>
        </div>
        <div>
          <div
            className={`${currentTab === "description" ? "block" : "hidden"}`}
          >
            DESCRIPTION dolor sit, amet consectetur adipisicing elit. Nesciunt
            consequatur saepe eaque doloribus modi veniam accusamus provident
            pariatur nulla ducimus, qui quidem culpa fugiat sit illo cupiditate
            explicabo assumenda aliquam?
          </div>
          <div
            className={`${currentTab === "additional" ? "block" : "hidden"}`}
          >
            INFORMATION dolor sit, amet consectetur adipisicing elit. Nesciunt
            consequatur saepe eaque doloribus modi veniam accusamus provident
            pariatur nulla ducimus, qui quidem culpa fugiat sit illo cupiditate
            explicabo assumenda aliquam?
          </div>
          <div className={`${currentTab === "views" ? "block" : "hidden"}`}>
            VIEWS dolor sit, amet consectetur adipisicing elit. Nesciunt
            consequatur saepe eaque doloribus modi veniam accusamus provident
            pariatur nulla ducimus, qui quidem culpa fugiat sit illo cupiditate
            explicabo assumenda aliquam?
          </div>
        </div>
      </div>
      <div className="my-20">
        <h1 className="uppercase text-2xl pb-24 font-medium text-center">
          related products
        </h1>
        <div className="grid mb-16 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* <FoodCard />
          <FoodCard />
          <FoodCard /> */}
        </div>
      </div>
    </div>
  );
};

export default page;
