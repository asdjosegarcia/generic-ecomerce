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

export async function PATCH(request) {
    const { userEmail,username,imgMimetype,imgData } = await request.json()
    const updatedUser = await prisma.user.update({//
        where: { email:userEmail },
        include:{ //incluimos esto solo para que nos incluya los datos en la respuesta
            userProfileImg:true
        },
        data:{
            username:username,
                userProfileImg:{
                    update: {
                        mimetype: imgMimetype,
                        data: imgData
                      }
                }
        }
    })
    const {password, ...filterUserData}=updatedUser//removemos la password

    return NextResponse.json(filterUserData)
}
