import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/counter";
import UserInfo from "./components/UserInfo";
import Menu from "./components/Menu";
import CounterTest from "./components/counterTest";
import Form from "./components/Form";
import ChangeColors from "./components/ChangeColors";
import Odessa from "./components/Odessa";
import NewForm from "./components/NewForm";
import FavBook from "./components/HWs/FavBook";
import FavBand from "./components/HWs/FavBand";
import {
  BandAlbumsCoversUrls,
  BandAlbumsNames,
  BandGenres,
  BandMembers,
  BandName,
  Person,
  Recipe,
} from "./data/data";
import Recipes from "./components/HWs/Recipes";
import FavFilm from "./components/HWs/FavFilm";
import RealTimeClock from "./components/HWs/RealTimeClock";
import Profile from "./components/HWs/Profile";
import FavPet from "./components/HWs/FavPet";
import FootballClub from "./components/HWs/FootballClub/FootballClub";
import MagicEightBall from "./components/HWs/MagicEightBall";

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
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <FootballClub />
      <MagicEightBall />
      {/* <FavFilm
        title="Training Day"
        director="Antoine Fuqua"
        year="2001"
        studio="Warner Bros. Pictures"
        imgUrl="https://upload.wikimedia.org/wikipedia/en/b/b3/Training_Day_Poster.jpg"
      />

      <RealTimeClock />

      <Profile person={Person} />

      <FavPet
        name="Light"
        type="dog"
        model="Belgian Shepherd: Malinois"
        imgUrl="https://cdn.britannica.com/85/232785-050-0EE871BE/Belgian-Malinois-dog.jpg"
        favToy="credit card"
        age="3 years"
      /> */}

      {/* <FavBook
        name="Fahrenheit 451"
        author="Ray Bradbury"
        genre="Dystopian"
        pages="158"
        reviews="50000"
      ></FavBook>
      <FavBand
        name={BandName}
        members={BandMembers}
        genres={BandGenres}
        albumsNames={BandAlbumsNames}
        albumsCoversUrls={BandAlbumsCoversUrls}
      ></FavBand>
      <Recipes recipe={Recipe} /> */}
      {/* <NewForm></NewForm> */}
      {/* <Odessa></Odessa> */}
      {/* <ChangeColors></ChangeColors> */}
      {/* <Form></Form> */}
      {/* <CounterTest></CounterTest> */}
      {/* <Menu></Menu> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{import.meta.env.VITE_APP_TITLE}</h1>

      <div className="card">
        <p>count is {count}</p>
        <Counter increment={increment} decrement={decrement}></Counter>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
