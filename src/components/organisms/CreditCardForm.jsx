"use client'"
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import "./CreditCardForm.css";
import PuchaseComplete from "@/components/organisms/PuchaseComplete";


let prodcutsToBuy = []
const CreditCardForm = (props) => {
  const { data: session } = useSession();
  const [getPuchaseComplete, setPuchaseComplete] = useState(null)//despues lo cambiamos por false
  // console.log(props.products);

  const request = async () => {
    props.products.map((product) => {
      prodcutsToBuy.push({ //añadimos la id del prodcuto y la cantidad a  el array, para luego enviarlo en la peticion
        productId: product.id,
         units:(product.cartProductQuantities)? product.cartProductQuantities[0].quantity : props.quantity  //si no tiene cantidad la tomamos de props
        })
    })

    const res = await fetch(`/api/user/purchases`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userEmail: session.user.email,
        paymentType: "credit card",
        products: prodcutsToBuy
      }),
    });
    // const data = await res.json();
    // console.log(await data)
    if (res.ok) {
      setPuchaseComplete(true)
    } else {
      alert('error')
    }
  }



  // console.log(session?.user?.name);

  return (
    <div className="credit-card-form__container">
      <p className="credit-card-form__title">Confirm Purchase</p>
      <label className="credit-card-form__owner">Owner</label>
      <input className="credit-card-form__owner-input" type="text" />
      <label className="credit-card-form__cvv" htmlFor="">CVV</label>
      <input className="credit-card-form__cvv-input" type="text" placeholder="114" maxLength="3" />
      <label className="credit-card-form__number" htmlFor="">Card Number</label>
      <input className="credit-card-form__number-input" type="text" />
      <label className="credit-card-form__expiration-mm">Expiration date</label>
      <div className="credit-card-form__expiration-input">
        <input className="credit-card-form__expirtation-mm-input" /* type="number" */ placeholder="MM" maxLength="2" /* min="1" max="12" */ />
        <p>/</p>
        <input className="credit-card-form__expiration-yy-input" /* type="number" */ placeholder="YY" maxLength="2" /* min="0" max="99" */ />
      </div>
      <div className="credit-card-form__credit-cards-logos">
        <img src="/img/visa-logo.png" alt="" />
        <img src="/img/mastercard-logo.png" alt="" />
      </div>
      {/* <input type="date" id="expiracion" name="expiracion" min="2022-01" max="2030-12"></input> */}
      <button onClick={() => request()} className="credit-card-form__confirm-button"  >Confirm </button>
      {getPuchaseComplete && (<PuchaseComplete username={session?.user?.name}></PuchaseComplete>)}

    </div>
  );
};

export default CreditCardForm;
