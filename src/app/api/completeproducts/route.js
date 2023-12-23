import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function GET(){
    const products=await prisma.product.findMany({//iniciamos la 
        include: {
            ProductComplete: true,//nos incluye la 
          },
        }) 
    // console.log(products)
    return NextResponse.json(products)
}

export async function POST(request){
    const {title,description,price,images,condition,shipment,qualification,categories,seller,}=await request.json()//transformamos la peticion a json a js, y se almacenan en title y description
    const newProduct=await prisma.product.create({//linea para crear datos en nuestra base de datos
            data: {
                id:12, // Asigna el valor correspondiente para el nuevo producto complet
                stock: 10, // Asigna el valor correspondiente para el stock
                description: 'Descripción del producto', // Asigna la descripción del producto si es necesario
                // Otras propiedades aquí...
                images: {
                  image1: 'URL de la imagen 1',
                  // Otras imágenes si es necesario...
                },
                colors: {
                  color1: 'Rojo',
                  // Otros colores si es necesario...
                },
                
                addComplete: {
                  connect: { id: 12 }, // Conecta este producto completo al producto principal (usando su ID)
                },

              },
    })
    return NextResponse.json(newProduct)
}
