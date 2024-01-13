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

            const check=state.products.some(pro=>pro.id===payload.id)
        
        
            if(check){
                state.products.map(pro=>{
                    if( pro.id===payload.id){
                    pro.quantity+=1
                }
                return pro
            })
            }else{
                state.Quantity+=1
                state.products.push({...payload,quantity:1})
            }

            state.total=state.products.reduce((sum,pro)=>sum+ pro.quantity*pro.price[0],0)

        console.log(state.products)
        console.log(state.total)
        console.log(state.Quantity)

        },
        resetCart:(state)=>{state=initialState},

        removeProduct:(state,{payload})=>{
            state.products.filter(product=>product.id !== payload)
        }
    }

})

export const {addProduct,resetCart,removeProduct}= cartSlice.actions
export  default cartSlice.reducer