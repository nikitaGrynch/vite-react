function FavBand(props: any) {
  return (
    <div>
      <h2>Favorite Band</h2>
      <h3>Name: {props.name}</h3>
      <h4>Members:</h4>
      <div style={{display: "flex", flexDirection: "column"}}>
        {props.members.map((m: string, index: number) => {
          return <p style={{margin: "0"}} key={index}>{m}</p>;
        })}
      </div>

      <h4>Genres:</h4>
      <div style={{display: "flex", flexDirection: "column"}}>
        {props.genres.map((g: string, index: number) => {
          return <p style={{margin: "0"}}  key={index}>{g}</p>;
        })}
      </div>

      <div style={{ display: "flex" }}>
        {props.albumsNames.map((name: any, index: number) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px",
              }}  key={index}
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
