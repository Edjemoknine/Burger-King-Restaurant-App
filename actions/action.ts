"use server";
import { PrismaClient, Product, } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma=new PrismaClient()

export const getProducts=async()=>{
    const products = await prisma.product.findMany()
    
    return products

}

export const CreatePro = async(dataPtro:Product) => {
    console.log(dataPtro)
    const order = await prisma.product.create({
        data:{
            description: dataPtro.description,
            title: dataPtro.title,
            price: dataPtro.price,
            extraOptions: dataPtro.extraOptions,
            images: dataPtro.images
        }
    })


    revalidatePath('/admin')
    return order

}


export const getProductDT=async(id:string)=>{
    console.log(id)
    const products = await prisma.product.findUnique({
        where:{id:id}
    })
    
    return products

}
export const DeleteProduct=async(id:string)=>{
    // console.log(id)
    const products = await prisma.product.delete({
        where:{id:id}
    })
    revalidatePath('/admin')
    return products

}

// ____________________________ Orders ________________________

export const getOrders=async()=>{
    const orders = await prisma.order.findMany()
    
    return orders

}

export const getOrder = async(id:string)=>{
    // console.log(id)
    const orders = await prisma.order.findUnique({
        where:{id:id}
    })
    
    return orders

}
export const NextStage = async(id:string)=>{
   
    const orders = await prisma.order.update({
        where:{id:id},data:{status:{increment:1}}
    })
    revalidatePath('/admin')
    return orders

}

export const DeleteOrder=async(id:string)=>{
    console.log(id)
    const order = await prisma.order.delete({
        where:{id:id}
    })
    revalidatePath('/admin')
    return order

}