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

// export async function DELETE(request, { params }) {
//     console.log(params.id)

//     const product = await prisma.category.delete({//borrar una categoria
//         where: { //were se usa para buscar lo que coincida
//             id: Number(params.id)//le decimos que busque lo que corresponda con lo que le mandamos en params.id
//         }
//     })
//     console.log(product)
//     return NextResponse.json(product)//mostramos la tarea en pantalla
    
// }

export async function DELETE(request, { params }) {
    console.log('Delete ' ,params.id)
    try {
        const productRemoved = await prisma.category.delete({//borar
            where: { //buscamos lo que coincida (donde)
                id: Number(params.id)
            }
        })
        return NextResponse.json(productRemoved)
    } catch (error) {
        return NextResponse.json('no hemos encontrado la categoria con el id ' + params.id + ' ' + error.message)
    }
}
