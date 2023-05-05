import { useMemo, useState } from "react";

function MyUseMemo() {
    const [name, setName] = useState("");
    const [counter, setCounter] = useState(0);
    const [price, setPrice] = useState(100);
  return (
    <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>
            OK {counter}
        </button>
        <button onClick={() => setPrice(price + 10)}>UP</button>
        <p>{price}</p>
    </>
  )
}

export default MyUseMemo;
