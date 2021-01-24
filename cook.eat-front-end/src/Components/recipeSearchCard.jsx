import React from 'react';
import { Route } from 'react-router-dom';
import RecipteFullPage from './RecipeFullPage';
import '../styles/recipeSearchCard.css';

function RecipeSearchCard({ recipeid, preparationTime, servings, cuisineType, mealType, dietType }) {
	return (
		// <Route path='/resipe/:id' component={RecipteFullPage}>
		<div className='card'>
			<div className='cardRecipeName'> recipeTitle</div>
			<img src='./food.jpg' class='card-img-top' alt='...' />
			<div class='card-body row justify-content-between mb-0 pl-4 pr-4'>
				<p class='card-text'>Beginners</p>
				<p class='card-text'>preparationTime</p>
				<p class='card-text'>servings</p>
			</div>
			<div class='card-body row justify-content-between pl-4 pr-4'>
				<p class='card-text'>cuisineType</p>
				<p class='card-text'>mealType</p>
				<p class='card-text'>dietType</p>
			</div>
		</div>
		// </Route>
	);
}

export default RecipeSearchCard;
