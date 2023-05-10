import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

function CityTheMostFamousLandmark() {
    const [state, setState] = useState(useLocation().state);
console.log(state);
  return (
    <div>
        <h2>{state.cityName} The most famous Landmark</h2>
        <h2>{state.theMostFamousLandmark.name}</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {
        state.theMostFamousLandmark.photos.map((el: any, index: number) => {
          return (
              <img style={{height: "600px", margin: "20px"}} src={el} alt={state.theMostFamousLandmark.name}  key={index}/>
          );
        })}
      </div>
    </div>
  )
}

export default CityTheMostFamousLandmark