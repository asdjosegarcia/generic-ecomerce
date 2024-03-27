import React from 'react'
import HeartOutlineSVG from '@/SVG/HeartOutlineSVG'
// import Router from 'next/router'
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation'


const DisabledFavoriteButton = (props) => {
  const router = useRouter();
  const postFavorite = async (event) => {
    event.stopPropagation();//evita que un elemto se propage, es util para que no nos redirija al hacer click en el icono de favorite
    if(props.email !== undefined){

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
    }else{
      // alert('loguearse')
      router.push('/auth/login');
    }

  }
  return (
    <span onClick={postFavorite} className='DisabledFavoriteButton'>
      <HeartOutlineSVG width={24} height={24} fill={'#3483fa'} />
    </span>
  )
}

export default DisabledFavoriteButton