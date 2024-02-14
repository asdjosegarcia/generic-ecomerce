"use client";
import React, { useState } from "react";
import "./NewProdcutPage.css";
import ArchiveSelector from "@/components/molecules/ArchiveSelector";
import MainButton from "@/components/atoms/MainButton";

const page = () => {
  const [getProdcut, setProdcut] = useState({
    title: "",
    price: 0,
    previewImg:"",
    condition: "Used",
    shipment: 0,
    qualification: 0,
    seller: "",
    categoryId: 5,
    stock: 11,
    description:"",
    imgName: "",
    imgType: "",
    imgData: "",
  });

  const inputChange = (event) => {
    const { name, value } = event.target;
    setProdcut({
      ...getProdcut,
      [name]: value
    });
    // console.log(name, value);
    console.log(getProdcut)
  };

  const create = () => {
    console.log("create");
  };

  return (
    <div className="NewProdcutPage new-porduct-page__container">
      <h1 className="new-prodcut-page__title">Sell your product!</h1>
      <section className="new-product__name-container">
        <p className="new-product__name-title">Product title:</p>
        <input
          name="title"
          className="new-product__name-input"
          type="text"
          placeholder="Samsung Galaxy x3 plus"
          onChange={inputChange}
        ></input>
      </section>
      <section>
        <p className="new-product__section-title">Image:</p>
        <ArchiveSelector></ArchiveSelector>
      </section>
      <section className="new-product__description-container">
        <p className="new-product__description-title new-product__section-title">
          Description:
        </p>
        <textarea
          onChange={inputChange}
          name="description"
          className="new-product__description-textarea"
          placeholder="Smartphone xxx model xxxx  "
        ></textarea>
      </section>
      <section className="new-product_price-container ">
        <p className="new-product__description-title new-product__section-title">
          Price:
        </p>
        <span className="new-product__price-span-container">
          <input
            onChange={inputChange}
            name="price"
            className="new-product__price-input"
            type="text"
            pattern="^\d*(\.\d{0,2})?$" //decimales
            min={0}
            max={99999}
            inputMode="numeric" //teclado numerico en mobiles
            placeholder="5.60"
          ></input>
          <p> &nbsp; $</p>
        </span>
      </section>
      <section className="new-product_condition-container">
        <p className="new-product__description-title new-product__section-title">
          Condition:
        </p>
        <span className="new-product__condition-span-container">
          <form>
            <label>
              <input type="radio" name="options" value="true" />
              &nbsp;New&nbsp;
            </label>
            <label>
              <input type="radio" name="options" value="false" />
              &nbsp;Used
            </label>
          </form>
        </span>
      </section>
      <section className="new-product__units-container">
        <p className="new-product__section-title">Units available:</p>
        <input
          name="stock"
          onChange={inputChange}
          className="new-product__units-input"
          type="Number"
          defaultValue={1}
          min={1}
        ></input>
      </section>
      <section className="new-product_shipment-container">
        <p className="new-product__shipment-title new-product__section-title">
          Shipment:
        </p>
        <span className="new-product__shipment-span-container">
          <form>
            <label>
              <input type="radio" name="options" value="true" />
              &nbsp;Auto&nbsp;
            </label>
            <label>
              <input type="radio" name="options" value="false" />
              &nbsp;Free
            </label>
          </form>
        </span>
      </section>
      <section className="new-product_create-container">
        {/* <button>Create</button> */}
        <MainButton text={"Create"} funct={create}></MainButton>
      </section>
    </div>
  );
};

export default page;

// 'use client'
// import React,{useState} from 'react';

// let file;
// const UploadImageForm = () => {
//   const [getImage,setImage]=useState()

//   const uploadImage = async (file) => {
//     const reader = new FileReader();//llamamos a el lector de archivos de javascript
//     reader.onload = async function (e) {// Cuando la lectura del archivo se complete ejecuta esta funcion
//       const base64Image = reader.result.split(',')[1];//split(',') separa la cadena en la primer , y con 1 seleccionamos la cadena restante
//       console.log(base64Image); // muestra la imagen en base64 por consola
//       setImage(base64Image)
//       // Aquí puedes enviar la imagen Base64 al backend para su almacenamiento
//       const res = await fetch(`/api/products/new/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: file.name,
//           type:file.type,
//           base: base64Image,
//         }),
//       });
//       if (res.ok) {
//         console.log('Uploaded')
//       } else {
//         console.log('Error')
//       }
//     };
//     reader.readAsDataURL(file);//lee el contenido de los datos como url de datos (base64)
//   };

//   const handleFileInputChange = (event) => {
//      file = event.target.files[0];//obtenemmos el archivo 0 ssubido por el usuario(la imagen)

//   };

//   const butonUpload=()=>{
//     uploadImage(file)
//   }

//   return (
//     <div>
//       <h2>Upload Image</h2>
//       <input type="file" onChange={handleFileInputChange} />
//       <button onClick={butonUpload}>Upload</button>
//       <img src={`data:image/png;base64,${getImage}`}></img>
//     </div>
//   );
// };

// export default UploadImageForm;
