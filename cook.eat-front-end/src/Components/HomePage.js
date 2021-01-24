import React, { useState } from "react";
import Search from "../Components/Search";
import RegistrationCarousel from "../Components/RegistrationCarousel";
import RecipeCard from "./RecipeCard";
import mockRecipes from "../mockdata/mockRecipes";
import "../styles/HomePage.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";

// map [{name:1},{name:2}] -> [<RecipeCard />, <RecipeCard />]
const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <div className="banner">
        <div className="banner-content">
          <h4>Find A Recipe</h4>
          <div className="search-bar">
            <InputGroup className="mb-3">
              <FormControl placeholder="" />
              <InputGroup.Append>
                <Button>
                  <BiSearch id="search-icon" />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <div>
            {mockRecipes.map(function (recipe, i) {
              console.log("recipe", recipe);
              return <RecipeCard key={i} recipe={recipe} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
