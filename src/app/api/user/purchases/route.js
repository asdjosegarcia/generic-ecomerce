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
    console.log(user)
    return NextResponse.json(products)
}

export async function PATCH(request) {
    const { userEmail,productId,units } = await request.json()
    const user = await prisma.user.findUnique({
        where: { email: userEmail },

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
            previewImg:originalProduct.previewImg,
            previewImgBase:originalProduct.previewImgBase.data,
            previewImgMimetype:originalProduct.previewImgBase.mimetype,
            units:units,
            userPurchasesId:userPurchases.id
            
        }
    })
    // console.log(user)
    return NextResponse.json(newPurchasedProduct)
}
