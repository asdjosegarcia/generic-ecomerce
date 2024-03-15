import React from 'react'
import CategoryVerticalCard from '../molecules/CategoryVerticalCard'

const VerticalCategoriesList = () => {
    const [getCategories,setCategories]=useState(null)

    useEffect(() => {
      if(props?.link && getCategories==null){//si getProduct ya tiiene los productos evitamoshacer otra recarga
        fetch(props.link)//realizamos una peticion get a parametro de la url.id
        .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
        .then(data => {                    
            setCategories(/* data[0].products */)
        })
      }
    }, [props.link])
  return (
    <div>
      <CategoryVerticalCard/>
    </div>
  )
}

export default VerticalCategoriesList
