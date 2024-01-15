"use server";
import { PrismaClient, } from "@prisma/client";
const prisma=new PrismaClient()

export const getProducts=async()=>{
    const products = await prisma.product.findMany()
    
    return products

}
export const getOrders=async()=>{
    const orders = await prisma.order.findMany()
    
    return orders

}





export const getProductDT=async(id:string)=>{
    console.log(id)
    const products = await prisma.product.findUnique({
        where:{id:id}
    })
    
    return products

}


export const getOrder = async(id:string)=>{
    // console.log(id)
    const orders = await prisma.order.findUnique({
        where:{id:id}
    })
    
    return orders

}