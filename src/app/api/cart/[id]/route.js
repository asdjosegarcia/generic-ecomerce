import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
    
    const user = await prisma.user.findUnique({//
        where: { id:Number( params.id )},
        include: { cart: true },
    })
    const cart = await prisma.cart.findUnique({//
        where: { id:user.cart.id},
        include: { products: true },
    })

    return NextResponse.json(cart)
}











