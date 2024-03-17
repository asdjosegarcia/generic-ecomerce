"use client";
import React from "react";
import "./ArchiveSelector.css";
import AddPhotoSVG from "@/SVG/AddPhotoSVG";

let file
let img64
const ArchiveSelector = (props) => {
  
  const handleFileInputChange = (event) => {
    file = event.target.files[0]; //obtenemmos el archivo 0 ssubido por el usuario(la imagen)
    
    if(props.type=="image"){
      const reader = new FileReader();//creamos una instancia de reader,
      reader.readAsDataURL(file)//leemos datos de la imagen
      reader.onload = ()=> {// Cuando la lectura del archivo se complete ejecuta esta funcion
        // console.log(reader.result)
       img64=reader.result.split(',')[1];//split(',') separa la cadena en la primer , y con 1 seleccionamos la cadena restante
       props.setImage({...props.getImage,imgName:file.name,imgType:file.type,imgData:img64})
      }
    }
  };
    

  return (
    <div className="archive-selector__container ArchiveSelector">
      <input
        className="archive-selector__input"
        type="file"
        accept="image/*" //solo imagenes, quitando esto acepta cualquier otro archivo
        onChange={handleFileInputChange}
      />
      {(img64)? <img className="archive-selector__img-preview" src={'data:'+file.type+';base64,'+img64}></img> :<AddPhotoSVG/>}
      {/* <AddPhotoSVG></AddPhotoSVG> */}
      <label htmlFor="file-input" className="archive-selector__button">
        {props.title}
      </label>
    </div>
  );
};

export default ArchiveSelector;
