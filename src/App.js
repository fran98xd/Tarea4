import "./styles.css";
/*import Notas from "./Notas.js";
import GuiaTelefonica from "./GuiaTelefonica.js";
import Asincrono from "./Asincrono";
import Rest from "./Rest";*/
import ToDo from "./ToDo";
/*import Counter from "./Counter";
import Cursos from "./Cursos.js";*/
//import Conditional from "./Conditional.js";

const notes = [
  {
    id: 1,
    content: "Html es facil",
    date: "2020-01-01",
    important: true
  },
  {
    id: 2,
    content: "Los navagadores solo pueden ejecutar Javascript, HTML y CSS",
    date: "2020-01-20",
    important: false
  },
  {
    id: 3,
    content: "Para hacer peticiones Rest se usa GET y POST",
    date: "2020-01-11",
    important: false
  }
];

const courses = [
  {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: "Node.js",
    id: 2,
    parts: [
      {
        name: "Routing",
        exercises: 3,
        id: 1
      },
      {
        name: "Middlewares",
        exercises: 7,
        id: 2
      }
    ]
  }
];

export default function App() {
  return (
    <div>
      {/*
      }
      <Notas notes={notes} />
      <Conditional totalMessages={10} />
      <Cursos courses={courses} />
      <GuiaTelefonica />
      <Rest />
      */}
      <ToDo />
    </div>
  );
}
