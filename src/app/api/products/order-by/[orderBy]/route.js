import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
    let order = 'des'
    let property = 'price'
    switch (true) {
        case (params.orderBy == 'low-price'):
            order = 'asc'
            break;
        case (params.orderBy == 'high-price'):
            order = 'desc'
            break;
        case (params.orderBy == 'most-relevant'):
            order = 'desc'
            property = 'views'

            break;
        default:

    }
    const products = await prisma.product.findMany({
        take: 10, // limitamos los resultados a 10
        orderBy: {
            [property]: order, // Ordena por precio de manera  //desc desendente  //asc asendente  
        },
    })
    console.log(products)
    return NextResponse.json(products)
}
