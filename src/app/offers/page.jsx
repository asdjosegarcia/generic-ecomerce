'use client'
import React,{useState} from 'react'
import BannerCard from '@/components/molecules/BannerCard'
import './OffersPage.css'
import CategoriesCardList from '@/components/organisms/CategoriesCardList'
import Loading from '@/components/templates/Loading'

const page = () => {
  const [getLoading,setLoading]=useState(true)
  // const [getDesktop,setDesktop]=useState(false)
    // //////////////////////detectamos tamaño de apntalla, por lo general para saber si estamos en desktop o mobile
    // const windowSize = () => {
    //   if (window.innerWidth > 800) {//si es mayor a 800 estamos en desktop
    //     // desktop = true
    //     setDesktop(true)
    //   } else {
    //     setDesktop(false)
    //   }
    // }
    // if (typeof window !== 'undefined') {// si windows no es un defined, esto para evitar errores al generar el build, ya que da problemas por no estar en un navegaor sino en el servidor
    //   window.addEventListener('resize', function (event) { //detecta cuando el tamaño de la pantalla cambia y ejecuta
    //     windowSize()
    //   });
    // }

  return (

        <div className='OffersPage OffersPage__container'>
          {getLoading && <Loading backgroundColor={"rgba(160, 160, 160, 0.164)"}/>}
          <img className='OffersPage__banner-img' src='/img/banners/black-friday-1.jpg'></img>
          <CategoriesCardList /* getDesktop={getDesktop} */ link={'/api/categories/'} setLoading={setLoading}></CategoriesCardList>
        </div>
      
  )
}

export default page
