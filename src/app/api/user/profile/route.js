import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(request) {
    const { userEmail, type, title, description, icon, link,id,productId } = await request.json()
    const user = await prisma.user.findUnique({//
        where: { email:userEmail },
        include:{
            userProfileImg:true
        }
    })
    const {password, ...filterUserData}=user//removemos la password

    return NextResponse.json(filterUserData)
}

