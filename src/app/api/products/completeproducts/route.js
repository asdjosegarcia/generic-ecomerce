import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function GET() {
  console.log('hola')
  const products = await prisma.product.findMany({//iniciamos la 
    include: {
      ProductComplete: true,//nos incluye los completeproduct en cada objeto
    },
  })
  // console.log(products)
  return NextResponse.json(products)
}

export async function POST(request) {
  const { title, price, previewImg, previewImgName, previewImgType, previewImgData, condition, shipment, qualification, sellerEmail, categoryIds, stock, description, imgName, imgType, imgData, email } = await request.json()//transformamos la peticion a json a js, y se almacenan en title y description
  const seller = await prisma.user.findUnique({
    where: { //were se usa para buscar lo que coincida
      email: sellerEmail//lo que coincida con el email
    },
  })
  const newProduct = await prisma.product.create({//linea para crear datos en nuestra base de datos
    data: {
      title: title, //podria solo poner 1 vez title ya que asi llega, pero lo pongo 2 veces para que sea mas didactico
      price: price,
      // description: description,
      previewImg: previewImg,
      condition: condition,
      previewImgBase: {
        create: {
          name: previewImgName,
          mimetype: previewImgType,
          data: previewImgData,
        }
      },
      shipment: shipment,
      qualification: qualification,
      seller: seller.username,
      category: {
        connect: categoryIds.map((categoryId) => ({ id: Number(categoryId) })) //reicivimos un array y conectamos cada id del array con product
      },
      ProductComplete: {
        create: {
          stock: stock,
          description: description,
          productImages: {
            create: {
              name: imgName,
              mimetype: imgType,
              data: imgData,
            }
          }
        },
      },
      userProducts: {
        connect: { id: seller.id },//conectamos con userProducts
      },

    },
    include: {
      ProductComplete: true,
    },
  })

  return NextResponse.json(newProduct)
}

export async function DELETE(request) {
  const { userEmail,productId } = await request.json()
  // const user = await prisma.user.findUnique({
  //   where: { //were se usa para buscar lo que coincida
  //     email: userEmail//lo que coincida con el email
  //   },
  // })
  // const 
  const productImagesRemoved = await prisma.ProductImages.deleteMany({ //eliminamos todas la imagenes
    where: {
      productCompleteId:Number(productId)
    }
  })
  const productPreviewImgRemoved = await prisma.ProductPreviewImage.delete({//elimnamos la imagen de preview
    where: {
      productId:Number(productId)
    }
  })

  const productCompleteRemoved = await prisma.productComplete.delete({//eliminamos los datos extras del producto
    where: {
      id:Number(productId)
    }
  })
  const productRemoved = await prisma.product.delete({//eliminamos el producto
    where: {
       id:Number(productId)
    },
    include:{ProductComplete:true}
  })

  return NextResponse.json( productRemoved,productCompleteRemoved,productPreviewImgRemoved,productImagesRemoved)
}
