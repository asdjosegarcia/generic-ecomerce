import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function GET(){
    const products=await prisma.question.findMany({
        
        // include: {
        //     ProductComplete: true,
        //   },
        }) //prisma la clas que instanciamos en prisma.js, como planificamos la tabla en eschema.prisma, findMany() trae todo lo que hay
    // console.log(products)
    return NextResponse.json(products)
}

export async function POST(request){
    const {/* qualification, */question,productCompleteId}=await request.json()//transformamos la peticion a json a js, y se almacenan en title y description
    const newProduct=await prisma.question.create({//linea para crear datos en nuestra base de datos
        data:{
            //aqui no mandamos ni id ni fecha por que se crean solos
            // qualification:qualification,
            question:question,
            productCompleteId :productCompleteId,
            productId :productCompleteId,

        }
    })
    return NextResponse.json(newProduct)
}
