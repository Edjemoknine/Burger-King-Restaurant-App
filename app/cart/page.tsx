"use client";
import { useSelector } from "react-redux";
const page = () => {
  const products = useSelector((store) => store.cart);
  console.log(products);

  return <div>page</div>;
};

export default page;
