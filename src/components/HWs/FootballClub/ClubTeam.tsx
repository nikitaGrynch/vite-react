import React from "react";

function ClubTeam(props: any) {
  return (
    <div>
      <h2>Team Line-up</h2>
      <ul>
      {props.players.map((player: any) => {
        return (
          <li key={player.id}>
            {player.name} ({player.position})
          </li>
        );
      })}
      </ul>
    </div>
  );
}

export default ClubTeam;
