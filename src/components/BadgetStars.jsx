import React from 'react'
import EmptyStarSVG from '../SVG/EmptyStarSVG';
import HalftStarSVG from '../SVG/HalftStarSVG';
import CompleteStarSVG from '../SVG/CompleteStarSVG';
// import 

const BadgetStars = (props) => {
  const allStar = []
  const completeStars = Math.floor(props.qualification);
  const emptyStars = Math.floor(5 - props.qualification);
  let midStar = 1
  if (props.qualification % 2 == 0.00) {
    midStar = 0
  }
  // console.log({ completeStars, midStar, emptyStars })
  for (let i = 0; i < 5; i++) {
    switch (true) {
      case (i < completeStars):
        allStar.push(<CompleteStarSVG fill={'#3483fa'} key={i} />)
        break;
      case (i== completeStars && midStar==1):
        allStar.push(<HalftStarSVG fill={'#3483fa'}  key={i} />)
        break;
      default:
        allStar.push(<EmptyStarSVG fill={'#3483fa'}  key={i}/>)

    }


  }


  return (
    <span className='badgetStars'>
      {allStar.map((item,index) => ( item))}
    </span>
  )
}

export default BadgetStars