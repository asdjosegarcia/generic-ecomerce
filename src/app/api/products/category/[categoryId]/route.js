import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
    const productByCategory = await prisma.category.findMany({//encontrar todos los que conicidan
        where: { //were se usa para buscar lo que coincida
            id: Number(params.categoryId)//le decimos que busque lo que corresponda con lo que le mandamos en params.id
        },include:{
            products:{
                include:{
                    previewImgBase:true
                }
            }
        }

        // include: { ProductComplete: true },

    })
    // console.log(productByCategory)
    return NextResponse.json(productByCategory)//mostramos la tarea en pantalla
}
