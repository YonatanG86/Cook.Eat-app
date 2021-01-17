import React from "react";
import mockRecipes from '../src/mockdata/mockRecipes';
import Recipe from '../src/Components/Recipe';

const RecipesList = () => {

    return (
        <>
            <ul>
                {mockRecipes.map((recipe) => (
                    <Recipe key={recipe.id} recipe={recipe}/>
                ))}
            </ul>
        </>
    )
}

export default RecipesList;