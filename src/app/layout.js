import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/organisms/Navbar';
import 'normalize.css';
import { FuncionProvider } from "../context/contexto.jsx";
import { Rubik } from 'next/font/google'//funte

const rubik = Rubik({//fuente
  weight: ['300', '400', '500', '700',],
  subsets: ['latin'],
})


// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Open Comerce',
  description: 'Created by asdjosegarcia',
  image: '/img/open-trade.png'/* no funciona :/ */
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="image/x-icon" href="/favicon.ico" />
        <title>Open Trade</title>
        {/* <meta property="og:image" content="/img/open-trade.png" />
        <meta property="og:description" content="TEST_META_DESCRIPTION" /> */}

      </head>
      <body className={rubik.className} >
        <div className='GeneralBackground'>
          <FuncionProvider>
            <Navbar />
            {/* <LoadUserData></LoadUserData> */}
            {children}
          </FuncionProvider>
        </div>
      </body>
    </html>
  )
}


