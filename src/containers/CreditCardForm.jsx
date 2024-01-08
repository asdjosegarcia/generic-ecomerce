import React from 'react';
import { useSession } from 'next-auth/react';

const CreditCardForm = () => {
  const { data: session } = useSession();
  
  console.log(session?.user?.name)

  return (
    <div className='credit-card-form__container'>
       <input type="text" />
       <input type="text" />
       <input type="text" />
       <input type="date" id="fecha" name="fecha"></input>
       <button>Confirm </button>  
    </div>
  );
};

export default CreditCardForm;
