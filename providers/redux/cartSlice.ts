import { createSlice } from "@reduxjs/toolkit";
import {Product} from "@prisma/client"
type ProductProps = Product & {quantity:number}
const initialState={
    products:[],
    total: 0,
    Quantity:0,
    isAdmin:false
}
 const cartSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        addProduct:(state,{payload}:{payload:ProductProps})=>{

          
                state.Quantity+=1
                state.products.push(payload)

            state.total=state.products.reduce((sum,product)=>

                sum+ (product.quantity  * (product.price[product.size] + product.ChosenExtras?.reduce((sum, opt) => sum + Number(opt.price),0))) ,0)

         

            console.log(state.products)
        },
        resetCart:(state)=>{state=initialState},

        removeProduct:(state,{payload})=>{
            console.log(payload)
            state.products =  state.products.filter(product=>product.slug !== payload)
        },
        checkAdmin:(state,{payload})=>{
            state.isAdmin=payload
        }
    }

})

export const {addProduct,resetCart,removeProduct,checkAdmin}= cartSlice.actions
export  default cartSlice.reducer
