export {default} from 'next-auth/middleware'//estportamos la funcion que trae next-auth/middleware

/* const config={
matcher:['/product']
} */
export const config = {
    matcher: '/product/buy/:path*',
  }