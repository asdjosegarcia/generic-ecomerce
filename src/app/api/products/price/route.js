import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(){
    const products=await prisma.product.findMany({
        take: 10, // limitamos los resultados a 10
        orderBy: {
          price: "asc", // Ordena por precio de manera  //desc desendente  //asc asendente  
        },
    })
    console.log(products)
    return NextResponse.json(products)
}
