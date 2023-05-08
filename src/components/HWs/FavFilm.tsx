function FavFilm(props: any) {
    return (
      <div>
          <h2>Favorite Film</h2>
          <img src={props.imgUrl} alt="film poster" />
          <h3>{props.title}</h3>
          <p>Director: {props.director}</p>
          <p>Year: {props.year}</p>
          <p>Studio: {props.studio}</p>
      </div>
    )
  }
  
  export default FavFilm;