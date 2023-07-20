import React from "react";
import db from "../../variable/ClassDB.json";

export default function Class() {
  const dbMap = (dataArray) => {
    return dataArray.map((db) => (
      <ul key={db.id} className="container">
        <li>
          <div>id: {db.id}</div>
          <div>name: {db.name}</div>
          <div>position: {db.position}</div>
        </li>
      </ul>
    ));
  };

  return (
    <div>
      <h1>Silver</h1>
      {dbMap(db.silver)}
      <h1>Gold</h1>
      {dbMap(db.gold)}
      <h1>Diamond</h1>
      {dbMap(db.diamond)}
      <h1>Challenger</h1>
      {dbMap(db.challenger)}
    </div>
  );
}
