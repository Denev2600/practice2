import React, { useState } from "react";

export default function Updater() {
  const [number, setNumber] = useState(0);
  const [total, setTotal] = useState(0);

  const Increment = () => {
    if (number >= 90) {
      setNumber(number - 90);
      setTotal((prev) => prev + 1);
    } else {
      setNumber((prev) => prev + 1);
      setTotal((prev) => prev + 1);
    }
  };

  return (
    <div>
      <p>
        당신의 뽑기 누적횟수는 {total}입니다.(확정: {number}/90 )
      </p>
      <button
        onClick={() => {
          Increment();
          Increment();
          Increment();
          Increment();
          Increment();
          Increment();
          Increment();
          Increment();
          Increment();
          Increment();
        }}
      >
        10회 뽑기
      </button>
      <button
        onClick={() => {
          Increment();
        }}
      >
        1회 뽑기
      </button>
    </div>
  );
}
