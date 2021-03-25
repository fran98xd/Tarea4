import React, { Fragment, useState } from "react";

const GuiaTelefonica = () => {
  const [persons, setPersons] = useState([
    { name: "Hoose", number: "3141066664" }
  ]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setPhoneNumber] = useState("");

  const handleNombre = (e) => {
    const { target } = e;
    const { value } = target;

    setNewName(value);
  };

  const handleNumero = (e) => {
    const { target } = e;
    const { value } = target;

    setPhoneNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPersonObject = {
      name: newName,
      number: newPhoneNumber
    };
    console.log("newPerson", newPersonObject);

    // filter es una función de JS que me permite
    // filtrar los objetos que cumplan la condicion
    // de adentro

    if (persons.filter((item) => item.number === newPhoneNumber).length) {
      alert("Ya hay un número que existe");
    } else if (newPhoneNumber.length > 10) {
      alert("El número no puede ser mayor a 10");
    } else {
      setPersons(persons.concat(newPersonObject));
      setNewName("");
      setPhoneNumber("");
    }
  };
  return (
    <Fragment>
      <h1>Guía Telefónica</h1>
      <button>Mostrar todos</button>
      <ul>
        {persons.map((person, idx) => {
          const { name, number } = person;
          console.log("item", person);
          console.log("name", name);
          console.log("number", number);
          return <li key={idx}>{`${name} ${number}`}</li>;
        })}
        <li>Teléfono 1</li>
      </ul>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre" />
        <input placeholder="Telefono" />
        <button type="submit">Guardar nota</button>
      </form>
    </Fragment>
  );
};
export default GuiaTelefonica;
