"use client";

import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import Pagination from "./Pagination";
import { getProducts } from "@/actions/action";
import { Product } from "@prisma/client";

const StoreMenu = ({ name, price }: { name: string; price: number }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pageN, setPageN] = useState(0);
  const [Count, setCounts] = useState<number>();
  let page = pageN;

  const productsdata = async (page: number, price: number, name: string) => {
    const { count, products } = await getProducts(page, name, price);
    setProducts(products);
    setCounts(count);
  };

  useEffect(() => {
    productsdata(page, price, name);
  }, [price, name, page]);

  return (
    <>
      <div className="mt-10 grid sm:grid-cols-2 gap-8">
        {products?.map((meal) => (
          <FoodCard key={meal.id} meal={meal} />
        ))}
      </div>
      <Pagination Count={Count} page={pageN} setPage={setPageN} />
    </>
  );
};

export default StoreMenu;
