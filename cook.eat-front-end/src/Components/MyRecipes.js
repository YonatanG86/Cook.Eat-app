
import React, { useState, useEffect } from "react";

import "../styles/MyRecipes.css";
import MyRecipesCard from "./MyRecipesCard";

import { getMyRecipes } from '../libs/utils'


const MyRecipes = () => {

  const [ user, setUser ] = useState()
  const [ recipes, setRecipes ] = useState()

  const getUser = () => {
    const userId = localStorage.getItem('user')
    if (userId){
        setUser(userId)
        myRecipes(userId)
    }
  }

  const myRecipes = async(userId) => {
    const result = await getMyRecipes(userId)
    setRecipes(result)
    console.log(result);
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="my-recipes-pagewrapper">
    <h4>My Recipes</h4>
      {recipes ? <div className="conteiner-cards-recipe">
      {recipes.map(function (recipe, i) {
        return <MyRecipesCard key={i} recipe={recipe} />;
      })}
    </div>:<h5 id="no-uploaded-recipes">You haven't uploaded any recipes yet.</h5>}
    </div>
  );
};

export default MyRecipes;
