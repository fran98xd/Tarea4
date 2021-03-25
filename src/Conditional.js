import React, { Fragment } from "react";

const Conditional = (props) => {
  const { totalMessages } = props;

  // REnder
  // Para poder usar un condicional dentro
  // de mi renderizado, debo usarlo de la
  // siguiente manera. Si uso if else debe
  // ser (condicion) ? if : else
  // si solo necesito la condicion if,
  // (condicion) && JSX

  return (
    <Fragment>
      <h1>Elemento 1</h1>
      {totalMessages > 0 && <h2>Tu tienes mensajes.</h2>}
      {totalMessages > 0 ? (
        <h2>Tu tienes mensajes</h2>
      ) : (
        <h2>No tienes mensajes.</h2>
      )}
    </Fragment>
  );
};

export default Conditional;
