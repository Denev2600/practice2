import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  const decreaseNumber = () => {
    setNumber(number - 1);
  };

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <button onClick={decreaseNumber}>-</button>
      {number}
      <button onClick={increaseNumber}>+</button>
    </div>
  );
}
