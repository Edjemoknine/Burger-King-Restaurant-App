import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


const prisma = new PrismaClient();

export const GET = async(request:any,{params}:{params:any})=>{

    const {id}=params
    try {

       const orders= await prisma.order.findUnique({
        where:{id:id}
       })

        
        return new NextResponse(JSON.stringify(orders),{status:200})
    } catch (error:any) {
        return new NextResponse(error,{status:500})
    }
}