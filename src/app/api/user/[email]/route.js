import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
    
    const user = await prisma.user.findUnique({//
        where: { email:params.email },
    })
    const {password, ...filterUserData}=user//removemos la password

    return NextResponse.json(filterUserData)
}


