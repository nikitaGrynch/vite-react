import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function PainterPics() {
  const [state, setState] = useState(useLocation().state);

  return (
    <div>
      <h2>Pictures</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {state.pics.map((pic: any, index: number) => {
          return (
            <div style={{ display: "flex", flexDirection: "column", margin: "20px" }}  key={index}>
              <h3>{pic.name}</h3>
              <img style={{height: "300px"}} src={pic.photo} alt={pic.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PainterPics;
