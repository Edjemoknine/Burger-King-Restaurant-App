import { getOrders, getProducts } from "@/actions/action";
import Image from "next/image";
import React from "react";

const Admin = async () => {
  const products = await getProducts();
  const orders = await getOrders();

  console.log(orders);
  console.log(products);

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488992783499-418eb1f62d08?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc3RhdXJhbnQlMjBraXRjaGVuJTIwZXF1aXBtZW50fGVufDB8fDB8fHww')",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className={` relative h-96 py-20 flex items-center px-8`}
      >
        <div className="relative z-10 flex flex-col text-center">
          <h1 className="font-dancing -mb-14 text-4xl  md:text-7xl font-bold">
            Food Decoration The last Touch.
          </h1>

          <Image
            src={"/underG.png"}
            className="text-white -mb-10"
            alt="about"
            width={400}
            height={100}
          />
        </div>
        <div className="absolute bg-black/70 inset-0"></div>
      </div>
      <div className="max-w-6xl mx-auto p-4 px-8">
        <div></div>
      </div>
    </div>
  );
};

export default Admin;
