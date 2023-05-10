import React from "react";

function ClubAchievements(props: any) {
  return (
    <div>
      <h2>Club Achievements</h2>
      <ul style={{width: "150px", margin: "0 auto"}}>
        <li>Medals: {props.medals}</li>
        <li>Cups: {props.cups}</li>
        <li>Goals: {props.goals}</li>
      </ul>
    </div>
  );
}

export default ClubAchievements;
