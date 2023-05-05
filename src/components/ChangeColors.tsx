import { useState } from "react";
import "./ChangeColors.css";

const ChangeColors = () => {
  const [style, setStyle] = useState("style-red");

  const changeStyle = (e: any) => {
    setStyle(e.target.innerHTML);
    console.log(e)
  }

  return (
    <div className={style}>
      <button onClick={changeStyle}>style-red</button>
      <button onClick={changeStyle}>style-green</button>
      <button onClick={changeStyle}>style-blue</button>
    </div>
  );
};

export default ChangeColors;
