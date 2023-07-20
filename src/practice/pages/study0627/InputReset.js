import React, { useState } from "react";

export default function InputReset() {
  const [text, setText] = useState("");

  const InputText = (e) => {
    setText(e.target.value);
  };

  const Reset = () => {
    setText("초기화 됨");
  };

  return (
    <div>
      <input value={text} onChange={InputText}></input>
      <p>{text}</p>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}
