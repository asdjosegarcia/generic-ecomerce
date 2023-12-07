import { NextResponse } from "next/server";
// import { prisma }  from '@/libs/prisma' //traemos la calse que instanciamos(prismaclient) en prima.js
// import { Prisma } from "@prisma/client";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export async function GET(){
    const products=await prisma.product.findMany() //prisma la clas que instanciamos en prisma.js, como planificamos la tabla en eschema.prisma, findMany() trae todo lo que hay
    // console.log(products)
    return NextResponse.json(products)
}

export async function POST(request){
    const {title,description,images}=await request.json()//transformamos la peticion a json a js, y se almacenan en title y description
    const newProduct=await prisma.product.create({//linea para crear datos en nuestra base de datos
        data:{
            //aqui no mandamos ni id ni fecha por que se crean solos
            title: title, //podria solo poner 1 vez title ya que asi llega, pero lo pongo 2 veces para que sea mas didactico
            description: description,
            images:images
        }
    })
    return NextResponse.json(newProduct)
}