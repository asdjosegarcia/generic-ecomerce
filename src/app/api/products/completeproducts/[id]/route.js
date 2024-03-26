import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
    const porductcomplete = await prisma.product.findUnique({//encontrar unico
        where: { //were se usa para buscar lo que coincida
            id: Number(params.id)//le decimos que busque lo que corresponda con lo que le mandamos en params.id
        },
        include: {
            userProducts: true,
            ProductComplete: {
                include: {
                    comments: true,
                    question: true,
                    productImages: true,
                }
            }
        },



    })
    // console.log(porductcomplete)
    return NextResponse.json(porductcomplete)//mostramos la tarea en pantalla
}
export async function POST(request, { params }) {
    const { userEmail, productId } = await request.json();
    let product = await prisma.product.findUnique({//encontrar unico
        where: { //were se usa para buscar lo que coincida
            id: Number(params.id)//le decimos que busque lo que corresponda con lo que le mandamos en params.id
        },
        include: {
            userProducts: true,
            ProductComplete: {
                include: {
                    comments: true,
                    question: true,
                    productImages: true,
                }
            }
        },
    })

    if (userEmail ) {//si tenemos el email de usuario le agregaremos una seccion favorite=true a los productos que corresponda
        const user = await prisma.user.findUnique({//
            where: { email: userEmail },
            include: {
                favorites: {
                    include: {
                        products: true
                    }
                }
            },
        })


        const finded = user.favorites.products.find(favorite => favorite.id == product.id)//bucamos en el array la id del los productos favoritos que concida la con la id del prodcuto
        if (finded) {
            product.favorite = true//si el producto esta le agregamos favorite=true
        }
    }

    return NextResponse.json(product)//mostramos la tarea en pantalla
}
