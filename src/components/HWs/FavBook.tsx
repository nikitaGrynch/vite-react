function FavBook(props: any) {
  return (
    <div>
        <h2>Favorite Book</h2>
        <h3>Name: {props.name}</h3>
        <p>Author: {props.author}</p>
        <p>Genre: {props.genre}</p>
        <p>Reviews: {props.reviews}</p>
    </div>
  )
}

export default FavBook