import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(request) {
    const { userEmail } = await request.json()
    const user = await prisma.user.findUnique({
        where: { email: userEmail },
    })
    const products=await prisma.userPurchases.findUnique({
        where:{userId:user.id},
        include: {
            purchasedProduct: true
        }
        
    })
    console.log(user)
    return NextResponse.json(products)
}