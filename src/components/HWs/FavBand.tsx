function FavBand(props: any) {
  return (
    <div>
      <h2>Favorite Band</h2>
      <h3>Name: {props.name}</h3>
      <h4>Members:</h4>
      <div style={{display: "flex", flexDirection: "column"}}>
        {props.members.map((m: string) => {
          return <p style={{margin: "0"}}>{m}</p>;
        })}
      </div>

      <h4>Genres:</h4>
      <div style={{display: "flex", flexDirection: "column"}}>
        {props.genres.map((g: string) => {
          return <p style={{margin: "0"}}>{g}</p>;
        })}
      </div>

      <div style={{ display: "flex" }}>
        {props.albumsNames.map((name: any) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px",
              }}
            >
              <img src={props.albumsCoversUrls[name]} alt={name + " cover"} style={{height: "200px"}} />
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FavBand;
