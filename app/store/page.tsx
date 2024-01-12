import FoodCard from "@/components/FoodCard";
import { data } from "@/public";
import Image from "next/image";
import React, { useMemo } from "react";

const page = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1572715376701-98568319fd0b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className={` relative h-96 py-20 flex justify-center items-center `}
      >
        <div className="relative z-10 flex flex-col gap-6 text-center">
          <p>DELICIOUS FOOD FOR THE BEST CUSTOMER</p>
          <h1 className="font-amita text-5xl font-medium">
            Welcome To Our Resturant{" "}
          </h1>
          <span>
            Try the most popular food in the world with the best chefs team
            gathered from all the world just for you!
          </span>
        </div>
        <div className="absolute bg-black/70 inset-0"></div>
      </div>
      <div className="max-w-6xl mx-auto p-4 px-8">
        <div className="flex justify-between gap-10 ">
          <div className="flex-[2]">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 uppercase">
                showing 1-12 of results
              </span>
              <select
                className="px-4 py-2 outline-none cursor-pointer"
                name=""
                id=""
              >
                <option className="bg-black" value="">
                  Data (ASCENDING)
                </option>
                <option className="bg-black" value="">
                  Data (DESCENDING)
                </option>
              </select>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 gap-8">
              {data.map((meal) => (
                <FoodCard key={meal.id} meal={meal} />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-[#1a1c1f] p-6">
              <h4 className="text-2xl uppercase mb-4">Menu Categories</h4>
              <span className="flex items-center justify-between border-b border-gray-400 py-1 mt-2">
                {" "}
                <label htmlFor="pizza">Pizzas</label>
                <input type="radio" id="pizza" name="cat" />
              </span>
              <span className="flex items-center justify-between border-b border-gray-400 py-1 mt-2">
                {" "}
                <label htmlFor="burger">Burgers</label>
                <input type="radio" id="burger" name="cat" />
              </span>
              <span className="flex items-center justify-between border-b border-gray-400 py-1 mt-2">
                {" "}
                <label htmlFor="dessert">Desserts</label>
                <input type="radio" id="dessert" name="cat" />
              </span>
              <span className="flex items-center justify-between border-b border-gray-400 py-1 mt-2">
                {" "}
                <label htmlFor="drink">Drinks</label>
                <input type="radio" id="drink" name="cat" />
              </span>
              <span className="flex items-center justify-between border-b border-gray-400 py-1 mt-2">
                {" "}
                <label htmlFor="pasta">Pasta</label>
                <input type="radio" id="pasta" name="cat" />
              </span>
              <span className="flex items-center justify-between border-b border-gray-400 py-1 mt-2">
                {" "}
                <label htmlFor="salad">Salads</label>
                <input type="radio" id="salad" name="cat" />
              </span>
            </div>
            <div className="bg-[#1a1c1f] flex flex-col gap-6 mt-6 p-6">
              <h4 className="uppercase text-xl mb-3">filter by price</h4>
              <div>
                <input className="w-full" type="range" max={20} min={0} />
                <p className="flex justify-between">
                  <span>$0</span>
                  <span>$20</span>
                </p>
              </div>
              <button className="px-4 py-2 border border-gray-400 hover:bg-amber-700 duration-300 text-white ">
                FILTER
              </button>
            </div>
            <div className="bg-[#1a1c1f] flex flex-col gap-6 mt-6 p-6">
              <h4 className="uppercase text-xl mb-3">featured menu items</h4>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-10 ">
                  <Image
                    className="w-24 h-24 object-contain"
                    src={data[0].img}
                    alt="imag"
                    width={80}
                    height={80}
                  />
                  <div>
                    <h4 className=" font-medium">MARGARITA</h4>
                    <p className="font-dancing text-gray-400">$2.60</p>
                  </div>
                </div>
                <div className="flex items-center gap-10 ">
                  <Image
                    className="w-24 h-24 object-contain"
                    src={data[4].img}
                    alt="imag"
                    width={80}
                    height={80}
                  />
                  <div>
                    <h4 className=" font-medium">MARGARITA</h4>
                    <p className="font-dancing text-gray-400">$2.60</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
