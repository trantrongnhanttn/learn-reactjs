import React, { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);
  return (
    function handleTodoClick(todo){

    }
    <div>
      <TodoList todos={todoList} onTodoClick={handleTodoClick(todo)} />
    </div>
  );
}

export default App;
