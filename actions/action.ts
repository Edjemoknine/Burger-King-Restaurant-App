"use server";
import { PrismaClient, } from "@prisma/client";
const prisma=new PrismaClient()

export const getProducts=async()=>{
    const products = await prisma.product.findMany()
    
    return products

}
export const getProductDT=async({id})=>{
    console.log(id)
    const products = await prisma.product.findUnique({
        where:{id:id}
    })
    
    return products

}