import React from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './model/todo';

function App() {
  const todos = [new Todo('learn React'), new Todo('Learn TypeScript')]

  return (
    <div className="App">
      <NewTodo />
      <Todos items={todos}/>
    </div>
  );
}

export default App;
