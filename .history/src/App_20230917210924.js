import React, { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);
  function handleTodoClick(todo) {}
  return (
    <div>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
