import React, { useState } from "react";

export default function FormNested() {
  const [person, setPerson] = useState({
    name: "Denev",
    artwork: {
      title: "apple",
      city: "california",
      image:
        "https://img-cdn.inc.com/image/upload/w_1080,ar_16:9,c_fill,g_auto,f_auto,q_auto:best/images/panoramic/GettyImages-1236193308_505783_sizvhl.webp",
    },
  });

  const handleNameChange = (e) => {
    setPerson({
      ...person,
      name: e.target.value,
    });
  };

  const handleTitleChange = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  };

  const handleCityChange = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  };

  const handleImageChange = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  };

  return (
    <div>
      <label htmlFor="">
        Name:{" "}
        <input type="text" onChange={handleNameChange} value={person.name} />
      </label>
      <label htmlFor="">
        Title:{" "}
        <input
          type="text"
          onChange={handleTitleChange}
          value={person.artwork.title}
        />
      </label>
      <label htmlFor="">
        City:{" "}
        <input
          type="text"
          onChange={handleCityChange}
          value={person.artwork.city}
        />
      </label>
      <label htmlFor="">
        Image:{" "}
        <input
          type="text"
          onChange={handleImageChange}
          value={person.artwork.image}
        />
      </label>
      <div>
        <p>
          {person.artwork.title}
          {" by "}
          {person.name}
        </p>
        <p>located in {person.artwork.city}</p>
        <img src={person.artwork.image} alt={person.artwork.title} />
      </div>
    </div>
  );
}
