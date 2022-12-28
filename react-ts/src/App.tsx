import React, { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./model/todo";

function App() {
  const [todos, setTodos] = useState([
    new Todo("learn React"),
    new Todo("Learn TypeScript"),
  ]);

  const addNewTodoHandler = (newTodo: string) => {
    // setTodos((preState) => [...preState, newTodo]);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addNewTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
