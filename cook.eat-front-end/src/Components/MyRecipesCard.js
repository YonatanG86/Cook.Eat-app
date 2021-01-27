import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/MyRecipes.css";
import { Button, Card } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import "../styles/MyRecipesCard.css";

const MyRecipesCard = (props) => {
  const [user, setUser] = useState();
  const { recipe } = props;
  const getUser = () => {
    const userId = localStorage.getItem("user");
    if (userId) {
      setUser(userId);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <Card className="myrecipe-card">
      <Card.Img
        className="card-image"
        variant="top"
        src={recipe.picture || "./addRecipe/no-imag.png"}
      />
      <Card.Body>
        <div className="top-card">
          <Card.Title classNmae="card-title">
            {recipe.recipeTitle}
            <p className="info-cuisine">
              <span>{recipe.cuisineType}</span>
            </p>
          </Card.Title>
          <span className="likes-totel">{recipe.likes}</span>
          <FaHeart className="my-likes" />
        </div>
        <div className="main-card">
          <Card.Text className="description">
            <div className="preparation-time">
              <p className="info-card">
                Totel Time:
                <span>{recipe.preparationTime}min</span>
              </p>
            </div>
            <div className="calories">
              <p className="info-card">
                Calories:<span>{recipe.calories}</span>
              </p>
            </div>
          </Card.Text>
        </div>

        <div className="card-btns">
          <NavLink
            exact
            to={`/recipe/${recipe._id}`}
            className="show-more-card"
          >
            Show More
          </NavLink>
          {user === recipe.writer && (
            <NavLink
              exact
              to={`/add-recipe/${recipe._id}`}
              className="my-update"
            >
              update
            </NavLink>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default MyRecipesCard;
