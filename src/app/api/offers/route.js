import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function POST(request) {
    let products;
    const { userEmail,categoryId } = await request.json()
    console.log(categoryId);

    // const user = await prisma.user.findUnique({
    //     where: { email: userEmail },
    // })
    if(categoryId=='all'){
        products=await prisma.product.findMany({
            where:{discount:{gt: 0 }},// "gt" greater than (mayor que)
        })
            products={
                // name:"all",
                products:products
            }
        
    }else{
    // products='queso';

        products=await prisma.category.findMany({
            // where:{discount:{gt: 0 }},// "gt" greater than (mayor que)
            where: { //were se usa para buscar lo que coincida
                id: Number(categoryId)//le decimos que busque lo que corresponda con lo que le mandamos en params.id
            },include:{
                products:{
                    where:{discount:{gt: 0 }},
                    include:{
                        previewImgBase:true
                    }
                }
            }
        })
        products=products[0]

    }
    return NextResponse.json(products)
}