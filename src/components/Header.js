import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalLogin from "./ModalLogin";

export default function Header() {
  const [loginView, setLoginView] = useState(false);
  const [loginResult, setLoginResult] = useState(false);

  return (
    <div className="navbar">
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/blog">
        <button>blog</button>
      </Link>
      <Link to="/menu">
        <button>menu</button>
      </Link>
      <Link to="/Travel">
        <button>Travel</button>
      </Link>
      <Link to="/Basket">
        <button>Basket</button>
      </Link>
      {loginResult ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            setLoginView(false);
            setLoginResult(false);
            window.alert("로그아웃되었습니다.");
          }}
        >
          로그아웃
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            setLoginView(true);
          }}
        >
          로그인
        </button>
      )}
      {loginView && (
        <ModalLogin loginStatus={setLoginResult} closeButton={setLoginView} />
      )}
    </div>
  );
}

// Link, useNavigate
