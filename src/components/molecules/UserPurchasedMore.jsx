import React from "react";
import "./UserPurchasedMore.css";
import MainButton from "../atoms/MainButton";
import CopySVG from "@/SVG/CopySVG";

const UserPurchasedMore = (props) => {
    //////Fechas
    const date = new Date(props.product.createdAt); //creamos un objeto con new date que tiene funciones
    const options = {
        weekday: "long", // 'short', 'long', 'narrow' como se va a mostrar el dia de la semana
        year: "numeric", // '2-digit', 'numeric' como se va a mostrar el año
        month: "long", // 'short', 'long', 'numeric', '2-digit' como se  va a mostrar el mes
        day: "numeric", // '2-digit', 'numeric' como se va a mostrar el dia
    };
    const formatedDate = date.toLocaleDateString("en-US", options); //en-US formato de region, en este caso eeuu

    /////Copiar Texto
    const copyText=()=>{
        const text = `Order Nº: ${props.product.id} \nSeller: ${props.product.seller} \nPayment: ${props.product.paymentType} \nPurchase Date: ${formatedDate}`;
        navigator.clipboard.writeText(text) //usamos API Clipboard para copiar el texto a el portapapeles del usuario
            .then(() => {
                // Mostrar un mensaje de éxito
                alert("Texto copiado al portapapeles!");
            })
            .catch((err) => {
                // Manejar cualquier error que pueda ocurrir
                console.error("Error al copiar texto: ", err);
            });
    }

    return (
        <div className="UserPurchasedMore user-purchased-more__container">
            <p>Order Nº: {props.product.id}</p>
            <p>Seller: {props.product.seller}</p>
            <p>Payment: {props.product.paymentType}</p>
            <p>Purchase Date: {formatedDate}</p>
            <button onClick={() => { copyText(); }}>Copy <CopySVG width={"15px"}></CopySVG> </button>
        </div>
    );
};

export default UserPurchasedMore;
