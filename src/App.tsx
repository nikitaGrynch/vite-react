import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/counter";

function Test() {
  return React.createElement(
    "p",
    {
      id: "my-p",
    },
    "Hello React",
    React.createElement("button")
  );
}

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{import.meta.env.VITE_APP_TITLE}</h1>

      <div className="card">
        <Counter></Counter>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Test></Test>
    </>
  );
}

export default App;
