import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.title}>
              <td>{todo.title}</td>
              <td>{todo.desc}</td>
              <td>{todo.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;