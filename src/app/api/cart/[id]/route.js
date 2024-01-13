import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const productId=1;
// const user=2;
export async function GET(request, { params }) {
    
    const cart = await prisma.user.update({//
        // where: { id: userId },
        // include: { cart: true },
        
        where: { //were se usa para buscar lo que coincida
            // id: Number(params.id),
            data: {
                products: {
                    connect: [{ id: productId }],
                },
            }

        },
        // await db.cart.update({
        //     where: { id: user.cart.id },
        //     data: {
        //       products: {
        //         connect: [{ id: productId }],
        //       },
        //     },
        // include: {
        //     cart: true
        // },

    })
    return NextResponse.json(cart)
}



