import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function GET(request, { params }) {
    console.log(params)
    const products = await prisma.product.findMany({//nos devuelve los items que tengan un shipment con el valor ingresado
        take: 10,
        where: { //were se usa para buscar lo que coincida
            shipment: +params.shipment,//+ transforma el texto a numero
        }
    })
    // console.log(products)
    return NextResponse.json(products)//mostramos la tarea en pantalla
}