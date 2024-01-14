import { createSlice } from "@reduxjs/toolkit";
import {Product} from "@prisma/client"
const initialState={
    products:[],
    total: 0,
    Quantity:0
}
 const cartSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        addProduct:(state,{payload}:{payload:Product})=>{

          
                state.Quantity+=1
                state.products.push(payload)

            state.total=state.products.reduce((sum,product)=>

                sum+ (product.quantity  * (product.price[product.size] + product.ChosenExtras?.reduce((sum, opt) => sum + opt.price,0))) ,0)

         

            console.log(state.products)
        },
        resetCart:(state)=>{state=initialState},

        removeProduct:(state,{payload})=>{
            console.log(payload)
            state.products =  state.products.filter(product=>product.slug !== payload)
        }
    }

})

export const {addProduct,resetCart,removeProduct}= cartSlice.actions
export  default cartSlice.reducer