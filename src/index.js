import React from "react";
import ReactDOM from "react-dom";
import Todo from "./components/Todo";
import Animations from "./components/Animations";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Animations />
      <Todo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
