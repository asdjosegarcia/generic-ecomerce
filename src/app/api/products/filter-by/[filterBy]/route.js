import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
    let order;//con esta variable seleccionamos el orden que queremos
    let orderByParams={//ordenes predefinidos
        'low-price': { price: 'asc' },
        'high-price': { price: 'desc' },
        'most-relevant':{views:'desc'}
    }
    let property = []//almacenamos los filtros que nos pidan los parametros para usarlos junta=os si es necesario
    if (params.filterBy.includes('freeShipping')) {
        console.log('free')
        property.push({ shipment: 0, })
    }
    if (params.filterBy.includes('new')) {
        console.log('new')
        property.push({ condition: 'New' })
    }


    let toOrder;
    let toSearch;
    const indexOrder = params.filterBy.indexOf('orderby=')//extraemos la posicion de la primer letra de orderby
    const indexSearch = params.filterBy.indexOf('search=')
    const indexEmail = params.filterBy.indexOf('email=')
    if (indexOrder !== -1 && indexSearch !== -1) {//si la peticion tiene search y order
        toSearch = params.filterBy.substring(indexSearch + 7, indexOrder)//extraemos lo que dice luego de search= y antes de orderby=
        toOrder = params.filterBy.substring(indexOrder + 8,indexEmail)//extraemos lo que dice luego de orderby
        property.push({title:{contains:toSearch}})
        order=toOrder


    } else if (indexOrder !== -1) {//si la peticion teiene order
        toOrder = params.filterBy.substring(indexOrder + 8)//extraemos lo que dice luego de orderby= 
        order=toOrder
    }
    else if (indexSearch !== -1) {//si la peticion tiene search
        toSearch = params.filterBy.substring(indexSearch + 7)//extraemos lo que dicce luego de search=
        property.push({title:{contains:toSearch}})
    }

    let products = await prisma.product.findMany({//buscar todos los articulos que...
        take: 10, // limitamos los resultados a 10
        where: {//donde..
            AND: property, // propiedad y valor correspondan 
        },
        orderBy:orderByParams[order]//ordernar por

    })

    ///////////////////////////// agregamos productos favoritos del usuario
    if(indexEmail !== -1){
        const userEmail = params.filterBy.substring(indexEmail + 6)
        console.log(userEmail)

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



    return NextResponse.json(products)
}

