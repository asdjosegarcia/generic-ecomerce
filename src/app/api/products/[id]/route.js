import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
    // console.log(params.id)

    const product = await prisma.product.findUnique({//encontrar unica 
        where: { //were se usa para buscar lo que coincida
            id: Number(params.id)//le decimos que busque lo que corresponda con lo que le mandamos en params.id
        }
    })
    // console.log(product)
    return NextResponse.json(product)//mostramos la tarea en pantalla
}


export async function PUT(request, { params }) {
    const data = await request.json()
    const productUpdated = await prisma.product.update({
        where: {
            id: Number(params.id)
        },
        data: data//como no cambian las propiedades del objeto solo ponemos data, y en caso de faltar alguna propiedad solo se actualiza los valores que recivimos
        /*         {
                    title: data.title,
                    description: data.description
                } */
    })
    return NextResponse.json(productUpdated)
}

export async function DELETE(request, { params }) {
    try {
        const productRemoved = await prisma.product.delete({//borar
            where: { //buscamos lo que coincida (donde)
                id: Number(params.id)
            }
        })
        return NextResponse.json(productRemoved)
    } catch (error) {
        return NextResponse.json('no hemos encontrado el producto con el id ' + params.id + ' ' + error.message)
    }
}