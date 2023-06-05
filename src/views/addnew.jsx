import React, { useState } from 'react';
import axios from 'axios';

function CreateTodo() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('/todos', { title, desc })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Create Todo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={desc} onChange={event => setDesc(event.target.value)} />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateTodo;