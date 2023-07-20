import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Basket() {
  //   const [basket, setBasket] = useState({});

  //   const getTravelBasket = () => {
  //     const keys = Object.keys(localStorage);
  //     const travelBasket = keys.map((key) => {
  //       return JSON.parse(localStorage.getItem(key));
  //     });
  //     setBasket(travelBasket);
  //   };

  //   useEffect(() => {
  //     getTravelBasket();
  //   });

  const getBasket = () => {
    const basket = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = JSON.parse(localStorage.getItem(key));
      basket.push(item);
    }
    return basket;
  };

  const deleteItem = (name) => {
    localStorage.removeItem(name);
    window.location.reload();
  };

  return (
    <>
      <h1>장바구니 목록</h1>
      {getBasket().length === 0 && (
        <div className="detail">
          <p>장바구니가 비어있습니다.</p>
          <Link to="/travel">
            <button>상품 페이지로</button>
          </Link>
        </div>
      )}

      {getBasket().map((item) => (
        <div key={item.id} className="detail">
          <h2>{item.name}</h2>
          <p>가격: ${item.price} </p>
          <button>구매하기</button>
          <button
            onClick={() => {
              deleteItem(item.name);
              alert("제거되었습니다.");
            }}
          >
            제거하기
          </button>
        </div>
      ))}
    </>
  );
}
