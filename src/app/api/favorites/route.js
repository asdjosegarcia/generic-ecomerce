import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(request) {
    const {email,password,productId}=await request.json()
    const user = await prisma.user.findUnique({//buscamos 1 unico item en la lista user
        where: { email: email },//cuando encuentra un user con la id userId..
        include: { cart: true },
        include: { favorites: true },//incluimos lista favoritos
      })

    const updatedFovorites = await prisma.favorites.update({
        where: { id: user.favorites.id },//buscamos la id del carrito, para asegurarnos de que el carrito corresponda a el usuario, extaemos la id del carrito del objeto usuario
        data: {//actualizamos el carrito
            products: {//seleccionamos la tabla product
                connect: [{ id: productId }],//producto que conectamos, el producto debe existir, si el producto ya esta relacionado no se agrega de nuevo
            },
        },
    });
    return NextResponse.json(updatedFovorites)
}