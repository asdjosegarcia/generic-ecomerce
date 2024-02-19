"use client"
import React from 'react'
import ArchiveSelector from '../molecules/ArchiveSelector'
import { useState } from 'react'

let imagesInpputNumber=3
let onlyRender=true
let objects={}
let archiveSelectors=[]
const ImagesInputList = () => {
    // const [getloading,setLoading]=useState()
    const [getImagesList,setImagesList]=useState()
    const addImage=()=>{
        
    }
    if(onlyRender){
        for (let i = 0; i < imagesInpputNumber; i++) {//creamos un objeto  segun la cantidad de imagenes que se requieran
            objects[i]={}
        }
        onlyRender=false
        setImagesList(objects)
    }
    if(getImagesList && archiveSelectors.length<2){
        for (let i = 0; i < imagesInpputNumber; i++){
            archiveSelectors.push(<ArchiveSelector key={i} type={"image"} setImage={addImage} getImage={getImagesList[i]}/>);
        }

    }
    // console.log(getImagesList)
    return (
    <div>
        {/* {archiveSelectors.map((i,index)=>(<ArchiveSelector key={index} type={"image"} setImage={getImagesList} getImage={setImagesList}  ></ArchiveSelector>))} */}
        {archiveSelectors}
    
    </div>
  )
}

export default ImagesInputList