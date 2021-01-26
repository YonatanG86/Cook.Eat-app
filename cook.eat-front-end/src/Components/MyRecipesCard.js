import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/MyRecipes.css";
import { Button, Card } from "react-bootstrap";
import { FaHeart, FaEllipsisH, FaRecycle } from "react-icons/fa";
import "../styles/MyRecipesCard.css";
const MyRecipesCard = (props) => {
  const { recipe } = props;
  return (
    <Card className="myrecipe-card">
      <Card.Img
        className="card-image"
        variant="top"
        src={recipe.picture || "./addRecipe/no-imag.png"}
      />
      <Card.Body>
        <div className="top-card">
          <Card.Title style={{ fontWeight: "600", color: "white" }}>
            {recipe.title}
          </Card.Title>
          <span className="likes-totel">12</span>
          <FaHeart className="my-likes" />
        </div>
        <div className="main-card">
          <Card.Text className="card-description">
            {recipe.description}{" "}
          </Card.Text>
          <NavLink
            exact
            to={`/recipe/${recipe._id}`}
            className="show-more-card"
          >
            Show More...
          </NavLink>
        </div>

        <div className="card-btns">
          <Button className="my-update" variant="primary">
            Updtae <FaRecycle />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MyRecipesCard;
