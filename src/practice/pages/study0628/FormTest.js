import React, { useState } from "react";

export default function FormTest() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [message, setMessage] = useState("");

  const firstName = (e) => {
    setFirst(e.target.value);
  };

  const lastName = (e) => {
    setLast(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFirst("");
    setLast("");
    setMessage(`안녕하세요. ${last} ${first} 입니다.`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={first}
          placeholder="first name"
          onChange={firstName}
        ></input>
        <input value={last} placeholder="last name" onChange={lastName}></input>
        <button type="submit">Submit</button>
        <h2>{message}</h2>
      </form>
    </div>
  );
}
