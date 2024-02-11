
'use client'
import React,{useState} from 'react';

let file;
const UploadImageForm = () => {
  const [getImage,setImage]=useState()
  
  const uploadImage = async (file) => {
    const reader = new FileReader();//llamamos a el lector de archivos de javascript
    reader.onload = async function (e) {// Cuando la lectura del archivo se complete ejecuta esta funcion
      const base64Image = reader.result.split(',')[1];//split(',') separa la cadena en la primer , y con 1 seleccionamos la cadena restante
      console.log(base64Image); // muestra la imagen en base64 por consola
      setImage(base64Image)
      // Aquí puedes enviar la imagen Base64 al backend para su almacenamiento
      const res = await fetch(`/api/products/new/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: file.name,
          type:file.type,
          base: base64Image,
        }),
      });
      if (res.ok) {
        console.log('Uploaded')
      } else {
        console.log('Error')
      }
    };
    reader.readAsDataURL(file);//lee el contenido de los datos como url de datos (base64)
  };

  const handleFileInputChange = (event) => {
     file = event.target.files[0];//obtenemmos el archivo 0 ssubido por el usuario(la imagen)    
  };

  const butonUpload=()=>{
    uploadImage(file)
  }

  return (
    <div>
      <h2>Upload Image</h2>
      <input type="file" onChange={handleFileInputChange} />
      <button onClick={butonUpload}>Upload</button>
      <img src={`data:image/png;base64,${getImage}`}></img>
    </div>
  );
};

export default UploadImageForm;
