import React from 'react'
import FilterBy from '@/components/molecules/FilterBy'
import OrderBy from '../atoms/OrderBy'
import './TopMenu.css'

const TopMenu = () => {
  return (
    <div className='top-menu__container'>
        <div className='top-menu__div-order'>
          <OrderBy></OrderBy>
        </div>
        <div className='top-menu__div-filter'>
          <FilterBy></FilterBy>
        </div>
    </div>
  )
}

export default TopMenu