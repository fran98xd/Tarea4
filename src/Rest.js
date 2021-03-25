import React, { useState, Fragment, useEffect } from "react";

const Rest = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("1ra vez renderizando");
    handleLoadUsers();
  }, []);

  const handleLoadUsers = async () => {
    console.log("Cargando usuarios...");

    /*  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json)) => {
    console.log(json);
    console.log("Fin");
    });
  };*/

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
  };

  console.log("Users", users);

  return (
    <Fragment>
      <h1>Usuarios</h1>
      {users.length === 0 ? (
        <Fragment>
          <p>No hay usuarios aún</p>
          {/*<button onClick={handleLoadUsers}>Carga mis usuarios</button>*/}
        </Fragment>
      ) : (
        <p>Hay usuarios</p>
      )}
    </Fragment>
  );
};

export default Rest;
