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
        <p className="new-product__name-title new-product__section-title">Product title:</p>
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
        <ArchiveSelector type={"image"} getImage={getProdcut} setImage={setProdcut}  ></ArchiveSelector>
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

