import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import TodoList from './views/seetodos.jsx';
import AddTodo from './views/addnew.jsx';

function App() {
  return (
    <Router>
      <div>
        <h1>My Todo App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todos">See Todos</Link>
            </li>
            <li>
              <Link to="/addtodo">Add todos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/todos" element={<TodoList/>} />
          <Route path="/addtodo" element={<AddTodo/>} />
          <Route path="/" element={<h2>Welcome to the app</h2>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;