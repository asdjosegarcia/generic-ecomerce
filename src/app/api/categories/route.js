import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function GET(request, { params }){
    const products=await prisma.category.findMany({//iniciamos la 
        include: {
            products: true,//nos incluye los productos que tienen este categoria
          },
        }) 
    return NextResponse.json(products)
}

