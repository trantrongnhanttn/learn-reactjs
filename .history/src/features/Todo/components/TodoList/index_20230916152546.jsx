import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./styles.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
};

TodoList.defaultProps = {
  todoList: [],
};

function TodoList({ todoList }) {
  return (
    <ul className="todo-list">
      {todoList.map((todo, idx) => (
        <li
          key={todo.id}
          className={classnames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onclick={}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
