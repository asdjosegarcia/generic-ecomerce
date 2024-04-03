import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(request) {
    const { userEmail } = await request.json()
    const user = await prisma.user.findUnique({
        where: { email: userEmail },
    })
    const products=await prisma.userPurchases.findUnique({
        where:{userId:user.id},
        include: {
            purchasedProduct: true
        }
        
    })
    // console.log(user)
    return NextResponse.json(products)
}

export async function PATCH(request) {
    const { userEmail,productId,units,paymentType,products } = await request.json()
    if(products){
        // console.log();

        const user = await prisma.user.findUnique({
            where: { email: userEmail },
            include: { notifications: true }//es necesario para crear la notificacion del producto
        })
        
        products.map( async(product)=>{
            const originalProduct=await prisma.product.findUnique({
                where:{id:product.productId},
                include:{
                    previewImgBase:true,
                }
            })

            const userPurchases=await prisma.userPurchases.findUnique({
                where:{userId:user.id},
                include:{
                    purchasedProduct:true
                }
            })

            const newPurchasedProduct=await prisma.purchasedProduct.create({
                data: {
                    originalId:originalProduct.id,
                    title:originalProduct.title,
                    price:originalProduct.price,
                    condition:originalProduct.condition,
                    shipment:originalProduct.shipment,
                    seller:originalProduct.seller,
                    paymentType:paymentType,
                    previewImg:originalProduct.previewImg,
                    previewImgBase:originalProduct.previewImgBase.data,
                    previewImgMimetype:originalProduct.previewImgBase.mimetype,
                    units:product.units,
                    userPurchasesId:userPurchases.id
                }
            })

            const newProductNotification = await prisma.notification.create({//creamos una notificacion en las notificaciones del usuario, indicando que el producto se compro
                data: {
                    type: 20,
                    title:"Purchase completed!",
                    description: `Did you buy ${newPurchasedProduct.title} x${newPurchasedProduct.units} `,
                    link: '/user/purchases',
                    notificationsId: user.notifications.id,
                    product:{
                        connect:[{id:product.productId}]
                    }
                }
            })



        })


        return NextResponse.json('ok')
        



    }else{ //esto tendria que retirarse, pero no me dan los tiempos para modificar el codigo del frontend
        const user = await prisma.user.findUnique({
            where: { email: userEmail },
            include: { notifications: true }//es necesario para crear la notificacion del producto
        })
        const originalProduct=await prisma.product.findUnique({
            where:{id:productId},
            include:{
                previewImgBase:true,
            }
    
        })
        const userPurchases=await prisma.userPurchases.findUnique({
            where:{userId:user.id},
            include:{
                purchasedProduct:true
            }
        })
    
        const newPurchasedProduct=await prisma.purchasedProduct.create({
            data: {
                originalId:originalProduct.id,
                title:originalProduct.title,
                price:originalProduct.price,
                condition:originalProduct.condition,
                shipment:originalProduct.shipment,
                seller:originalProduct.seller,
                paymentType:paymentType,
                previewImg:originalProduct.previewImg,
                previewImgBase:originalProduct.previewImgBase.data,
                previewImgMimetype:originalProduct.previewImgBase.mimetype,
                units:units,
                userPurchasesId:userPurchases.id
            }
        })
    
        const newProductNotification = await prisma.notification.create({//creamos una notificacion en las notificaciones del usuario, indicando que el producto se compro
            data: {
                type: 20,
                title:"Purchase completed!",
                description: `Did you buy ${newPurchasedProduct.title} x${newPurchasedProduct.units} `,
                link: '/user/purchases',
                notificationsId: user.notifications.id,
                product:{
                    connect:[{id:productId}]
                }
            }
        })
        // console.log(user)
        return NextResponse.json(newPurchasedProduct)
    }
}

export async function DELETE(request) {
    const { userEmail, productId } = await request.json()
    const user = await prisma.user.findUnique({
        where: { email: userEmail },//agregamos el email solo como medida de seguridad para asegurarnos de que quien eleimina el producto es el dueño del producto
        include:{
            userPurchases:{//buscamos dentro de el modelo de almacenamiento de prodcutos comprados unico por usuario
                include: {
                    purchasedProduct:{//en los productos comprados
                        where:{originalId:productId}//buscamos la id original del producto
                    }
                }
        }
    }
    })
    const userPurchasedDeleted = await prisma.purchasedProduct.delete({
        where: {
            id: user.userPurchases.purchasedProduct[0].id
        }
    })
    return NextResponse.json(userPurchasedDeleted)
}