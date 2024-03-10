import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
    const porductcomplete = await prisma.product.findUnique({//encontrar unico
        where: { //were se usa para buscar lo que coincida
            id: Number(params.id)//le decimos que busque lo que corresponda con lo que le mandamos en params.id
        },
        include: {
            userProducts:true,
            ProductComplete: {
                include: {
                    comments: true,
                    question: true,
                    productImages:true,
                }
            }
        },



    })
    // console.log(porductcomplete)
    return NextResponse.json(porductcomplete)//mostramos la tarea en pantalla
}
