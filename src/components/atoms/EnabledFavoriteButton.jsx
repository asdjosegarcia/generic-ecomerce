import React from 'react'
import HeartSVG from '@/SVG/HeartSVG'

const EnabledFavoriteButton = (props) => {
  const deleteFavorite = async (event) => {
    event.stopPropagation();//evita que un elemto se propage, es util para que no nos redirija al hacer click en el icono de favorite
    const res = await fetch(`/api/favorites/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: props.email,
        productId: props.productId
      }),
    });
    if (res.ok) {
      props.notification('Deleted')
      props.favorite(false)
    } else {
      props.notification('Error')
    }
  }
  return (
    <span onClick={deleteFavorite}>
      <HeartSVG width={24} height={24} fill={'#3483fa'} />
    </span>
  )
}

export default EnabledFavoriteButton