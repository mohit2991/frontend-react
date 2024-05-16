import React, { useState } from "react";
import CounterPrint from "./CounterPrint";
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = (Props) => {
  const { value } = Props;
  // State/Props- Hook
  const [number, setNumber] = useState(0);
  const [array, setArray] = useState([]);

  const increment = () => {
    // let arrayValue = array;
    // arrayValue.push(number + 1);

    // setArray(arrayValue);
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  return (
    <div className="mt-5 mb-5" style={{ textAlign: "center" }}>
      <CounterPrint number={number} />
      <button onClick={increment} className="mt-4">Incement</button>
      <button onClick={decrement}>Decrement</button>
      <div>
        {array.map((elemet) => {
          return <div>{elemet}</div>;
        })}
      </div>
    </div>
  );
};

export default Counter;
