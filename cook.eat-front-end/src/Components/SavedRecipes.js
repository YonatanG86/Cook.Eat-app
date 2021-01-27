import React, {useState, useEffect} from "react";
import '../styles/SavedRecipes.css';
import {  } from "react-bootstrap";
import { getSavedRecipes } from '../libs/utils'
import MyRecipesCard from "./MyRecipesCard";


const SavedRecipes = () => {

    const [ user, setUser ] = useState()
    const [ recipesSaved, setRecipesSaved ] = useState()

    const getUser = async() => {
        const userId = await localStorage.getItem('user')
        if (userId){
            setUser(userId)
            recipes(userId)
        }
    }

    const recipes = async(userId) => {
        const result = await getSavedRecipes(userId)
        setRecipesSaved(result)
    }

    useEffect(() => {
        getUser()
    }, [])
    
    return (
        <div className="saved-recipes-pagewrapper">
            <h4>Saved Recipes</h4>
            {recipesSaved ? <div className="conteiner-cards-recipe">
                {recipesSaved.map(function (recipe, i) {
                return <MyRecipesCard key={i} recipe={recipe} />;
            })}
        </div>:<h4 id="no-saved-recipes">You haven't saved any recipes yet.</h4>}</div>
    )
}

export default SavedRecipes;