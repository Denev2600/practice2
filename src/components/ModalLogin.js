import React, { useState } from "react";

export default function ModalLogin({ loginStatus, closeButton }) {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/user/${userID}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.password === password) {
          alert(res.id + "님 환영합니다.");
          loginStatus(true);
          closeButton(false);
        } else {
          alert("로그인 실패");
        }
      });
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <h2>로그인</h2>
        <button
          className="modal-close"
          onClick={() => {
            closeButton(false);
          }}
        >
          &times;
        </button>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="아이디"
              onChange={(e) => {
                setUserID(e.target.value);
              }}
              value={userID}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="비밀번호"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>
          <button type="submit">로그인</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              closeButton(false);
            }}
          >
            취소
          </button>
        </form>
      </div>
    </div>
  );
}
