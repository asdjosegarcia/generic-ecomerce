import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request, { params }) {

  const product = await prisma.product.findUnique({//encontrar unica 
    where: {id: Number(params.id)},
    include:{
      previewImgBase:true
    }
  })
  console.log(product)
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
  try{
  const coommentRemoved = await prisma.comment.deleteMany({
    where: {
      productId: +params.id
    },

  })
  // console.log('comment ok')
  const questionRemoved = await prisma.question.deleteMany({
    where: {
      productId: +params.id
    }
  })
  // console.log('question ok')
  const porductCompleteRemoved = await prisma.productComplete.delete({//deleteMany para que busque entre todos, lo ideal sea delete pero si falta prdoucComplete o porduct nos dara un catch
    where: {
      id: +params.id
    }
  })
  // console.log('productComp oK')
  const porductRemoved = await prisma.product.delete({
    where: {
      id: +params.id
    }
  })
  // console.log('porduct OK')
  return NextResponse.json(porductRemoved)
  }catch{
      return NextResponse.json('no hemos encontrado el producto con el id ' + params.id )
  }
}


