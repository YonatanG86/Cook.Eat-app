import React from "react";
import '../styles/SavedRecipes.css';
import {  } from "react-bootstrap";
import { getSavedRecipes } from '../libs/utils'


const SavedRecipes = () => {

    const recipes = async(id) => {
        const result = await getSavedRecipes(id)
        const data = await result.json()
    }
    
    return (
        <div className="saved-recipes-pagewrapper">
            <h4>Saved Recipes</h4>
        </div>
    )
}

export default SavedRecipes;