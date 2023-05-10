function ClubInfo(props: any) {
  return (
    <div>
      <h1>{props.clubName}</h1>
      <p>City: {props.city}</p>
      <p>Founded: {props.founded}</p>
      <img src={props.logoUrl} alt="club logo" style={{height: "100px"}}/>
    </div>
  );
}

export default ClubInfo;
