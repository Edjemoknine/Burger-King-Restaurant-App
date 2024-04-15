/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import FoodCard from "@/components/FoodCard";
import Image from "next/image";
import { useState } from "react";
import useSWR, { Fetcher } from "swr";
import { Product } from "@prisma/client";
import { useDispatch } from "react-redux";
import { addProduct } from "@/providers/redux/cartSlice";
import SkeletonDT from "@/components/skeleton/skeleton";

interface ProType extends Product {
  quantity: number;
}

const fetcher = (url: string | URL | Request) =>
  fetch(url, { cache: "no-store" }).then((res) => res.json());

const PageDetails = ({ params: { id } }: { params: any }) => {
  const { data, error, isLoading } = useSWR<ProType>(
    `http://localhost:3000/api/products/${id}`,
    fetcher
  );
  const { data: related } = useSWR<ProType[]>(
    `http://localhost:3000/api/products`,
    fetcher
  );

  const RelatedPro = related?.filter((pro: any) =>
    pro.title
      .toLowerCase()
      .includes(data?.title.toLowerCase() && pro.id !== data?.id)
  );

  const dispatch = useDispatch();
  const [currentTab, setcurrentTab] = useState<string>("description");
  const [currentIMG, setCurrentIMg] = useState<number>(0);

  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(data?.price[size]);

  const [quantity, setQuantity] = useState<number>(1);
  const [ChosenExtras, setChosenExtras] = useState<any>([]);

  const handleChoose = (e: any, option: any) => {
    const checked = e.target.checked;

    if (checked) {
      setChosenExtras([...ChosenExtras, option]);
    } else {
      setChosenExtras(ChosenExtras.filter((op:any) => op.id !== option.id));
    }
  };

  const slug = ChosenExtras.map((op: any) => op.text).join();

  if (isLoading) return <SkeletonDT />;
  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 px-8">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <div className="relative h-96">
            <Image
              className="h-full w-60 object-contain"
              src={data?.images[currentIMG] || " "}
              alt="burger"
              fill
            />
          </div>
          <div className="flex mt-10 justify-center gap-3">
            {data?.images.map((image: string, index: number) => (
              <div key={index} className=" h-32 w-32 relative">
                <Image
                  className=" cursor-pointer object-cover"
                  fill
                  src={image}
                  alt="burger"
                  onClick={() => setCurrentIMg(index)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl uppercase">{data?.title}</h2>
          <h3 className="font-medium  text-xl">${data?.price[size]}</h3>
          <p className="text-xs text-gray-300 leading-5 min-h-40">
            {data?.description}
          </p>

          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-6 ">
              <span>Size</span>
              <select
                onChange={(e: any) => setSize(e.target.value)}
                className="px-4 py-2"
              >
                <option className="bg-black text-white" value={0}>
                  small 12 (6 Slices)
                </option>
                <option className="bg-black text-white" value={1}>
                  medium 16 (8 Slices)
                </option>
                <option className="bg-black text-white" value={2}>
                  Extra 24 (12 Slices)
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
                    onClick={(e:any) => handleChoose(e:any, option:any)}
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
                onChange={(e: any) => setQuantity(e.target.value)}
                type="number"
                value={quantity}
                className="w-16 text-center p-2  "
              />
              <button
                onClick={() =>
                  dispatch(addProduct({ ...data, quantity, size, slug } as any))
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
          {RelatedPro?.slice(0, 2).map((pro) => (
            <FoodCard meal={pro} key={pro.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
