import React, { useState } from "react";

export default function FormObjectAdvance() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInfo = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <label>
          <p>이름: </p>
          <input
            placeholder="이름을 입력하세요"
            name="firstName"
            onChange={handleInfo}
          />
        </label>
        <label>
          <p>성: </p>
          <input
            placeholder="성을 입력하세요"
            name="lastName"
            onChange={handleInfo}
          />
        </label>
        <label>
          <p>이메일: </p>
          <input
            type="email"
            placeholder="이메일을 입력하세요"
            name="email"
            onChange={handleInfo}
          />
        </label>
        <div>
          <h2>입력한 정보를 확인하세요.</h2>
          {form.firstName ? (
            <p>이름: {form.firstName}</p>
          ) : (
            <p>이름을 입력하지 않았습니다.</p>
          )}
          {form.lastName ? (
            <p>성: {form.lastName}</p>
          ) : (
            <p>성을 입력하지 않았습니다.</p>
          )}
          {form.email ? (
            <p>이메일: {form.email}</p>
          ) : (
            <p>이메일을 입력하지 않았습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}
