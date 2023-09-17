import React from "react";
import ReactDOM from "react-dom/client";
// import "./App.css";
import TodoFeatures from "./features/Todo";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <section>
    <TodoFeatures />
  </section>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
