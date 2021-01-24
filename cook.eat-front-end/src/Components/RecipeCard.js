import "../styles/RecipeCard.css";

function RecipeCard(props) {
  return (
    <div className="main">
      <div className="picture">
      <img  src={props.recipe.picture} />
      </div>

      <h3>{props.recipe.title}</h3>
      <p>{props.recipe.description}</p>
    </div>
  );
}

export default RecipeCard;
