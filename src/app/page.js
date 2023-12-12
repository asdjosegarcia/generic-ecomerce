import Image from 'next/image'
import styles from './page.module.css'
import Main from './containers/Main'
import { FuncionProvider } from "./context/contexto.jsx";





export default function Home() {
  return (
    <>
      <FuncionProvider>
        <Main></Main>
      </FuncionProvider>
    </>
  )
}
