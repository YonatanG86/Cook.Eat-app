import React from "react";
import "../styles/MyRecipes.css";
import mockRecipes from "../mockdata/mockRecipes";
import MyRecipesCard from "./MyRecipesCard";
const MyRecipes = () => {
  return (
    <div className="my-recipes-pagewrapper">
      {/* <h4>My Recipes</h4> */}
      <div className="conteiner-cards-recipe">
        {mockRecipes.map(function (recipe, i) {
          return <MyRecipesCard key={i} recipe={recipe} />;
        })}
      </div>
    </div>
  );
};

export default MyRecipes;
