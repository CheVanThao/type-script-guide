import React, { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./model/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("learn React"),
    new Todo("Learn TypeScript"),
  ]);

  const addNewTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)
    // setTodos((preState) => [...preState, newTodo]);

    setTodos((prev) => {
      return prev.concat(newTodo)
    })
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addNewTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
