function FavPet(props: any) {
  return (
    <div>
      <h2>Favorite Pet</h2>
      <img src={props.imgUrl} alt="pet image" style={{ height: "200px" }} />
      <p>Name: {props.name}</p>
      <p>Type: {props.type}</p>
      <p>Model: {props.model}</p>
      <p>Age: {props.age}</p>
      <p>Favorite toy: {props.favToy}</p>
    </div>
  );
}

export default FavPet;
