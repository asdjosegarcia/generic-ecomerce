import React from 'react'

const BadgetStars = (props) => {
    const completeStars=Math.floor(props.qualification);
    const emptyStars=Math.floor(5-props.qualification);
    let midStar=1
    if(props.qualification%2  == 0.00){
        midStar=0
    }
    console.log({completeStars,midStar,emptyStars})
    // const starts[]
    
  return (
    <span>{

      
      }</span>
  )
}

export default BadgetStars