import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

function PainterTheMostFamousPic() {
    const [state, setState] = useState(useLocation().state);

  return (
    <div>
        <h2>{state.theMostFamousPic.name}</h2>
        <img style={{height: "400px"}} src={state.theMostFamousPic.photo} alt={state.theMostFamousPic.name} />
    </div>
  )
}

export default PainterTheMostFamousPic