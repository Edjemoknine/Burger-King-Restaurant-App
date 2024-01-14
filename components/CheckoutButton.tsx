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
const CheckoutButton = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const { total } = useSelector((store) => store.cart);

  function createOrder() {
    // replace this url with your server
    return fetch(
      "https://react-paypal-js-storybook.fly.dev/api/paypal/create-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // use the "body" param to optionally pass additional order information
        // like product ids and quantities
        body: JSON.stringify({
          cart: [
            {
              sku: "1blwyeo8",
              quantity: 2,
              total: total,
            },
          ],
        }),
      }
    )
      .then((response) => response.json())
      .then((order) => {
        // Your code here after create the order
        return order.id;
      });
  }

  function onApprove(data) {
    // replace this url with your server
    return fetch(
      "https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderID: data.orderID,
        }),
      }
    )
      .then((response) => response.json())
      .then((orderData) => {
        const shipping = orderData.purchase_units[0].shipping;

        CreateOrder({
          customer: shipping.name.full_name,
          address: shipping.address.address_line_1,
          total: total,
          method: 1,
        });
        console.log(orderData);
      });
  }

  // Custom component to wrap the PayPalButtons and show loading spinner
  const ButtonWrapper = ({ showSpinner }) => {
    const [{ isPending }] = usePayPalScriptReducer();

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[style]}
          fundingSource={undefined}
          createOrder={createOrder}
          onApprove={onApprove}
        />
      </>
    );
  };

  function App() {
    return (
      <div style={{ maxWidth: "750px", minHeight: "200px" }}>
        <PayPalScriptProvider
          options={{
            clientId:
              "Ad-95x_94aUqQa0V_FRmu5HxsSvAI-bmwcvIM1SaB1Tu3x498yVazEDx7LxiIdDNEdnAdZR7Sokp1UyV",
            components: "buttons",
            currency: "USD",
          }}
        >
          <ButtonWrapper showSpinner={false} />
        </PayPalScriptProvider>
      </div>
    );
  }

  function CreateOrder(data) {
    // replace this url with your server
    return fetch("http://localhost:3000/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((order) => {
        router.push("/orders" + order.id);
        dispatch(resetCart());
      });
  }

  return (
    <div className="w-full ">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 w-full mb-4 bg-gray-300 text-amber-600 font-bold hover:bg-transparent border hover:border-amber-600 duration-300  border-gray-300"
      >
        CHECKOUT NOW!
      </button>
      {open && <App />}
    </div>
  );
};

export default CheckoutButton;
