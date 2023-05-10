import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function CityPhotos() {
  const [state, setState] = useState(useLocation().state);
  console.log(state);
  return (
    <div>
      <h2>{state.cityName} Photos</h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {state.photos.map((el: string, index: number) => {
          return <img
            style={{ height: "400px", margin: "20px" }}
            src={el}
            alt={state.city + " photo"}
            key={index}
          />;
        })}
      </div>
    </div>
  );
}

export default CityPhotos;
