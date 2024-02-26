// let text= '32.3dewe'
// let number= Number(text)
// console.log(number,typeof(number))


import React, { useState } from 'react';

function MyForm() {
  // Definir el estado para almacenar los valores de los inputs
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: ''
  });

  // Controlador de evento para actualizar el estado cuando se cambia el valor de un input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer lo que quieras con los valores de los inputs
    console.log(inputValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="input1"
        value={inputValues.input1}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="input2"
        value={inputValues.input2}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="input3"
        value={inputValues.input3}
        onChange={handleInputChange}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default MyForm;
