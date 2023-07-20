import React, { useState } from "react";

export default function Form() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(20);

  const nameSpace = (e) => {
    setText(e.target.value);
  };

  const IncreaseNumber = () => {
    setNumber(number + 1);
  };

  const DecreaseNumber = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <input value={text} onChange={nameSpace}></input>
      <button onClick={IncreaseNumber}>증가</button>
      <button onClick={DecreaseNumber}>감소</button>
      <p>
        {text}의 나이는 {number}가 맞나요?
      </p>
    </div>
  );
}
