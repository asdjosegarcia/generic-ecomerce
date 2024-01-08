import React from "react";
import { useSession } from "next-auth/react";
import "./CreditCardForm.css";

const CreditCardForm = () => {
  const { data: session } = useSession();

  console.log(session?.user?.name);

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
      <input className="credit-card-form__expirtation-mm-input" type="text" placeholder="MM" maxLength="2" />
      <p>/</p>
      <input className="credit-card-form__expiration-yy-input" type="text" placeholder="YY" maxLength="2" />
      </div>
      <div className="credit-card-form__credit-cards-logos">
      <img src="/img/visa-logo.png" alt="" />
      <img src="/img/mastercard-logo.png" alt="" />
      </div>
      {/* <input type="date" id="expiracion" name="expiracion" min="2022-01" max="2030-12"></input> */}
      <button className="credit-card-form__confirm-button">Confirm </button>
    </div>
  );
};

export default CreditCardForm;
