import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './containers/Navbar';
import 'normalize.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Open Comerce',
  description: 'Created by asdjosegarcia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar></Navbar>
        {children}
        </body>
    </html>
  )
}
