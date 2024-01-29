import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST( request ) {
    const {freeShipping,new: isNew,search,orderBy,userEmail}=await request.json()//new:isNew es para evitar errores con la palabra reservada new de JS
    let property = []//almacenamos los filtros que nos pidan los parametros para usarlos junta=os si es necesario
    let order;//con esta variable seleccionamos el orden que queremos
    console.log({freeShipping,new: isNew,search,orderBy,userEmail})
    let orderByParams={//ordenes predefinidos
        'low-price': { price: 'asc' },//opciones que se selccionaran segun llegue ppeticion, 'low-price','high-price etc'
        'high-price': { price: 'desc' },
        'most-relevant':{views:'desc'}
    }
    if(freeShipping){
        property.push({ shipment: 0, }) 
    }
    if(isNew){
        property.push({ condition: 'New' })
    }
    if(search!==''){
        property.push({title:{contains:search}})//titulo que contenga lo que buscamos
    }
    order=orderBy//se establece en asendente, desendente y las view segun llegue la peticion
    let products = await prisma.product.findMany({//buscar todos los articulos que...
        // take: 10, // limitamos los resultados a 10, funcionalidad para despuess
        where: {//donde..
            AND: property, // propiedad y valor correspondan 
        },
        orderBy:orderByParams[order]//ordernar por
    })

    if(userEmail!==''){//si tenemos el email de usuario le agregaremos una seccion favorite=true a los productos que corresponda
        const user = await prisma.user.findUnique({//
            where: { email: userEmail },
            include: { favorites: true },
        })
    
        const favorites = await prisma.favorites.findUnique({//
            where: { id: user.favorites.id },
            include: { products: true },
        })
    
        products = products.map((product) => { //este codigo podria mejorarse, para bajar la carga, pero por tiempo me veo obligado a crear deuda tecnica
            const finded = favorites.products.find(favorite => favorite.id == product.id)
            if (finded == undefined) {
                return product
            } else {
                finded.favorite=true//agragamos la propiedad favorite
                return finded
            }
        })
    }

    prisma.$disconnect()
    return NextResponse.json(products)
}

// {
//     freeShipping: false,
//     new: false,
//     search: 'ultra',
//     orderBy: 'most-relevant',
//     user: 'user8@gmail.com'
//   }