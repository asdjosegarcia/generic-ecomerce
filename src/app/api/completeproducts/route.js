import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function GET() {
  console.log('hola')
  const products = await prisma.product.findMany({//iniciamos la 
    include: {
      ProductComplete: true,//nos incluye los completeproduct en cada objeto
    },
  })
  // console.log(products)
  return NextResponse.json(products)
}

export async function POST(request) {
  const { title, price, previewImg, condition, shipment, qualification, seller, categoryId, stock, description } = await request.json()//transformamos la peticion a json a js, y se almacenan en title y description
  const newProduct = await prisma.product.create({//linea para crear datos en nuestra base de datos
    data: {
      title: title, //podria solo poner 1 vez title ya que asi llega, pero lo pongo 2 veces para que sea mas didactico
      price: price,
      // description: description,
      previewImg: previewImg,
      condition: condition,
      shipment: shipment,
      qualification: qualification,
      seller: seller,
      categoryId: categoryId,

      // categoryId: 1, // Asegúrate de proporcionar categoryId
      ProductComplete: { // Si es una relación 1 a 1, puedes crear ProductComplete aquí
        create: {
          stock: 10,
          description: description,
        }
      },

    },
    include: {
      ProductComplete: true,
    },
  })
  return NextResponse.json(newProduct)
}
