import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/MyRecipes.css";
import { Button, CardGroup, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "../styles/MyRecipesCard.css";
import { FaHeart } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { BiTime } from "react-icons/bi";
import { GiCookingPot } from "react-icons/gi";


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
      <div className="my-recipe-cards-container">
        <Card 
          style={{ width: '28rem' }}>
          <Card.Img 
            variant="top" 
            src={recipe.picture || "./addRecipe/no-imag.png"}
          />
          <Card.Body>
            <Card.Title>
              <div className="recipe-cards-title-container">
                <div className="card-title-container">
                  <b>{recipe.recipeTitle}</b>
                </div>
                <div className="card-likes-container">
                  <button 
                    disabled={true} 
                    type='click' 
                    id="cards-like-button">
                      <FaHeart style={{marginRight:'1rem'}}/>
                      {recipe.likes}
                  </button> 
                </div>
              </div>
            </Card.Title>

            <div className="card-information-container">
              <div className="card-dish-type">
                <BiWorld id="world-icon"/>
                <b>{recipe.cuisineType}</b>
              </div>
              <div className="card-dish-time">
                <BiTime id="time-icon"/>
                <b>{recipe.preparationTime}min</b>
              </div>
              <div className="card-dish-level">
                <GiCookingPot id="level-icon"/>
                <b>{recipe.dishLevel}</b>
              </div>
            </div>

            <div className="card-links">
              <NavLink
                exact
                to={`/recipe/${recipe._id}`}
                className="show-more-card"
              >
                <b>Show More</b>
              </NavLink>
              {user && (
                <Button id="show-more-button" variant="primary">
                  Add more
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      </div>









    // <Card className="myrecipe-card">
    //   <Card.Img
    //     className="card-image"
    //     variant="top"
    //     src={recipe.picture || "./addRecipe/no-imag.png"}
    //   />
    //   <Card.Body>
    //     <div className="top-card">
    //       <Card.Title classNmae="card-title">
    //         {recipe.recipeTitle}
    //         <p className="info-cuisine">
    //           <span>{recipe.cuisineType}</span>
    //         </p>
    //       </Card.Title>
    //       <span className="likes-totel">{recipe.likes}</span>
    //       <FaHeart className="my-likes" />
    //     </div>
    //     <div className="main-card">
    //       <Card.Text className="description">
    //         <div className="preparation-time">
    //           <p className="info-card">
    //             Totel Time:
    //             <span>{recipe.preparationTime}min</span>
    //           </p>
    //         </div>
    //         <div className="calories">
    //           <p className="info-card">
    //             Calories:<span>{recipe.calories}</span>
    //           </p>
    //         </div>
    //       </Card.Text>
    //     </div>

    //     <div className="card-btns">
    //       <NavLink
    //         exact
    //         to={`/recipe/${recipe._id}`}
    //         className="show-more-card"
    //       >
    //         Show More
    //       </NavLink>
    //       {user && (
    //         <Button className="my-update" variant="primary">
    //           Add more
    //         </Button>
    //       )}
    //     </div>
    //   </Card.Body>
    // </Card>

  );
};

export default MyRecipesCard;
