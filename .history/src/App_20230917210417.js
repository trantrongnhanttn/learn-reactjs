import React, { useState } from "react";

function App(props) {
  const [TodoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);
  return (
    <div>
      <TodoList todos={TodoList} />
    </div>
  );
}

export default App;
