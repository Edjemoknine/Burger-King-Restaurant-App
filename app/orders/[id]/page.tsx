import { getOrder } from "@/actions/action";
import { Check } from "lucide-react";
import Image from "next/image";

import { GiTakeMyMoney } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineFoodBank } from "react-icons/md";
import { SiIfood } from "react-icons/si";

type ParamsProps = {
  params: {
    id: any;
  };
};
const ClientOrder = async ({ params: { id } }: ParamsProps) => {
  const order = await getOrder(id);

  return (
    <div>
      <div className="max-w-6xl mx-auto  p-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <table className="w-full text-center">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Address</th>
                  <th>Order</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" ">{order?.id.slice(0, 5)}..</td>
                  <td className="">{order?.customer}</td>
                  <td className="font-bold text-amber-700">{order?.address}</td>

                  <td>
                    <div className="flex flex-wrap flex-col gap-1 justify-center">
                      {order?.orders.map((or: any) => (
                        <span key={or}>{or}</span>
                      ))}
                    </div>
                  </td>
                  <td className="font-bold">${order?.amount}</td>
                </tr>
              </tbody>
            </table>
            <table className="w-full text-center">
              <tbody>
                <tr className="pt-10">
                  <td className="pt-10">
                    <div className="flex justify-center items-center gap-3 flex-col">
                      <GiTakeMyMoney size={30} />
                      <span>Payment</span>
                      {order?.status === 1 && (
                        <span>
                          <Check />
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="pt-10">
                    <div className="flex justify-center items-center gap-3 flex-col">
                      <MdOutlineFoodBank
                        size={30}
                        className={`${
                          order && order.status + 1 === 2 && "animate-pulse"
                        }`}
                      />
                      <span>Preparing</span>
                      {order?.status === 2 && (
                        <span>
                          <Check />
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="pt-10">
                    <div className="flex justify-center items-center gap-3 flex-col">
                      <LiaShippingFastSolid
                        size={30}
                        className={`${
                          order && order.status + 1 === 3 && "animate-pulse"
                        }`}
                      />
                      <span>On the way</span>
                      {order?.status === 3 && (
                        <span>
                          <Check />
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="pt-10">
                    <div className="flex justify-center items-center gap-3 flex-col">
                      <IoFastFoodOutline
                        size={30}
                        className={`${
                          order && order.status + 1 === 4 && "animate-pulse"
                        }`}
                      />
                      <span>Delivered</span>
                      {order?.status === 4 && (
                        <span>
                          <Check />
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="pt-10">
                    <div className="flex justify-center items-center gap-3 flex-col">
                      <SiIfood
                        size={30}
                        className={`${
                          order && order.status + 1 === 5 && "animate-pulse"
                        }`}
                      />
                      <span>Enjoy</span>
                      {order?.status === 5 && (
                        <span>
                          <Check />
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-span-1 bg-[#1a1c1f] p-6 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold">CART TOTAL</h2>
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-bold mr-1">Subtotal:</span>
                <span>${order?.amount}</span>
              </p>
              <p>
                <span className="font-bold mr-1">Discount:</span>
                <span>$0:00</span>
              </p>
              <p>
                <span className="font-bold mr-1">Toatl:</span>
                <span>${order?.amount}</span>
              </p>
            </div>
            <button className="uppercase font-bold px-4 py-2 bg-amber-600 text-white">
              Paid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientOrder;
