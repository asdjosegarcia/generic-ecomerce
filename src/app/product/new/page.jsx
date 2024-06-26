"use client";
import React, { useState, useEffect, useContext } from "react";
import "./NewProdcutPage.css";
import ArchiveSelector from "@/components/molecules/ArchiveSelector";
import MainButton from "@/components/atoms/MainButton";
import { useSession } from 'next-auth/react';
import { variableContext } from "@/context/contexto";
import { useRouter } from 'next/navigation'
import PlusSVG from "@/SVG/PlusSVG";
import Loading from "@/components/templates/Loading";


let email = ''
const page = () => {
  const contexto = useContext(variableContext)
  const router = useRouter();
  const [getPreviewImage, setPreviewImage] = useState()
  const { data: session } = useSession();//cargamos datos del usuario en session   
  const [getCategories, setCategories] = useState(null)
  const [getError, setError] = useState();
  const [getLoading, setLoading] = useState(false);
  const [getProduct, setProduct] = useState({
    title: "",
    price: 0,
    discount: 0,
    previewImg: "",
    condition: "Used",
    shipment: 0,
    qualification: 0,
    sellerEmail: '',
    categoryIds: [],
    stock: 0,
    description: "",
    previewImgName: "",
    previewImgType: "",
    previewImgData: "",
    imgName: "", //esto requiere cambios para agregar varias imagenes a Complete prodcuts
    imgType: "",
    imgData: "",
  });

  useEffect(() => {
    if (getCategories == null) {
      fetch(`/api/categories`)//peticion GET para traer las categorias disponibles
        .then(res => res.json())//tranformamos la respuesta a json y almacenamos en data
        .then(data => {
          setCategories(data)
        })
    }
    if (getProduct.sellerEmail === '' && session?.user.email !== undefined) {//
      email = session.user.email
      setProduct({ ...getProduct, sellerEmail: email, })//carga de email del vendedor si no hay nada
    }
    if (getProduct.previewImgName !== getPreviewImage?.imgName) {
      setProduct({ ...getProduct, previewImgName: getPreviewImage?.imgName, previewImgType: getPreviewImage?.imgType, previewImgData: getPreviewImage?.imgData, imgName: getPreviewImage?.imgName, imgType: getPreviewImage?.imgType, imgData: getPreviewImage?.imgData })
      //hay que modificar esto cuando se agreguen carga de mas imagenes
    }

  }, [getProduct, getPreviewImage])


  const inputChange = (event) => {
    let { name, value } = event.target;
    // console.log(name, value)
    console.log(getProduct)
    if (getError !== null) {//si hay algo en errores
      setError()//borramos errores
    }

    switch (true) {
      case name == "price":
        value = Number(value) ? Number(value) : setError({ ...getError, price: "The price can only contain numbers" });
        break;
      case name == "discount":
        value = Number(value) ? Number(value) : setError({ ...getError, discount: "The discount can only contain numbers" });

        // console.log('hola');
        break;
      case (name == "stock"):
        value = Number(value) ? Number(value) : setError({ ...getError, stock: "The units can only contain numbers" });
        break;
      case (name == "shipment"):
        if (value == "Auto") {
          value = Number((Math.random() * 10).toFixed(2));//por el momento no tenemos logistica :P
          // console.log(value)
        } else {
          value = 0
        }
        break
      case (name == "categoryIds"):
        value = Number(value);
        if (getProduct.categoryIds.includes(value)) {//si ela lista de categorias ya contiene el valor/categoryId
          value = getProduct.categoryIds.filter((category) => (category !== value) ? category : null) //filtramos todos las categorias que no correspondan con el valor
          setProduct({ ...getProduct, categoryIds: value })//cargamos el array filtrado en categoryIds
        } else {
          setProduct({ ...getProduct, categoryIds: [...getProduct.categoryIds, value] })//cargamos la nueva categoria
        }
        return //salimos de la funcion sin cargar lo de abajo asi evitar problemas con setProducts
      default:
    }
    setProduct({ ...getProduct, [name]: value, });
  };

  const create = async () => {
    // console.log(getProduct);
    // console.log("create");
    setLoading(true)

    const res = await fetch(`/api/products/completeproducts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(getProduct),
    });
    const data = await res.json();
    if (res.ok) {
      contexto.setNotificationText('Product for sale!')
      router.push(`/product/${data.id}`)
    } else {
      contexto.setNotificationText('Error')
      setLoading(false)
    }

  };

  return (
    <>
      {getLoading && <Loading backgroundeColor={"rgba(0, 0, 0, 0.303)"}></Loading>}
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
          <p className="new-product__section-image">Image:</p>

          <ArchiveSelector
            type={"image"}
            getImage={getPreviewImage}
            setImage={setPreviewImage}
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
            Categories:
          </p>
          <span className="new-product__category-span-container">
            <form>
              {getCategories?.map(({ id, name }) => (<label key={id} ><input type="checkbox" name="categoryIds" onChange={inputChange} value={id} /><p>{name}</p></label>))}
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

        <section>
          <p className="new-product__description-title new-product__section-title">
            Discount:
          </p>
          <span className="new-product__discount-span-container">
            <input
              onChange={inputChange}
              name="discount"
              className="new-product__discount-input"
              type="number"
              pattern="^\d*(\.\d{0,2})?$" //decimales
              min={0}
              max={99}
              maxLength="2"
              inputMode="numeric" //teclado numerico en mobiles
              placeholder="25"
            ></input>
            <p> &nbsp; %</p>
          </span>
          {getError?.discount && <p className="error">{getError.discount}</p>}
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
          <MainButton text={"Create"} funct={create} icon={<PlusSVG></PlusSVG>}></MainButton>
        </section>
      </div>
    </>
  );
};

export default page;
