import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoList } from './TodoList';
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById('todo-app'));
root.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);
