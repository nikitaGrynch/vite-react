import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

function PainterBio() {
    const [state, setState] = useState(useLocation().state);
  return (
    <div>
        <p>
            {state.bio}
        </p>
    </div>
  )
}

export default PainterBio