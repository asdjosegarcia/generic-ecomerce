import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function GET(request, { params }){
    const products=await prisma.category.findMany({//iniciamos la 
        include: {
            // products: true,//nos incluye los productos que tienen este categoria
            categoryImg:true,
          },
        }) 
    return NextResponse.json(products)
}

export async function POST(request,{params}){
    const {name,imgUrl,imgName,imgMimetype,imgData}=await request.json()//
    const newCategory=await prisma.category.create({
        data:{
            name:name,
            categoryImg:{
                imgUrl:imgUrl,
                name:imgName,
                mimetype:imgMimetype,
                data:imgData,
            }
        },
    })
    return NextResponse.json(newCategory)
}

export async function PATCH(request,{params}){
    const { id,name,imgUrl,imgName,imgMimetype,imgData}=await request.json()//
    const updatedCategory=await prisma.category.update({
        where:{id:id},
        data:{
            name:name,
            categoryImg:{
                imgUrl:imgUrl,
                name:imgName,
                mimetype:imgMimetype,
                data:imgData,
            }
        },
    })
    return NextResponse.json(updatedCategory)
}
