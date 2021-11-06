import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  fetch("/api/houses")
    .then((res) => res.json())
    .then((x) => console.log(x));
  return <div className="App">Something</div>;
}

export default App;
