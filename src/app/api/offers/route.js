import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(request) {
    const { userEmail } = await request.json()
    // const user = await prisma.user.findUnique({
    //     where: { email: userEmail },
    // })
    const products=await prisma.product.findMany({
        where:{discount:{gt: 0 }},// "gt" greater than (mayor que)
        
        
    })
    return NextResponse.json(products)
}