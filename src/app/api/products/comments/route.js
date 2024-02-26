import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function GET(){
    const products=await prisma.comment.findMany({
        
        // include: {
        //     ProductComplete: true,
        //   },
        }) //prisma la clas que instanciamos en prisma.js, como planificamos la tabla en eschema.prisma, findMany() trae todo lo que hay
    // console.log(products)
    return NextResponse.json(products)
}

export async function POST(request){
    const {qualification,comment,productCompleteId}=await request.json()//transformamos la peticion a json a js, y se almacenan en title y description
    const newProduct=await prisma.comment.create({//linea para crear datos en nuestra base de datos
        data:{
            //aqui no mandamos ni id ni fecha por que se crean solos
            qualification:qualification,
            comment:comment,
            productCompleteId :productCompleteId,
            productId :productCompleteId,

        }
    })
    return NextResponse.json(newProduct)
}
