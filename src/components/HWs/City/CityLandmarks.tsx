import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function CityLandmarks() {
//   const state = useLocation().state;
  const [state, setState] = useState(useLocation().state);
  return (
    <div>
      <h2>{state.cityName} Landmarks</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {
        state.landmarks.map((el: any, index: number) => {
          return (
            <div style={{ display: "flex", flexDirection: "column"}} key={index}>
              <img style={{height: "600px"}} src={el.photo} alt={el.name} />
              <p>{el.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CityLandmarks;
