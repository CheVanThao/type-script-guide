import React from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Todos items={['learn React', 'Learn TypeScript']}/>
    </div>
  );
}

export default App;
