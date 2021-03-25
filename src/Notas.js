import React, { useState, useEffect } from "react";

const Nota = (props) => {
  const { note } = props;

  return <li>{note.content}</li>;
};

const Notas = (props) => {
  const { notes } = props;
  const [notas, setNotas] = useState(notes);
  const [nuevaNota, setNuevaNota] = useState("");
  const [showImportant, setShowImportant] = useState(false);

  // Setnotas puede ir en cualquier lado
  // salvo en el render
  // Notas puede ir en cualquier lado

  useEffect(() => {
    //console.log("Notas", notas);
  }, [notas]);

  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      content: nuevaNota,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notas.length + 1
    };

    setNotas(notas.concat(noteObject));
    setNuevaNota("");
  };
  const handleNoteChange = (e) => {
    const { target } = e;
    const { value } = target;

    setNuevaNota(value);
  };
  const handleButton = () => {
    setShowImportant(!showImportant);
  };
  console.log("showimportant", showImportant);

  const notasAMostrar = showImportant
    ? notas.filter((note) => note.important === true)
    : notas;

  console.log("Notas a mostrar", notasAMostrar);
  return (
    <div>
      <h1>Notas</h1>
      <button onClick={handleButton}>
        Mostrar {showImportant ? "todos" : "importantes"}
      </button>
      <ul>
        {notasAMostrar.map((note) => (
          <Nota key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={nuevaNota} onChange={handleNoteChange} />
        <button type="submit">Guardar nota</button>
      </form>
    </div>
  );
};

export default Notas;
