import { PrismaClient, Product } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

<<<<<<< HEAD
export const POST = async (request: Request) => {
  const body: Product = await request.json();
=======
export const POST= async(request:Request)=>{
    const body:Product= await request.json()
>>>>>>> main

  try {
    const product = await prisma.product.create({
      data: { ...body } as any,
    });
    return new NextResponse(JSON.stringify(product), { status: 500 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
export const GET = async (request: Request) => {
  try {
    const products = await prisma.product.findMany();

<<<<<<< HEAD
    return new NextResponse(JSON.stringify(products), { status: 500 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
=======
       const product= await prisma.product.create({
            data:{...body}
        })
        return new NextResponse(JSON.stringify(product),{status:500})
    } catch (error:any) {
        return new NextResponse(error,{status:500})
    }
}
export const GET= async(request:Request)=>{
    try {
       const products= await prisma.product.findMany()

        return new NextResponse(JSON.stringify(products),{status:500})
    } catch (error:any) {
        return new NextResponse(error,{status:500})
    }
}
>>>>>>> main
