export {default} from 'next-auth/middleware'//estportamos la funcion que trae next-auth/middleware

export const config = {
    matcher: [
      '/product/buy/:path*',
      '/cart/:path*',
      '/favorites/:path*',
      '/product/new',
      '/user/notifications',
      '/user/purchases',
      '/user/products',
      '/user/profile'
    ]


  }