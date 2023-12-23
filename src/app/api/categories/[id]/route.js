import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
    console.log(params.id)

    const product = await prisma.category.findUnique({//encontrar unica 
        where: { //were se usa para buscar lo que coincida
            id: Number(params.id)//le decimos que busque lo que corresponda con lo que le mandamos en params.id
        }
    })
    console.log(product)
    return NextResponse.json(product)//mostramos la tarea en pantalla
}
