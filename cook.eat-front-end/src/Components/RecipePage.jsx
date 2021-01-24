import React, { useState, useEffect } from 'react'
import '../styles/recipePage.css'
import { FaPen, FaHeart, FaFireAlt, FaClock } from 'react-icons/fa'
import { GiCookingPot } from 'react-icons/gi'

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
            <div className='likeBox'> <FaHeart style={{marginRight:'1rem'}} />{recipe.likes}</div>   
            <div className='desc'>{recipe.description}</div>
            <div className='topic'>
                <div className='cal'> <FaFireAlt style={{marginRight:'1rem'}}/>{recipe.calories} Cal.</div>
                <div className='cal'> <GiCookingPot style={{marginRight:'1rem', fontSize: '30px'}}/>{recipe.dishLevel} </div>
                <div className='cal clock'> <FaClock style={{marginRight:'1rem'}}/> {recipe.preparationTime} Min.</div>
            </div>
        </div>
            <div className='imageBox'>
                <img className='recipeImage' src={recipe.picture} alt="pasta" />
            </div>
        </div>
            <h3>{recipe.cuisineType}</h3>  
            <div className='textBox'>
                <div className='textLeft'>
                    <h3>How to make it.</h3>
                    <ol>
                        {recipe.steps.map(step => 
                            <li className='step'>{step}</li>
                        )}
                    </ol>  
                </div>
                <div className='textRight'>
                    <h3>Ingredients </h3>
                    {recipe.servings && <h5>{recipe.servings} servings</h5>}
                    {recipe.ingredients.map(ing => 
                        <div className='ing'>
                            <span>{ing.ingredientName}</span>
                            <span>{ing.quantity}</span>
                            <span>{ing.units}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>: null}
        </div>
    )
}

export default RecipePage
