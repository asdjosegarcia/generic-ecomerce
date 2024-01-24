import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
    
    const user = await prisma.user.findUnique({//
        where: { email: params.email },
        include: { favorites: true },
    })
    const favorites = await prisma.favorites.findUnique({//
        where: { id:user.favorites.id},
        include: { products: true },
    })

    return NextResponse.json(favorites)
}








