import React from "react";

export default function TravelItems({ travel }) {
  console.log(travel);

  return (
    <>
      <div className="detail">
        <h1>{travel.name} </h1>
        <img src={travel.image} alt="travel-img" className="travel-img" />
        <p>{travel.description}</p>
        <button
          onClick={() => {
            localStorage.setItem(travel.name, JSON.stringify(travel));
          }}
        >
          add to cart
        </button>
      </div>
    </>
  );
}
