import React from 'react'

function RecipeFullPage() {


    return (
        <div>
            <h1>recipeTitle</h1>
            <h3>Calories</h3>
            <h3>Preparation Time</h3>
            <h3>description</h3>
            <img src="" alt="pasta" />
            <h3>cuisine</h3>  
            <h3>servings</h3>
            <h3>dishLevel</h3>  
            {steps && steps.map(step => {
                <div>step</div>
            })}    
        </div>
    )
}

export default RecipeFullPage
