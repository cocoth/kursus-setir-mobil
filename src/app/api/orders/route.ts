import { Order, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: Request) => {
  try {
    const res = await prisma.order.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const body: Order = await req.json();
    const { nama, email, nomerWa, tanggalKursus, jamKursus, jenisKursus } = body;
    const res = await prisma.order.create({
      data: {
        nama,
        email,
        nomerWa,
        tanggalKursus,
        jamKursus,
        jenisKursus,
      },
    });
    console.log({body})
    console.log({res})
    return NextResponse.json(res, { status: 201 });
  } catch (error) {
    console.log({error})
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
