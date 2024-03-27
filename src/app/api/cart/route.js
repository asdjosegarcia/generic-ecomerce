import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function GET(request, { params }) {
    const carts = await prisma.user.findMany({//
        include: {
            cart: true,//nos da los carts
        },
    })
    return NextResponse.json(carts)
}

export async function POST(request) {
    const { email, password, productId } = await request.json()
    if (productId !== undefined) {
        const user = await prisma.user.findUnique({//buscamos 1 unico item en la lista user
            where: { email: email },//cuando encuentra un user con la id userId..
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
    } else {
        const user = await prisma.user.findUnique({//
            where: { email: email },
            include: {
                cart: {
                    include: {
                        products: {
                            include: {
                                previewImgBase: true
                            }
                        }
                    }
                }
            },
        })
        return NextResponse.json(user.cart)
    }
}


export async function DELETE(request) {
    const { email, password, productId } = await request.json()
    const user = await prisma.user.findUnique({//buscamos 1 unico item en la lista user
        where: { email: email },//cuando encuentra un user con el email..
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


