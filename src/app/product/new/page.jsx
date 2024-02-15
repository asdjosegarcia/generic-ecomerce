"use client";
import React, { useState,useEffect } from "react";
import "./NewProdcutPage.css";
import ArchiveSelector from "@/components/molecules/ArchiveSelector";
import MainButton from "@/components/atoms/MainButton";

const page = () => {
  const [getCategories,setCategories]=useState([])
  const [getError, setError] = useState();
  const [getProdcut, setProdcut] = useState({
    title: "",
    price: 0,
    previewImg: "",
    condition: "Used",
    shipment: 0,
    qualification: 0,
    seller: "",
    categoryId: [],
    stock: 11,
    description: "",
    imgName: "",
    imgType: "",
    imgData: "",
  });

  useEffect(() => {
    fetch(`/api/categories`)//realizamos una peticion get a parametro de la url.id
    .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
    .then(data => {                    
        setCategories(data)
        console.log(data)
    })
  }, [])
  

  const inputChange = (event) => {
    let { name, value } = event.target;
    console.log(name, value)
    if (getError !== null) {//si hay algo en errores
      setError()//borramos errores
    }
    switch (true) {
      case name == "price":
        value = Number(value) ? Number(value) : setError({ ...getError, price: "The price can only contain numbers" });
        break;
      case (name == "stock"):
        value = Number(value) ? Number(value) : setError({ ...getError, stock: "The units can only contain numbers" });
        break;
      case (name == "shipment"):
        if (value == "Auto") {
          value = (Math.random() * 10).toFixed(2);//por el momento no tenemos logistica :P
          console.log(value)
        } else {
          value = 0
        }
        break
      case (name=="categoryId"):
        value = Number(value);
        setProdcut({...getProdcut,})
        return //salimos de la funcion sin cargar lo de abajo asi evitar problemas con setProducts
        break;
      default:
    }
    console.log('e')
    setProdcut({
      ...getProdcut,
      [name]: value,
    });
    console.log(getProdcut);
  };

  const create = () => {
    console.log("create");
  };

  return (
    <div className="NewProdcutPage new-porduct-page__container">
      <h1 className="new-prodcut-page__title">Sell your product!</h1>
      <section className="new-product__name-container">
        <p className="new-product__name-title new-product__section-title">
          Product title:
        </p>
        <input
          name="title"
          className="new-product__name-input"
          type="text"
          placeholder="Samsung Galaxy x3 plus"
          onChange={inputChange}
        ></input>
        {getError?.title && <p className="error">{getError.title}</p>}
      </section>
      <section>
        <p className="new-product__section-title">Image:</p>
        <ArchiveSelector
          type={"image"}
          getImage={getProdcut}
          setImage={setProdcut}
        ></ArchiveSelector>
        {getError?.image && <p className="error">{getError.image}</p>}
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
        {getError?.description && <p className="error">{getError.description}</p>}
      </section>
      <section className="new-product_category-container">
        <p className="new-product__category-title new-product__section-title">
          Category:
        </p>
        <span className="new-product__scategory-span-container">
          <form>
            {getCategories?.map(({id,name})=>(<label key={id} ><input type="checkbox"  name="categoryId" onChange={inputChange} value={id}/>{name}</label>))}
            {/* <label>
              <input type="checkbox" name="shipment" value="Auto" onChange={inputChange} />
              &nbsp;category1&nbsp;
            </label>
            <label>
              <input type="checkbox" name="shipment" value={0} onChange={inputChange} />
              &nbsp;category2
            </label>
            <label>
              <input type="checkbox" name="shipment" value={0} onChange={inputChange} />

              <></>
            </label> */}
          </form>
        </span>
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
        {getError?.price && <p className="error">{getError.price}</p>}
      </section>

      <section className="new-product_condition-container">
        <p className="new-product__description-title new-product__section-title">
          Condition:
        </p>
        <span className="new-product__condition-span-container">
          <form>
            <label>
              <input type="radio" name="condition" value="New" onChange={inputChange} />
              &nbsp;New&nbsp;
            </label>
            <label>
              <input type="radio" name="condition" value="Used" onChange={inputChange} />
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
          type="number"
          defaultValue={1}
          min={1}
        ></input>
        {getError?.stock && (<p className="error">{getError.stock}</p>)}
      </section>
      <section className="new-product_shipment-container">
        <p className="new-product__shipment-title new-product__section-title">
          Shipment:
        </p>
        <span className="new-product__shipment-span-container">
          <form>
            <label>
              <input type="radio" name="shipment" value="Auto" onChange={inputChange} />
              &nbsp;Auto&nbsp;
            </label>
            <label>
              <input type="radio" name="shipment" value={0} onChange={inputChange} />
              &nbsp;Free
            </label>
          </form>
        </span>
      </section>
      <section className="new-product_create-container">
        <MainButton text={"Create"} funct={create}></MainButton>
      </section>
    </div>
  );
};

export default page;
