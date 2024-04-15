"use client";
import { getOrders, getProducts } from "@/actions/action";
import CreateProduct from "@/components/CreateProduct";
import DeletePro from "@/components/DeletePro";
import NextStep from "@/components/NextStep";
import Pagination from "@/components/Pagination";
import UpdatePro from "@/components/UpdatePro";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Order, Product } from "@prisma/client";

const Admin = () => {
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [count, setCount] = useState(0);
  const [orders, setOrders] = useState<Order[]>([]);
  const name = "";
  const productsdata = async (page: any) => {
    const { products, count } = await getProducts(page);
    const orders = await getOrders();
    setProducts(products);
    setCount(count);
    setOrders(orders);
  };

  useEffect(() => {
    productsdata(page);
  }, [page, products]);

  const Status = ["payment", "preparing", "on the way", "delivered", "enjoy"];
  const handleStatus = (orderS: number) => {
    let status;
    if (orderS === 1) status = Status[1];
    if (orderS === 2) status = Status[2];
    if (orderS === 3) status = Status[3];
    if (orderS === 4) status = Status[4];
    if (orderS === 5) status = Status[5];
    return status;
  };
  return (
    <div className="relative ">
      <div className="absolute -top-12 right-16 z-50"></div>
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
        <div className="relative z-10 flex flex-col text-center  max-w-6xl mx-auto px-8 p-4">
          <h1 className="font-dancing -mb-14 text-4xl  md:text-7xl font-bold">
            Food Decoration The last Touch.
          </h1>
        </div>
        <div className="absolute bg-black/70 inset-0"></div>
      </div>
      <div className="max-w-6xl mx-auto p-4 px-8">
        <div>
          <div className="flex  justify-between items-center ">
            <h1 className="font-bold my-10 text-3xl">Products</h1>
            <CreateProduct />
          </div>
          <table className="w-full  text-center">
            <thead>
              <tr>
                <th>Product</th>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Extras</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <tr key={product.id}>
                  <td className=" flex mb-2 justify-center items-center">
                    <div className="w-20 h-20 relative">
                      <Image
                        src={product.images[0]}
                        alt="product"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </td>
                  <td>{product.id.slice(0, 5)}</td>
                  <td>{product.title}</td>
                  <td>{product.description.slice(0, 10)}...</td>
                  <td className="">
                    {product.extraOptions?.map((op: any, i: any) => (
                      <span className="text-xs" key={i}>
                        {op?.text} | ${op.price} <br />
                      </span>
                    ))}
                  </td>
                  <td>${product.price[0]}</td>

                  <td>
                    <div className="flex space-x-3 justify-center">
                      <UpdatePro id={product.id} />
                      <DeletePro id={product.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination setPage={setPage} Count={count} page={page} />

          {/* **********Orders Table************* */}

          <h1 className="font-bold my-10 text-3xl">Orders</h1>
          <table className="w-full text-center">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Order</th>
                <th>Total</th>
                <th>Status</th>
                <th>Next</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order) => (
                <tr className="h-16" key={order.id}>
                  <td className="  ">{order?.id.slice(0, 5)}</td>
                  <td className="">{order?.customer}</td>
                  <td>{order?.address}</td>

                  <td>
                    <div className="flex flex-col text-xs">
                      {order?.orders.map((or: any) => (
                        <span key={or}>{or}</span>
                      ))}
                    </div>
                  </td>
                  <td className="font-bold">${order?.amount}</td>
                  <td className="">{handleStatus(order.status)}</td>
                  <td>
                    <NextStep id={order.id} stage={order.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
