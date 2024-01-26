import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function GET(request,{params}){
    const products=await prisma.product.findMany({
        
        // include: {
        //     ProductComplete: true,
        //   },
        }) //prisma la clas que instanciamos en prisma.js, como planificamos la tabla en eschema.prisma, findMany() trae todo lo que hay
    // console.log(products)
    return NextResponse.json(products)
}