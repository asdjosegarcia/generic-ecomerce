

//en nextjs cuando hacemos un refresh o cambio, nextjs vuelve a vargar el servidor volviendo a el estado inicial volviendo a pedir una conexion
//minetras mas modificaciones mas conexiones con la DB, eso puede generar problemas al desarrollar, para evitar esto se utiliza un bloque de codigo
//para manejar esas situaciones 

//este codigo lo encontramos en //https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
//este ya se transformo de codigo ts a js
import { PrismaClient } from '@prisma/client'

// Define una función que devuelve una nueva instancia de PrismaClient
const prismaClientSingleton = () => { //cuando cargamos el modulo se eejecuta esta funcion
  return new PrismaClient()
}
// Hace referencia al objeto global (`window` en el navegador, `global` en Node.js)
const globalForPrisma = globalThis 

// Utiliza la instancia existente de PrismaClient si ya está creada,
// de lo contrario, crea una nueva instancia llamando a prismaClientSingleton
const prisma = globalForPrisma.prisma ?? prismaClientSingleton() //si existe lo toma, de lo contrario genera uno nuevo

// Exporta la instancia de PrismaClient para su uso en otros archivos
export default prisma

// Si no estamos en un entorno de producción, asigna la instancia de PrismaClient
// a `globalForPrisma.prisma` para que pueda ser reutilizada en el mismo servidor
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
