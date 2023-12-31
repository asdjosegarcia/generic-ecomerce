import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
    const porductcomplete = await prisma.comment.findMany({//encontrar todos los que conicidan
        where: { //were se usa para buscar lo que coincida
            productCompleteId: Number(params.id)//le decimos que busque lo que corresponda con lo que le mandamos en params.id
        },
        // include: { ProductComplete: true },

    })
    console.log(porductcomplete)
    return NextResponse.json(porductcomplete)//mostramos la tarea en pantalla
}
