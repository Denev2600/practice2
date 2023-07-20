import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Blog() {
  const [members, setMembers] = useState([]);
  const [text, setText] = useState("");

  const getMembers = async () => {
    axios
      .get("http://localhost:8080/member")
      .then((res) => {
        setMembers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect((e) => {
    getMembers();
  }, []);

  console.log(members);
  return (
    <div>
      {members.map((el, idx) => (
        <div key={idx}>
          <div>
            <h2>{el.name}</h2>
          </div>
          <div>
            <p>{el.job}</p>
          </div>
        </div>
      ))}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios.put("http://localhost:8080/member", { name: text });
        }}
      >
        <input
          type="text"
          name="name"
          value={members.name}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit">이름 수정하기</button>
      </form>
    </div>
  );
}
