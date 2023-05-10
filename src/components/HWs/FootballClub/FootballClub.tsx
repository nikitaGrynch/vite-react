import React, { useEffect, useState } from "react";
import ClubInfo from "./ClubInfo";
import ClubAchievements from "./ClubAchievements";
import ClubTeam from "./ClubTeam";
import { footballClubs } from "../../../data/data";

function FootballClub() {
  const [style, setStyle] = useState(styles[0]);
  const [currentDataIndex, setCurrentDataIndex] = useState(0);

  useEffect(() => {
    randomStyle();
  });

  const randomStyle = () => {
    const index = Math.floor(Math.random() * styles.length);
    setStyle(styles[index]);
  };

  const changeCurrentDataIndex = () => {
    setCurrentDataIndex(currentDataIndex + 1);
    if (currentDataIndex == footballClubs.length - 1) {
      setCurrentDataIndex(0);
    }
  };

  return (
    <div style={style}>
      {" "}
      <ClubInfo {...footballClubs[currentDataIndex]["clubInfo"]} />
      <ClubAchievements
        {...footballClubs[currentDataIndex]["clubAchievements"]}
      />
      <ClubTeam {...footballClubs[currentDataIndex]["clubSquad"]} />
      <button onClick={() => changeCurrentDataIndex()}>Next</button>
    </div>
  );
}

const styles = [
  {
    backgroundColor: "lightblue",
    padding: "30px",
    borderRadius: "20px",
    color: "black",
  },
  {
    backgroundColor: "red",
    padding: "30px",
    borderRadius: "10px",
    color: "white",
  },
  {
    backgroundColor: "bisque",
    padding: "30px",
    borderRadius: "50px",
    color: "darkturquoise",
  },
];
export default FootballClub;
