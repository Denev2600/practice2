import React from "react";
import Header from "../component/Header";
import { Body } from "../component/Body";
import Footer from "../component/Footer";

export default function Home() {
  // const students = [
  //   { id: 1, name: "Denev", age: 31 },
  //   { id: 2, name: "David", age: 31 },
  //   { id: 3, name: "Daehyun", age: 31 },
  //   { id: 4, name: "Aether", age: 31 },
  //   { id: 5, name: "Stelle", age: 31 },
  // ];

  return (
    <div>
      <Header />
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
