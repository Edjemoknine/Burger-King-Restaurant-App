"use client";
import ByName from "@/components/ByName";
import ByPrice from "@/components/ByPrice";
import StoreMenu from "@/components/StoreMenu";
import FoodSkelton from "@/components/skeleton/FoodSkelton";

import { Suspense, useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(20);

  return (
    <section>
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/4113503/pexels-photo-4113503.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load')",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className={` relative h-96 py-20 flex justify-center items-center `}
      >
        <div className="relative z-10 flex flex-col gap-6 text-center max-w-3xl mx-auto">
          <p>DELICIOUS FOOD FOR THE BEST CUSTOMER</p>
          <h1 className="font-amita text-4xl md:text-7xl font-medium">
            Welcome To Our Resturant{" "}
          </h1>
          <span className="max-w-xl mx-auto">
            Try the most popular food in the world with the best chefs team
            gathered from all the world just for you!
          </span>
        </div>
        <div className="absolute bg-black/70 inset-0"></div>
      </div>
      <div className="max-w-6xl relative mx-auto p-4 px-8">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-10 ">
          <div className="flex-[2]">
            <div className="flex flex-col-reverse md:flex-row gap-6 justify-between items-center">
              <span className="text-gray-400 uppercase">
                showing 1-12 of results :
              </span>
            </div>
            <Suspense
              fallback={
                <div className="mt-10 grid sm:grid-cols-2 gap-8">
                  {[...Array(6)].map((_, i) => (
                    <FoodSkelton key={i} />
                  ))}
                </div>
              }
            >
              <StoreMenu name={name} price={price} />
            </Suspense>
          </div>
          <div className="flex-1 relative">
            <div className="sticky top-8 left-0">
              <ByName setName={setName} />
              <ByPrice setPrice={setPrice} price={price} />
              {/* <div className="bg-[#1a1c1f] md:flex hidden flex-col gap-6 mt-6 p-6">
                <h4 className="uppercase text-xl mb-3">featured menu items</h4>
                <div className="flex  flex-col gap-6">
                  <div className="flex  items-center gap-10 ">
                    <Image
                      className="w-24 h-24 object-contain"
                      src={products[0]?.images[0]}
                      alt="imag"
                      width={80}
                      height={80}
                    />
                    <div>
                      <h4 className=" font-medium">{products[0]?.title}</h4>
                      <p className="font-dancing text-gray-400">
                        ${products[1]?.price[0]}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-10 ">
                    <Image
                      className="w-24 h-24 object-contain"
                      src={products[1]?.images[0]}
                      alt="imag"
                      width={80}
                      height={80}
                    />
                    <div>
                      <h4 className=" font-medium">{products[1]?.title}</h4>
                      <p className="font-dancing text-gray-400">
                        ${products[1]?.price[0]}
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
