import React, { useEffect, useState } from "react";
import "../styles/MyRecipes.css";
import mockRecipes from "../mockdata/mockRecipes";
import MyRecipesCard from "./MyRecipesCard";
import { useAuth } from "../Conteaxts/autoConteaxt";
const MyRecipes = () => {
  const { myRecipes } = useAuth();
  const [Recipes, setRecipes] = useState([]);

  const owensRecipes = async () => {
    const obj = await myRecipes();
    setRecipes(obj);
  };
  useEffect(() => {
    owensRecipes();
  }, []);
  return (
    <div className="my-recipes-pagewrapper">
      {/* <h4>My Recipes</h4> */}
      <div className="conteiner-cards-recipe">
        {Recipes.map((recipe, i) => {
          return <MyRecipesCard key={i} recipe={recipe} />;
        })}
      </div>
    </div>
  );
};

export default MyRecipes;
