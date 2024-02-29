import React from 'react'
import './ButtonViewMore.css'
import ExpandMoreSVG from '@/SVG/ExpandMoreSVG'

const ButtomViewMore = (props) => {
  return (
    <button  onClick={()=>{props.function}} className='ButtonViewMore'>
      View More
      <span className='ButtonViewMore__expand-more-container'><ExpandMoreSVG/></span>
      </button>
  )
}

export default ButtomViewMore