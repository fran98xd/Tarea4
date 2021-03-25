import React from "react";

const Asincrono = () => {
  // Lenguaje de programación que se
  // ejecuta en un sólo hilo
  // Sólo puede ejecutar una cosa a la vez
  // en todo su proceso de vida
  const uno = () => {
    setTimeout(() => {
      console.log("Uno");
    }, 0);
    dos();
    console.log("Tres");
  };
  const dos = () => {
    setTimeout(() => {
      console.log("Dos");
    }, 1000);
  };
  const handleClick = () => {
    console.log("Inicio");
    uno();
    console.log("Fin");
  };
  return <button onClick={handleClick}>Click</button>;
};

export default Asincrono;
