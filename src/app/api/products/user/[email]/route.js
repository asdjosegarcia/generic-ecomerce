import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request, { params }) {

    const allProducts = await prisma.product.findMany({}) //todos los products

    const user = await prisma.user.findUnique({//
        where: { email: params.email },
        include: { favorites: true },
    })
    const favorites = await prisma.favorites.findUnique({//
        where: { id: user.favorites.id },
        include: { products: true },
    })


    const filteredItems = allProducts.map((product) => { //este codigo podria mejorarse, para bajar la carga, pero por tiempo me veo obligado a crear deuda tecnica
        const finded = favorites.products.find(favorite => favorite.id == product.id)
        if (finded == undefined) {
            return product
        } else {
            finded.favorite=true//agragamos la propiedad favorite
            return finded
        }
    })





    return NextResponse.json(filteredItems)
}






