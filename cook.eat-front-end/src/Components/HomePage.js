import React, { useState, useEffect } from "react";
import Search from "../Components/Search";
import RegistrationCarousel from "../Components/RegistrationCarousel";
import RecipeCard from "./RecipeCard";
import mockRecipes from "../mockdata/mockRecipes";
import MyRecipesCard from "./MyRecipesCard";
import "../styles/HomePage.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { useAuth } from "../Conteaxts/autoConteaxt";

// map [{name:1},{name:2}] -> [<RecipeCard />, <RecipeCard />]
const HomePage = () => {
  const { currentUser } = useAuth;
  const [recipes, setRecipes] = useState([]);
  const [ userId, setUserId ] = useState()

const searchRecipes = async() => {
  const user = await localStorage.getItem("user");
  let res
  console.log(user)
    if(user){
      console.log('hello')
      res = await fetch(`http://localhost:5000/recipes/filter/${user}`);  
    } else {
      res = await fetch(`http://localhost:5000/recipes`);
    }
    const data = await res.json();
    setRecipes(data);
  }

  useEffect(() => {
    searchRecipes();
  }, []);

  return (
    <div className="homepage-wrapper">
      <div className="banner">
        <div className="banner-content">
          <h4>Find A Recipe</h4>
          <div className="search-bar">
            <Search setRecipes={setRecipes} />
          </div>
        </div>
      </div>
      
      <div className="my-recipe-cards-wrapper">
        {recipes.map((recipe, i) => {
          return <MyRecipesCard key={i} recipe={recipe} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;