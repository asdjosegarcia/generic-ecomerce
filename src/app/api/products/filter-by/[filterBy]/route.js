import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
    let property = []//
    if(params.filterBy.includes('freeShipping')){
        console.log('free')
        property.push({ shipment:0,})
    }
    if(params.filterBy.includes('new')){
        console.log('new')
        property.push({condition:'New'})
    }

    const products = await prisma.product.findMany({//buscar todos los articulos que...
        take: 10, // limitamos los resultados a 10
        where: {//donde..
            AND: property, // propiedad y valor correspondan 
        },
    })

    return NextResponse.json(products)
}
