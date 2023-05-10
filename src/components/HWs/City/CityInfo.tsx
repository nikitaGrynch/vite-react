import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function CityInfo() {
  const [state, setState] = useState(useLocation().state);
  return (
    <>
      <h2>{state.name}</h2>
      <p>{state.about}</p>
    </>
  );
}

export default CityInfo;
