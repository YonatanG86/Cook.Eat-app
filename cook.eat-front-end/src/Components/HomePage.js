import React, { useState, useEffect } from "react";
import Search from "../Components/Search";
import RegistrationCarousel from "../Components/RegistrationCarousel";
import RecipeCard from "./RecipeCard";
import mockRecipes from "../mockdata/mockRecipes";
import "../styles/HomePage.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { useAuth } from "../Conteaxts/autoConteaxt";

// map [{name:1},{name:2}] -> [<RecipeCard />, <RecipeCard />]
const HomePage = () => {
  const { currentUser } = useAuth;
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const user = localStorage.getItem("user");
	console.log(user);
	async function searchRecipes() {
		const res = await fetch(`http://localhost:5000/recipes`);
		const data = await res.json();
		console.log('data',data);
		setRecipes(data);
	  }
	  searchRecipes()
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

      <div className="recipes">
        {recipes.map(function (recipe, i) {
          console.log("recipe", recipe);
          return <RecipeCard key={i} recipe={recipe} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
