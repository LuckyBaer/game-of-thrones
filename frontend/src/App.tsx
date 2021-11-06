import React, { useEffect, useState } from "react";
import "./App.css";
import { getHouseByName, getHouses } from "./Api/get";

function App() {
  const [houses, setHouses] = useState();

  useEffect(() => getHouseByName("House", setHouses), []);

  console.log(houses);
  return <div className="App">Something</div>;
}

export default App;
