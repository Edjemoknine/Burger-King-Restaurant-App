import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server"
const prisma = new PrismaClient();

export const POST= async(request)=>{
    const body= await request.json()
console.log(body)
    try {

       const product= await prisma.product.create({
            data:{...body}
        })

        console.log(product)
        return new NextResponse(JSON.stringify(product),{status:500})
    } catch (error:any) {
        return new NextResponse(error,{status:500})
    }
}