"use client";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "@prisma/client";
import Image from "next/image";
import CheckoutButton from "@/components/CheckoutButton";
import { removeProduct } from "@/providers/redux/cartSlice";

interface OrderType {
  product: Product & { size: number; ChosenExtras: any; quantity: number };
}
const page = () => {
  const { products, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  console.log(products);
  const orders = products.map((product: any) => {
    return {
      id: product.id,
      name: product.title,
      slug: product.slug,
      description: product.description,
      quantity: product.quantity,
      price:
        product.price[product.size] +
        product.ChosenExtras?.reduce(
          (sum: any, pro: any) => sum + pro.price,
          0
        ),
    };
  });

  // console.log(orders);

  return (
    <div>
      <div className="max-w-6xl mx-auto  p-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <table className="w-full text-center">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Extras</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product: OrderType) => (
                  <tr key={product.slug}>
                    <td className=" flex mb-2 justify-center items-center">
                      <Image
                        src={product.images[0]}
                        alt="product"
                        width={80}
                        height={80}
                      />
                    </td>
                    <td className="font-bold text-amber-700">
                      {product.title}
                    </td>
                    <td className="">
                      {product.ChosenExtras.map((op) => (
                        <span className="text-xs" key={op.id}>
                          {op.text} |
                        </span>
                      ))}
                    </td>
                    <td>${product.price[product.size]}</td>
                    <td>{product.quantity}</td>
                    <td className="font-bold">
                      $
                      {(product.price[product.size] +
                        product.ChosenExtras?.reduce(
                          (sum, pro) => sum + pro.price,
                          0
                        )) *
                        product.quantity}
                    </td>
                    <td className="font-bold text-red-600">
                      <button
                        onClick={() => dispatch(removeProduct(product.slug))}
                      >
                        {" "}
                        x
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-span-1 bg-[#1a1c1f] p-6 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold">CART TOTAL</h2>
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-bold mr-1">Subtotal:</span>
                <span>${total}</span>
              </p>
              <p>
                <span className="font-bold mr-1">Discount:</span>
                <span>$0:00</span>
              </p>
              <p>
                <span className="font-bold mr-1">Toatl:</span>
                <span>${total}</span>
              </p>
            </div>
            <CheckoutButton orders={orders} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
