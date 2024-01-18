"use client";
import { getProducts } from "@/actions/action";
import ByName from "@/components/ByName";
import ByPrice from "@/components/ByPrice";
import FoodCard from "@/components/FoodCard";
import Pagination from "@/components/Pagination";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = () => {
  const [products, setProducts] = useState([]);
  // const [results, setResults] = useState([...products]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(20);

  const [pageN, setPageN] = useState(0);
  const [Count, setCounts] = useState();
  let page = pageN;

  const productsdata = async (page, price, name) => {
    const { count, products } = await getProducts(page, name);
    setProducts(products);
    console.log(products);
    setCounts(count);
  };

  // useEffect(() => {
  //   setResults(() => fitry());
  // }, [name, products]);

  // useEffect(() => {
  //   setResults(() => fitrPr());
  // }, [price]);

  // function fitry() {
  //   const data = products.filter(
  //     (item) =>
  //       item.title.toLowerCase().includes(name) ||
  //       item.description.toLowerCase().includes(name)
  //   );
  //   return data;
  // }

  // function fitrPr() {
  //   const data = products.filter((item) => item.price[0] <= Number(price));
  //   return data;
  // }

  useEffect(() => {
    productsdata(page, price, name);
  }, [page, price, name]);

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
          <h1 className="font-amita text-4xl md:text-7xl font-medium">
            Welcome To Our Resturant{" "}
          </h1>
          <span>
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
              {/* <select
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
              </select> */}
            </div>
            <div className="mt-10 grid sm:grid-cols-2 gap-8">
              {products?.map((meal) => (
                <FoodCard key={meal.id} meal={meal} />
              ))}
            </div>
            <Pagination Count={Count} page={pageN} setPage={setPageN} />
          </div>
          <div className="flex-1 relative">
            <div className="sticky top-8 left-0">
              <ByName setName={setName} />
              <ByPrice setPrice={setPrice} price={price} />
              <div className="bg-[#1a1c1f] md:flex hidden flex-col gap-6 mt-6 p-6">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
