import React, { useState } from "react";
import db from "../../variable/db.json";

export default function Card() {
  const [cardView, setCardView] = useState(true);
  const [worker, setWorker] = useState({
    name: "",
    photo: "",
    job: "",
    year: "",
  });
  const [newWorker, setNewWorker] = useState([]);

  const handleWorker = (e) => {
    setWorker({ ...worker, [e.target.name]: e.target.value });
  };

  const addWorker = () => {
    setNewWorker([
      ...newWorker,
      {
        name: worker.name,
        photo: worker.photo,
        job: worker.job,
        year: worker.year,
      },
    ]);
    setWorker({
      ...worker,
      name: "",
      photo: "",
      job: "",
      year: "",
    });
  };

  return (
    <div>
      <div className="container">
        <div>
          이름:{" "}
          <input
            value={worker.name}
            type="text"
            name="name"
            onChange={handleWorker}
          />
        </div>
        <div>
          사진:{" "}
          <input
            type="url"
            value={worker.photo}
            name="photo"
            onChange={handleWorker}
          />
        </div>
        <div>
          직업:{" "}
          <input
            type="text"
            value={worker.job}
            name="job"
            onChange={handleWorker}
          />
        </div>
        <div>
          연차:{" "}
          <input
            type="number"
            value={worker.year}
            name="year"
            onChange={handleWorker}
          />
        </div>
        <div>
          <button onClick={addWorker}>추가하기</button>
        </div>
      </div>
      <button onClick={() => setCardView(true)}>카드 보기</button>
      <button onClick={() => setCardView(false)}>테이블 보기</button>
      {cardView ? (
        <>
          {db.member.map((data, index) => (
            <div key={index}>
              <div>
                <img src={data.photo} />
                {data.year <= 1 ? <p>new</p> : ""}
              </div>
              <div>
                <h2>{data.name}</h2>
              </div>
              <div>
                <p>{data.job}</p>
              </div>
            </div>
          ))}

          {newWorker.map((data, index) => (
            <div key={index}>
              <div>
                <img src={data.photo} />
                {data.year <= 1 ? <p>new</p> : ""}
              </div>
              <div>
                <h2>{data.name}</h2>
              </div>
              <div>
                <p>{data.job}</p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>Table View</div>
      )}
    </div>
  );
}
