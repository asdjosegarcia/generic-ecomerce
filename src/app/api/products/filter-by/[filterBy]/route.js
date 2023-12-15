import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
    let property = []//almacenamos los filtros que nos pidan los parametros para usarlos junta=os si es necesario
    if (params.filterBy.includes('freeShipping')) {
        console.log('free')
        property.push({ shipment: 0, })
    }
    if (params.filterBy.includes('new')) {
        console.log('new')
        property.push({ condition: 'New' })
    }
    if (params.filterBy.includes('search=')) {
        console.log('search')
        let index = params.filterBy.indexOf('search=') + 7//obtenemos la posicion de la ultima letra de serach?
        let toSearch = params.filterBy.substring(index)//filtramos el texto que sigue luego de index(posicion del ? de search)
        property.push({title:{contains:toSearch}})

        console.log('to-search',toSearch)


    }


    const products = await prisma.product.findMany({//buscar todos los articulos que...
        take: 10, // limitamos los resultados a 10
        where: {//donde..
            AND: property, // propiedad y valor correspondan 
        },
    })

    return NextResponse.json(products)
}
