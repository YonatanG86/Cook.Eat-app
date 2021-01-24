import React, { useState } from "react";
import Search from "../Components/Search";
import RegistrationCarousel from "../Components/RegistrationCarousel";
import RecipeCard from "./RecipeCard";
import mockRecipes from "../mockdata/mockRecipes";

// map [{name:1},{name:2}] -> [<RecipeCard />, <RecipeCard />]
const HomePage = () => {

  return (
    <>
      <Search />
      <h1>Home Page</h1>
      
      <li>List of recipes or recipe cards</li>
      {mockRecipes.map(function(recipe,i){
          console.log('recipe',recipe);
          return <RecipeCard key={i} recipe={recipe}  />
      })}
      {/* <RegistrationCarousel /> */}
    </>
  );
};

export default HomePage;
