import React, { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./model/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Learn TypeScript"),
  ]);

  const addNewTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)
    // setTodos((preState) => [...preState, newTodo]);

    setTodos((prevState) => {
      return prevState.concat(newTodo)
    })
  };

  const removeTodoHandler = (TodoId: string) => {
    setTodos(prevState => {
      return prevState.filter(todo => todo.id !== TodoId)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addNewTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
