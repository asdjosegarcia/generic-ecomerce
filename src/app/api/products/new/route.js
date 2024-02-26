// import { NextResponse } from "next/server";
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()
// // const fs = require('fs');


// export async function POST(request){
//   const { name,type,base}=await request.json()//transformamos la peticion a json a js, y se almacenan en title y description
//   // const datos = fs.readFileSync(img);
//   const image=await prisma.ProductImages.create({//linea para crear datos en nuestra base de datos
//     data: {
//       name:name,
//       mimetype:type,
//       data: base,//base es la imagen en base64
//     },
//   })
//   return NextResponse.json(image)
// }

