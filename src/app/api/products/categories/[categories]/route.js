import { NextResponse } from "next/server";
// import { prisma }  from '@/libs/prisma' //traemos la calse que instanciamos(prismaclient) en prima.js
// import { Prisma } from "@prisma/client";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export async function GET(request, { params }) {
    console.log(params)
    const products = await prisma.product.findMany({//encontrar unica 
        where: { //were se usa para buscar lo que coincida
            categories: {
                path: [params.categories], //filtramos los articulos que tengan la categorio ingresada en la url 
                not:null //cualquier articulo que NO sea nomre_caegoria:null
            }
        }
    })
    // console.log(products)
    return NextResponse.json(products)//mostramos la tarea en pantalla

}