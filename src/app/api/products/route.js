import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function GET(){
    const products=await prisma.product.findMany({
        
        // include: {
        //     ProductComplete: true,
        //   },
        }) //prisma la clas que instanciamos en prisma.js, como planificamos la tabla en eschema.prisma, findMany() trae todo lo que hay
    // console.log(products)
    return NextResponse.json(products)
}

export async function POST(request){
    const {title,description,price,images,condition,shipment,qualification,categories,seller,}=await request.json()//transformamos la peticion a json a js, y se almacenan en title y description
    const newProduct=await prisma.product.create({//linea para crear datos en nuestra base de datos
        data:{
            //aqui no mandamos ni id ni fecha por que se crean solos
            title: title, //podria solo poner 1 vez title ya que asi llega, pero lo pongo 2 veces para que sea mas didactico
            price:price,
            description: description,
            images:images,
            condition:condition,
            shipment:shipment,
            qualification:qualification,
            categories:categories,
            seller:seller,
        }
    })
    return NextResponse.json(newProduct)
}
