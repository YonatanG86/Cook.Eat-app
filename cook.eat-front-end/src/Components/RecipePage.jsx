import React, { useState, useEffect } from 'react'
import '../styles/recipePage.css'
import { FaPen, FaHeart } from 'react-icons/fa'

function RecipePage(props) {

    const BASE_URL = 'http://localhost:5000'
    const [ recipe, setRecipe ] = useState() 
    // const {id} = props
    const id = '600d3dd109c0130810aa4560'
    const getRecipe = async() => {
        const response = await fetch(`${BASE_URL}/recipes/${id}`)
        const data = await response.json()
        console.log(data)
        setRecipe(data)
    }

    useEffect(() => {
        getRecipe()
    }, [])


    return (
        <div>
        {recipe ? <div className='recipePage'>
        <div className='titleBox'>
        <div>
            <h1 className='recipeTitle'>{recipe.recipeTitle}</h1>
            <h4 style={{fontSize: '14px'}}><FaPen style={{marginRight:'1rem'}}/>{recipe.writer}</h4> 
            <div className='likeBox'> <FaHeart style={{marginRight:'1rem'}}/>{recipe.likes}</div>   
        </div>
            <div className='imageBox'>
                <img className='recipeImage' src={recipe.picture} alt="pasta" />
            </div>
        </div>
            
            <h3>{recipe.Calories}</h3>
            <h3>{recipe.PreparationTime}</h3>
            <h3>{recipe.description}</h3>
            <h3>{recipe.cuisineType}</h3>  
            <h3>{recipe.servings}</h3>
            <h3>{recipe.dishLevel}</h3>  
            {recipe.steps.map(step => 
                <div>1.{step}</div>
            )}
            {recipe.ingredients.map(ing => 
                <div>
                    <div>{ing.ingredientName}</div>
                    <div>{ing.quantity}</div>
                    <div>{ing.measurement}</div>
                </div>
            )}
        </div>: null}
        </div>
    )
}

export default RecipePage
