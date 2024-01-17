import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function GET(request, { params }){
    const carts=await prisma.user.findMany({//
        include: {
            cart: true,//nos da los carts
          },
        }) 
    return NextResponse.json(carts)
}

export async function POST(request) {
    const {userId,password,productId}=await request.json()
    const user = await prisma.user.findUnique({//buscamos 1 unico item en la lista user
        where: { id: userId },//cuando encuentra un user con la id userId..
        include: { cart: true },//incluimos el carrito...
      })

    const updatedCart = await prisma.cart.update({
        where: { id: user.cart.id },//buscamos la id del carrito, para asegurarnos de que el carrito corresponda a el usuario, extaemos la id del carrito del objeto usuario
        data: {//actualizamos el carrito
            products: {//seleccionamos la tabla product
                connect: [{ id: productId }],//producto que conectamos, el producto debe existir, si el producto ya esta relacionado no se agrega de nuevo
            },
        },
    });
    return NextResponse.json(updatedCart)
}


export async function DELETE(request) {
    const {userId,password,productId}=await request.json()
    const user = await prisma.user.findUnique({//buscamos 1 unico item en la lista user
        where: { id: userId },//cuando encuentra un user con la id userId..
        include: { cart: true },//incluimos el carrito...
      })

    const updatedCart = await prisma.cart.update({
        where: { id: user.cart.id },//buscamos la id del carrito, para asegurarnos de que el carrito corresponda a el usuario, extaemos la id del carrito del objeto usuario
        data: {//actualizamos el carrito
            products: {//seleccionamos la tabla product
                disconnect: [{ id: productId }],//desconectamos el producto del cart mediante su id
            },
        },
    });
    return NextResponse.json(updatedCart)
}


