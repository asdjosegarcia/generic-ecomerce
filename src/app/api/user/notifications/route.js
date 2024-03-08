import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(request) {
    const { userEmail } = await request.json()
    const user = await prisma.user.findUnique({
        where: { email: userEmail },
        include: { 
            notifications: {
                include:{
                    Notification:true
                }
            }
         }
    })

    return NextResponse.json(user)
}

export async function PATCH(request) {
    const { userEmail, type, title, description, icon, link } = await request.json()
    const user = await prisma.user.findUnique({
        where: { email: userEmail },
        include: { notifications: true }
    })

    let newNotification;
    switch (true) {//al ser diferente notificaciones estas tendran tipos ej notificacion por compra sera tipo 20-29 y notificacion basica tipo 10-19, tipo texto 0-9
        case (type == null):
            break;
        case (type == 0):
            newNotification = await prisma.notification.create({
                data: {
                    type: type,
                    title: title,
                    description: description,
                    link: link,
                    notificationsId: user.notifications.id
                }
            })

            break;
        case (type == 10):
            newNotification = await prisma.notification.create({
                data: {
                    type: type,
                    title: title,
                    description: description,
                    icon: icon,//aun no se me ocurre la mejor forma de manejar iconos
                    link: link,
                    notificationsId: user.notifications.id
                }
            })

            break;
        case (type == 20):
            newNotification = await prisma.notification.create({
                data: {
                    type: type,
                    title: title,
                    description: description,
                    icon: icon,//aun no se me ocurre la mejor forma de manejar iconos
                    link: link,
                    notificationsId: user.notifications.id
                }
            })
            break;
        default:
    }




    return NextResponse.json(newNotification)
}


