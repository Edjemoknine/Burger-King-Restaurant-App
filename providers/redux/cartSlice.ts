import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@prisma/client";
type ProductProps = Product & { quantity: number; slug: string; size: number };
const initialState = {
  products: [],
  total: 0,
  Quantity: 0,
  isAdmin: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, { payload }: { payload?: never }): any => {
      state.Quantity += 1;
      payload && state.products.push(payload!);

      state.total = state.products.reduce(
        (sum, product: any) =>
          sum +
          product.quantity *
            (product.price[Number(product.size)] +
              product.extraOptions?.reduce(
                (sum: any, opt: any) => sum + Number(opt.price),
                0
              )),
        0
      );

      console.log(state.total);
      console.log(state.products);
    },
    resetCart: (state) => {
      state = initialState;
    },

    removeProduct: (state, { payload }) => {
      state.Quantity -= 1;
      state.products = state.products.filter(
        (product: any) => product.slug !== payload
      );
    },
    checkAdmin: (state, { payload }) => {
      state.isAdmin = payload;
    },
  },
});

export const { addProduct, resetCart, removeProduct, checkAdmin } =
  cartSlice.actions;
export default cartSlice.reducer;
