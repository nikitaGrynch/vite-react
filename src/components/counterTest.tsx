import { useEffect, useRef, useState } from "react";

const CounterTest = () => {
  const [count, setCount] = useState(0);
  const val = useRef(1);

  useEffect(() => {
    val.current++;
    console.log("new render()...");
  }, [count]);
  return (
    <>
    <p>Render {val.current}</p>
      {/* <input type="text" value={val.current} onChange={(e) =>setCount(e.target.value)} /> */}
      {/* <button onClick={() => setCount(count + 1)}>Count: {count}</button> */}
    </>
  );
};

export default CounterTest;
