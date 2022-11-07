import React, { Profiler, useMemo } from "react";
import { useState } from "react";
import "../styles/App.css";
import primeNumber from "../function";

const App = () => {
  return <OptimizeTheOperation />;
};

const OptimizeTheOperation = ({ onClick }) => {
  const [number, setNumber] = useState(10000);

  const prime = primeNumber(number);

  const submitHandler = (event) => {
    event.preventDefault();
    setNumber(Number(event.target.num.value));
  };

  return (
    <div>
      <button id="render" onClick={onClick}>
        Re-render
      </button>
      <br />
      Enter the number:
      <form onSubmit={submitHandler}>
        <input id="num" />
        <button id="submit" type="submit">
          Click me uwu
        </button>
      </form>
      <br />
      <div className="width">
        Result of expensive operation:
        <ul>
          {prime.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <br />
    </div>
  );
};

export default App;
