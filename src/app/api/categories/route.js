import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function GET(request, { params }){
    const products=await prisma.category.findMany({//iniciamos la 
        // include: {
        //     ProductComplete: true,//nos incluye la 
        //   },
        }) 
    // console.log(products)
    return NextResponse.json(products)
}