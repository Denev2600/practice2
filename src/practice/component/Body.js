import React from "react";
import students from "../variable/students.json";
//import { students } from "../variable/students.js";

export function Body() {
  return (
    <div>
      {students.map((students) => (
        <div key={students.id} className="container">
          <div>id : {students.id}</div>
          <div>name : {students.name}</div>
          <div>age : {students.age}</div>
        </div>
      ))}
    </div>
  );
}
