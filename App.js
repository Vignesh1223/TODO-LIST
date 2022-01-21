import React from "react";
import "./style.css";
import TodoList from './TodoList.js';

export default function App() {
  return (
    <div>
      <h1>Daily List Project </h1>
      <p>My ToDo list listed below</p>
      <TodoList/>
    </div>
  );
}
