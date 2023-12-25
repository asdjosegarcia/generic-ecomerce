import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
    const porductcomplete = await prisma.product.findUnique({//encontrar unico
        where: { //were se usa para buscar lo que coincida
            id: Number(params.id)//le decimos que busque lo que corresponda con lo que le mandamos en params.id
        },
        include: { 
            ProductComplete: true,
            include: { Comment: true },
        },
        


    })
    console.log(porductcomplete)
    return NextResponse.json(porductcomplete)//mostramos la tarea en pantalla
}

/* const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getProductCompleteForProduct5() {
  const productId = 5;

  const productComplete = await prisma.product.findUnique({
    where: { id: productId },
    include: { ProductComplete: true },
  });

  console.log(productComplete.ProductComplete);
}

getProductCompleteForProduct5()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
 */