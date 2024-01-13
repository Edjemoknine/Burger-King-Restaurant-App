import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server"
const prisma = new PrismaClient();


export const GET= async(request,{params})=>{
    const {id}=params
   
    try {

       const product= await prisma.product.findUnique({where:{id:id}})
        
        return new NextResponse(JSON.stringify(product),{status:500})
    } catch (error:any) {
        return new NextResponse(error,{status:500})
    }
}