import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const generateOrders = body.orders.map((order: any) => {
    return `${order.quantity} | ${order.name} | ${order.slug}`;
  });

  try {
    const order = await prisma.order.create({
      data: {
        customer: body.customer,
        address: body.address,
        amount: body.amount,
        status: body.status,
        orders: generateOrders,
      },
    });

    console.log(order);
    return new NextResponse(JSON.stringify(order), { status: 201 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
