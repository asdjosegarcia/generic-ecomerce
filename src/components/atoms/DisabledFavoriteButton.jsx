import React from 'react'
import HeartOutlineSVG from '@/SVG/HeartOutlineSVG'

const DisabledFavoriteButton = (props) => {
  const postFavorite = async (event) => {
    event.stopPropagation();//evita que un elemto se propage, es util para que no nos redirija al hacer click en el icono de favorite

    const res = await fetch(`/api/favorites/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: props.email,
        productId: props.productId
      }),
    });
    if (res.ok) {
      props.notification('Added')
      props.favorite(true)
    } else {
      props.notification('Error')
    }
  }
  return (
    <span onClick={postFavorite}>
      <HeartOutlineSVG width={24} height={24} fill={'#3483fa'} />
    </span>
  )
}

export default DisabledFavoriteButton