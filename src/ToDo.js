import React, { useState, Fragment, useEffect } from "react";

const ToDo = (props) => {
  const { todo } = props;
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    //console.log("1ra vez renderizando");
    fetchData();
  }, []);

  const fetchData = async () => {
    //console.log("Cargando to do's...");

    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    setTodos(todos);
  };

  const CompletedTodos = showCompleted
    ? todos.filter((todo) => todo.completed === true)
    : todos;

  console.log("Completed Todos", CompletedTodos);

  const handleButton = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <Fragment>
      <h1>To Do's</h1>
      <button onClick={handleButton}>
        Mostrar {showCompleted ? "todos" : "completados"}
      </button>
      {CompletedTodos.slice(0, 20).map((todo, idx) => {
        const { userId, id, title, completed } = todo;
        //console.log("ToDo", todo);
        return <li key={idx}>{`${id} ${title}`}</li>;
      })}
    </Fragment>
  );
};

export default ToDo;
