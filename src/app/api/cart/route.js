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
    let productQuantity;
    const { email, password, productId, quantity } = await request.json()
    if (quantity == undefined) {//si no recivimos una cantidad
        productQuantity = 1 //la cantidad de ese prodcuto en el carrito sera 1
    } else {
        productQuantity = quantity//la cantidad de ese prodcuto en el carrito sera quantity
    }

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
                cartProductQuantities: {
                    create: {//creamos un item en el  cartProductQuantities[]
                        quantity: productQuantity, //catidad de productos
                        product: {  //
                            connect: { id: productId }
                        }
                    }
                }
            },
        });
        const response = `Product ${productId} x${productQuantity} added to cart`
        return NextResponse.json(response)


    } else {
        const user = await prisma.user.findUnique({
            where: { email: email },
            include: {
                cart: true
            },
        })
        const cartWithProductQuantities = await prisma.cart.findUnique({//
            where: { id: user.cart.id },
            include: {
                products: {
                    include: {
                        previewImgBase: true,
                        cartProductQuantities: {
                            where: { cartId: user.cart.id }
                        },

                    },
                },

            }
        })
        // console.log(cartWithProductQuantities);
        delete cartWithProductQuantities.password;//funcion desactivada por el momento

        return NextResponse.json(cartWithProductQuantities)
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
            cartProductQuantities: {
                deleteMany: {//borramos todos los cartProductQuantities que tengan la id del producto
                    productId: productId,
                },
            },

        },
    });
    return NextResponse.json(updatedCart)
}

export async function PATCH(request) {
    const { email, password, products } = await request.json()
    const user = await prisma.user.findUnique({
        where: { email: email },
        include: {
            cart: true
        },
    })

    products.map(async(product) => {
         await prisma.cartProductQuantity.updateMany({
            where: {
                cartId: user.cart.id,//esto podria evitarse usando directamente la id del product quantity pero no lo voy a hacer por falta de tiempo
                productId: product.id
            },
            data: {
                quantity: product.quantity
            }
        });
    })


    return NextResponse.json(`ok`)

}

