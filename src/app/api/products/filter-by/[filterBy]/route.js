import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
    let property = ''
    let value = 'not:null'
    console.log(params.filterBy)
    // let 
    switch (true) {
        case (params.filterBy == 'free-shiping'):
            property = 'shipment'
            value = 0
            break;
        case (params.filterBy == 'new'):
            property = 'condition'
            value='New'
            break;
        case (params.filterBy == 'official-stores'):
            value = ''
            property = 'views'
            break;
        default:

    }
    const products = await prisma.product.findMany({//buscar todos los articulos que...
        take: 10, // limitamos los resultados a 10
        where: {//donde..
            [property]: value, // propiedad y valor correspondan 
        },
    })
    console.log(products)
    return NextResponse.json(products)
}
