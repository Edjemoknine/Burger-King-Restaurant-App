"use client";

import { resetCart } from "@/providers/redux/cartSlice";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const style = { layout: "vertical" };
const CheckoutButton = ({ orders }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const { total } = useSelector((store) => store.cart);

  return (
    <div className="w-full ">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 w-full mb-4 bg-gray-300 text-amber-600 font-bold hover:bg-transparent border hover:border-amber-600 duration-300  border-gray-300"
      >
        CHECKOUT NOW!
      </button>
      {open && (
        <PayPalScriptProvider
          options={{
            clientId:
              "Ad-95x_94aUqQa0V_FRmu5HxsSvAI-bmwcvIM1SaB1Tu3x498yVazEDx7LxiIdDNEdnAdZR7Sokp1UyV",
            currency: "USD",
            intent: "capture",
          }}
        >
          <PayPalButtons
            createOrder={async () => {
              // pay order by paypal
              const res = await fetch("/api/paypal", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ total, orders }), // send ordered product details to paypal server in the Body
              });
              const order = await res.json();

              return order.id;
            }}
            //_____________________ _________________________________

            onApprove={async (data, actions) => {
              actions.order?.capture().then(async (details) => {
                const shipping = details.purchase_units[0];
                // console.log(shipping);

                try {
                  const res = await fetch("/api/orders", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({
                      customer: shipping.shipping?.name?.full_name,
                      address: shipping.shipping?.address?.address_line_1,
                      amount: total,
                      orders,
                      status: 1,
                    }),
                  });
                  const data = await res.json();
                  router.push("/orders/" + data.id);
                  dispatch(resetCart());
                } catch (error) {
                  console.log(error);
                }
              }); // send payment to bussnes acount
            }}
            // _________________________________________________

            onCancel={(data) => {
              console.log("Cancelled process", data);
            }}
          />
        </PayPalScriptProvider>
      )}
    </div>
  );
};

export default CheckoutButton;
