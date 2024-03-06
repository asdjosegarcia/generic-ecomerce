import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(request) {
    const { userEmail } = await request.json()
    const user = await prisma.user.findUnique({
        where: { email: userEmail },
        include:{notifications:true}
    })
    // const notifications = await prisma.notifications.findUnique({
    //     where: { userId: user.id },
    //     // include: {
    //     //     products: {
    //     //         include: {
    //     //             previewImgBase: true,
    //     //         }
    //     //     }
    //     // }

    // })
    return NextResponse.json(user)
}

