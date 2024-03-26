import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  const products = await prisma.product.findMany({
    //iniciamos la
    include: {
      ProductComplete: true, //nos incluye los completeproduct en cada objeto
    },
  });
  // console.log(products)
  return NextResponse.json(products);
}

let response = "";
export async function POST(request) {
  const {
    title,
    price,
    previewImg,
    previewImgName,
    previewImgType,
    previewImgData,
    condition,
    shipment,
    qualification,
    sellerEmail,
    categoryIds,
    stock,
    description,
    discount,
    imgName,
    imgType,
    imgData,
  } = await request.json(); //transformamos la peticion a json a js, y se almacenan en title y description
  const seller = await prisma.user.findUnique({
    where: {
      //were se usa para buscar lo que coincida
      email: sellerEmail, //lo que coincida con el email
    },
  });
  const newProduct = await prisma.product.create({
    //linea para crear datos en nuestra base de datos
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
        },
      },
      shipment: shipment,
      qualification: qualification,
      seller: seller.username,
      discount: discount,
      category: {
        connect: categoryIds.map((categoryId) => ({ id: Number(categoryId) })), //reicivimos un array y conectamos cada id del array con product
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
            },
          },
        },
      },
      userProducts: {
        connect: { id: seller.id }, //conectamos con userProducts
      },
    },
    include: {
      ProductComplete: true,
    },
    include: {
      category: true
    },
  });

  return NextResponse.json(newProduct);
}

export async function DELETE(request) {
  const { userEmail, productId } = await request.json();
  const product = await prisma.product.findUnique({
    where: { id: Number(productId) },
    include: {
      ProductComplete: true,
      category: true,
      comments: true,
      Question: true,
      cart: true,
      favorites: true,
      previewImgBase: true,
      userProducts: {
        include: {
          products: true,
        },
      },
    },
  });

  if (product) {
    await prisma.question.deleteMany({
      //borramos todas las preguntas
      where: { productCompleteId: product.productCompleteId },
    }); //eliminamos  todas las preguntas

    if (product?.ProductComplete?.id) {
      //si tiene algo lo borramos
      await prisma.productComplete.deleteMany({
        //eliminamos los datos extras del producto
        where: { id: Number(product.ProductComplete.id) },
      });
    }
    console.log(product);

    await prisma.product.update({//desconectamos a el producto de sus categorias
      where: { id: product.id },//buscamos el producto mediante su id
      data: {
        category: {
          disconnect: product.category.map((c) =>({id:Number( c.id)}))//recorremos el array de categorias, extaemos su Id y le indicamos que desconecte las id de cada una de las categorias
        }
      }
    })  


    await prisma.comment.deleteMany({
      where: { productCompleteId: product.productCompleteId }, //borramos todos los comentarios que tengan el id
    });

    if (prisma.cart.length > 0) {//////////////////HAY QUE ELIMINAR TODOS ESTOS IF Y CAMBIAR LOS UPDATEMANY Y DELETEMANY POR orTrow si es prosible
      //si tiene algo
      await prisma.cart.updateMany({
        where: { id: { in: product.cart.map((c) => c.id) } }, //creamos un array con las id de Cart, los buscamos
        data: {
          products: { disconnect: { id: Number(productId) } }, //aqui desconectamos cada id  del cart que se almaceno en el array previamente creado
        },
      });
    }

    if (product.favorites.length > 0) {
      //si tiene algo
      await prisma.favorites.updateMany({
        //desconectamos relaciones muchos a muchos
        where: { id: { in: product.favorites.map((f) => f.id) } }, //armamos una array con las id de favoritos
        data: {
          products: { disconnect: { id: Number(productId) } }, //desconectamos lso rpoductos de favoritos
        }, //
      });
    }

    if (product.previewImgBase?.id) {
      //si hay id de imagen
      await prisma.productPreviewImage.delete({
        where: { id: product.previewImgBase.id }, //buscamos la imagen de preview
      });
    }

    await prisma.product.delete({
      where: { id: Number(productId) },
    })
    response = "Product Deleted";
  } else {
    response = "Prodcut not found"
  }

  return NextResponse.json(response);
}
