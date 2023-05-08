function Recipes(props: any) {
  const recipe = props.recipe;
  return (
    <div>
      <h2>{recipe.name}</h2>
      <h3>Ingredients</h3>
      <ul style={{ width: "200px", margin: "0 auto" }}>
        {recipe.ingredients.map((el: string, index: number) => {
          return <li  key={index}>{el}</li>;
        })}
      </ul>
      <h3>Steps</h3>
      {recipe.steps.map((el: string, index: number) => {
        return (
          <div style={{ width: "400px", margin: "0 auto" }}  key={index}>
            <h5>Step {index + 1}</h5>
            <p>{el}</p>
          </div>
        );
      })}
      <h3>Result</h3>
      <img src={recipe.imgUrl} alt="result image" style={{width: "400px"}} />
    </div>
  );
}

export default Recipes;
