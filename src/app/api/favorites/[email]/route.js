import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
    
    const allProducts= await prisma.product.findMany({}) //todos los products

    const userFavorites = await prisma.user.findUnique({//unico producto
        where: { email: params.email },
        include: { favorites: true },
    })

    return NextResponse.json(allProducts)
}






