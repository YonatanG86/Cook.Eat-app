import { Link } from "react-router-dom";
import "../styles/RecipeCard.css";
function RecipeCard(props) {
  return (
    <Link className="Link" to="/Recipe">
      <div className="main">
        <div className="picture">
          <img src={props.recipe.picture} />
        </div>

        <h4>{props.recipe.title}</h4>
        <p>{props.recipe.cuisineType}</p>
      </div>
    </Link>
  );
}

export default RecipeCard;
<Link>React</Link>;
