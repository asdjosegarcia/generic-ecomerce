import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


///////////////////////////////////////create users perfiles imgs
//a esta consulta se aplica si funciona no lo toques por que solo se ejecuta una vez
export async function PATCH(request) {
    const { updateId} = await request.json()

    const users = await prisma.user.findMany({
        where: { userProfileImg: null },//buscamos todos los uduarios que no tenga imagen de perfil
        include: {
            userProfileImg: true//incluimos la imagen de su perfil(antes de crearla seria null)
        },

    })
    const userProfileImg = users.map(async(user)=>{ //para cada usuario sin imagen de perfil
        await prisma.userProfileImg.create({//creamos una imagen
            data: {
                mimetype: "", 
                user: { connect: { id: user.id } }//asociamos la imagen con la id del usuario
            }
        })
    }) 
    const {password, ...filterUserData}=users//removemos la password


    return NextResponse.json(filterUserData)
}


