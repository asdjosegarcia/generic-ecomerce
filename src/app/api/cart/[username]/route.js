import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function GET(request, { params }){
    const carts=await prisma.user.findMany({//
        include: {
            cart: true,//nos da los carts
          },
        }) 
    return NextResponse.json(carts)
}


