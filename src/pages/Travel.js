import React, { useState, useEffect } from "react";
import axios from "axios";
import TravelItems from "../components/TravelItems";

export default function Travel() {
  const [travel, setTravel] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const getTravels = async () => {
    axios
      .get("http://localhost:8080/travel")
      .then((res) => {
        setTravel(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addTravel = () => {
    axios
      .post("http://localhost:8080/travel", {
        name,
        description: content,
        image,
      })
      .then((res) => {
        setName(name);
        setContent(content);
        setImage(image);
        getTravels();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTravels();
  }, []);

  return (
    <>
      <div className="detail">
        <h2>추가하기</h2>
        <form>
          <div>
            이름:{" "}
            <input
              type="text"
              placeholder="이름"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            내용:{" "}
            <input
              type="text"
              placeholder="내용"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </div>
          <div>
            사진:
            <input
              type="url"
              placeholder="http://"
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              addTravel();
              setName("");
              setContent("");
              setImage("");
            }}
          >
            추가하기
          </button>
        </form>
      </div>
      {travel.map((data) => (
        <TravelItems key={data.id} travel={data} />
      ))}
    </>
  );
}
