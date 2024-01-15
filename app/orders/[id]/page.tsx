import { getOrder } from "@/actions/action";
import Image from "next/image";

const ClientOrder = async ({ params: { id } }) => {
  const order = await getOrder(id);

  // console.log(order);

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
                  <td className=" flex mb-2 justify-center items-center">
                    <p>{order?.id.slice(0, 5)}..</p>
                  </td>
                  <td className="">{order?.customer}</td>
                  <td className="font-bold text-amber-700">{order?.address}</td>

                  <td>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {order?.orders.map((or) => (
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
                      <Image
                        src={"/paymen.svg"}
                        alt="product"
                        width={40}
                        height={40}
                      />
                      <span>Payment</span>
                      {order?.status === 1 && (
                        <span>
                          <Image
                            src={"/done.svg"}
                            alt="product"
                            width={40}
                            height={40}
                          />
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="pt-10">
                    <div className="flex justify-center items-center gap-3 flex-col">
                      <Image
                        src={"/prepar.svg"}
                        alt="product"
                        width={40}
                        height={40}
                      />
                      <span>Preparing</span>
                      {order?.status === 2 && (
                        <span>
                          <Image
                            src={"/done.svg"}
                            alt="product"
                            width={40}
                            height={40}
                          />
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="pt-10">
                    <div className="flex justify-center items-center gap-3 flex-col">
                      <Image
                        src={"/truck.svg"}
                        alt="product"
                        width={40}
                        height={40}
                      />
                      <span>On the way</span>
                      {order?.status === 3 && (
                        <span>
                          <Image
                            src={"/done.svg"}
                            alt="product"
                            width={40}
                            height={40}
                          />
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="pt-10">
                    <div className="flex justify-center items-center gap-3 flex-col">
                      <Image
                        src={"/raedy.svg"}
                        alt="product"
                        width={40}
                        height={40}
                      />
                      <span>Delivered</span>
                      {order?.status === 4 && (
                        <span>
                          <Image
                            src={"/done.svg"}
                            alt="product"
                            width={40}
                            height={40}
                          />
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="pt-10">
                    <div className="flex justify-center items-center gap-3 flex-col">
                      <Image
                        src={"/enjoy.svg"}
                        alt="product"
                        width={40}
                        height={40}
                      />
                      <span>Enjoy</span>
                      {order?.status === 5 && (
                        <span>
                          <Image
                            src={"/done.svg"}
                            alt="product"
                            width={40}
                            height={40}
                          />
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
