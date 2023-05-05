import { useState, createContext, useEffect } from "react";
import Senior from "./Senior";

export const MyContext = createContext("");

const TeamLead = () => {
  const [task, setTask] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    
    console.log(count);
  });

  return (
    <>
      <MyContext.Provider value={task}>
        <Senior />
        <input
          type="text"
          value={task}
          onChange={(ev) => {
            setTask(ev.target.value);
          }}
        />
      </MyContext.Provider>
    </>
  );
};

export default TeamLead;
