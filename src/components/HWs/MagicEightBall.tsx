import React, { useState } from 'react'
import { magicEightBallResponses as answers } from '../../data/data';

function MagicEightBall() {
    const [answer, setAnswer] = useState("");

  const getAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex]);
  };

  return (
    <div>
      <h1>Magic 8 Ball</h1>
      <button onClick={getAnswer}>Ask a question</button>
      {answer && <p>{answer}</p>}
    </div>
  );
}

export default MagicEightBall