import { NextResponse } from "next/server";
// import { prisma }  from '@/libs/prisma' //traemos la calse que instanciamos(prismaclient) en prima.js
// import { Prisma } from "@prisma/client";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export async function GET() {
    const productsWithCategory = await prisma.product.findMany({
        where: {
            categories: {
                contains: "tu_categoria_a_buscar"
            }
        }
    });

    return NextResponse.json(productsWithCategory)

}