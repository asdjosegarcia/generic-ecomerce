import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(request) {
    const { email, password, productId } = await request.json()
    if (productId !== undefined) {
        const user = await prisma.user.findUnique({//buscamos 1 unico item en la lista user
            where: { email: email },//cuando encuentra un user con la id userId..
            include: { favorites: true },//incluimos lista favoritos
        })

        const updatedFovorites = await prisma.favorites.update({
            where: { id: user.favorites.id },//buscamos la id de favoritos, para asegurarnos de que el carrito corresponda a el usuario, extaemos la id del carrito del objeto usuario
            data: {//actualizamos el favoritos
                products: {//seleccionamos la tabla product
                    connect: [{ id: productId }],//producto que conectamos, el producto debe existir, si el producto ya esta relacionado no se agrega de nuevo
                },
            },
        });
        return NextResponse.json(updatedFovorites)
    } else {
        const user = await prisma.user.findUnique({//
            where: { email: email },
            include: {
                favorites: {
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
        // const favorites = await prisma.favorites.findUnique({//
        //     where: { id:user.favorites.id},
        //     include: { products: true },
        // })

        return NextResponse.json(user.favorites)
    }
}


export async function DELETE(request) {
    const { email, password, productId } = await request.json()
    const user = await prisma.user.findUnique({//buscamos 1 unico item en la lista user
        where: { email: email },//cuando encuentra un user con el email..
        include: { favorites: true },//incluimos el carrito...
    })

    const updatedFavorites = await prisma.favorites.update({
        where: { id: user.favorites.id },
        data: {//actualizamos Favorites
            products: {//seleccionamos la tabla product
                disconnect: [{ id: productId }],//desconectamos el producto del favorites mediante su id
            },
        },
    });
    return NextResponse.json(updatedFavorites)
}

