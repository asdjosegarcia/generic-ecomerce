import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
    
    const cart = await prisma.cart.findUnique({//
        where: { id:Number( params.id )},
        
    })
    return NextResponse.json(cart)
}

// const user=2;
// const productId=15;
// export async function GET(request, { params }) {
//     const updatedCart = await prisma.cart.update({
        
//         where: { id: Number(params.id) },//buscamos la id del carrito
//         data: {//actualizamos el carrito
//             products: {//seleccionamos la tabla product
//                 connect: [{ id: productId }],//producto que conextamos, el producto debe existir, si el producto ya existe
//             },
//         },
//     });
//     return NextResponse.json(updatedCart)
// }









