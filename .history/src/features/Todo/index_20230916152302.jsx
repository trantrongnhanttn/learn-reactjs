import React, { useState } from "react";
import TodoList from "./components/TodoList";

TodoFeatures.propTypes = {};

function TodoFeatures(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },

    const [] = useState(initTodoList);

  ];
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default TodoFeatures;
