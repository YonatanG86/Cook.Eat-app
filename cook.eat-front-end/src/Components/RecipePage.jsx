<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import '../styles/recipePage.css';
import { FaPen, FaHeart, FaFireAlt, FaClock } from 'react-icons/fa';
import { GiCookingPot } from 'react-icons/gi';
import { useAuth } from '../Conteaxts/autoConteaxt';
=======
import React, { useState, useEffect } from 'react'
import '../styles/recipePage.css'
import { FaPen, FaHeart, FaFireAlt, FaClock, FaPizzaSlice } from 'react-icons/fa'
import { GiCookingPot } from 'react-icons/gi'
import { loadRecipe, likeRecipe } from '../libs/utils'
>>>>>>> f1a33767b7065046abb7c4721adee1e0b914982b

function RecipePage(props) {
	const { currentUser } = useAuth;

<<<<<<< HEAD
	console.log(currentUser);
	const BASE_URL = 'http://localhost:5000';
	const [recipe, setRecipe] = useState();
	// const {id} = props
	const id = '600d3dd109c0130810aa4560';
	const getRecipe = async () => {
		const response = await fetch(`${BASE_URL}/recipes/${id}`);
		const data = await response.json();
		console.log(data);
		setRecipe(data);
	};

	useEffect(() => {
		getRecipe();
	}, []);

	return (
		<div>
			{recipe ? (
				<div className='recipePage'>
					<div className='titleBox'>
						<div>
							<h1 className='recipeTitle'>{recipe.recipeTitle}</h1>
							<h4 style={{ fontSize: '14px' }}>
								<FaPen style={{ marginRight: '1rem' }} />
								{recipe.writer}
							</h4>
							<div className='likeBox'>
								{' '}
								<FaHeart style={{ marginRight: '1rem' }} />
								{recipe.likes}
							</div>
							<div className='desc'>{recipe.description}</div>
							<div className='topic'>
								<div className='cal'>
									{' '}
									<FaFireAlt style={{ marginRight: '1rem' }} />
									{recipe.calories} Cal.
								</div>
								<div className='cal'>
									{' '}
									<GiCookingPot style={{ marginRight: '1rem', fontSize: '30px' }} />
									{recipe.dishLevel}{' '}
								</div>
								<div className='cal clock'>
									{' '}
									<FaClock style={{ marginRight: '1rem' }} /> {recipe.preparationTime} Min.
								</div>
							</div>
						</div>
						<div className='imageBox'>
							<img className='recipeImage' src={recipe.picture} alt='pasta' />
						</div>
					</div>
					<h3>{recipe.cuisineType}</h3>
					<div className='textBox'>
						<div className='textLeft'>
							<h3>How to make it.</h3>
							<ol>
								{recipe.steps.map((step) => (
									<li className='step'>{step}</li>
								))}
							</ol>
						</div>
						<div className='textRight'>
							<h3>Ingredients </h3>
							{recipe.servings && <h5>{recipe.servings} servings</h5>}
							{recipe.ingredients.map((ing) => (
								<div className='ing'>
									<span>{ing.ingredientName}</span>
									<span>{ing.quantity}</span>
									<span>{ing.units}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
=======
    const [ recipe, setRecipe ] = useState()
    const [ countLikes, setCountLikes ] = useState()
    const [ like, setLike ] = useState() 
    // const {id} = props
    const id = '600d3dd109c0130810aa4560'

    const addLike = async() => {
        let likes = recipe.likes
        if(like){
            setCountLikes(countLikes + 1)
            likes = likes - 1
            setLike(0)
        } else {
            setCountLikes(countLikes - 1)
            likes += 1
            setLike(1)
        }
        likeRecipe(id, likes)
    }

    const getRecipe = async() => {
        const result = await loadRecipe(id)
        await setRecipe(result)
        setCountLikes(recipe.likes)
    }

    useEffect(() => {
        getRecipe()
    }, [countLikes])


    return (
        <div>
        {recipe ? <div className='recipePage'>
        <div className='titleBox'>
        <div>
            <h1 className='recipeTitle'>{recipe.recipeTitle}</h1>
            <h4 style={{fontSize: '14px'}}><FaPen style={{marginRight:'1rem'}}/>{recipe.writer}</h4> 
            <button type='click' onClick={addLike} className='likeBox'><FaHeart style={{marginRight:'1rem'}} />{recipe.likes}</button>  
            <h3><FaPizzaSlice/>{recipe.cuisineType}</h3>  
            <div className='desc'>{recipe.description}</div>
            <div className='topic'>
                <div className='cal clock'> <FaFireAlt style={{marginRight:'1rem', fontSize: '25px',color:'crimson'}}/>{recipe.calories} Cal.</div>
                <div className='cal'> <GiCookingPot style={{marginRight:'1rem', fontSize: '35px', color:'crimson'}}/>{recipe.dishLevel} </div>
                <div className='cal '> <FaClock style={{marginRight:'1rem', fontSize: '25px',color:'crimson'}}/> {recipe.preparationTime} Min.</div>
            </div>
        </div>
        <div className='imageBox'>
            <img className='recipeImage' src={recipe.picture} alt="pasta" />
        </div>
        </div>
            <div className='textBox'>
                <div className='textLeft'>
                    <h2>How to make it.</h2>
                    <ol>
                        {recipe.steps.map(step => 
                            <li key={step.substring(5)} className='step'>{step}</li>
                        )}
                    </ol>  
                </div>  
                <div className='textRight'>
                    <h2>Ingredients </h2>
                    {recipe.servings && <h6>{recipe.servings} servings</h6>}
                    {recipe.ingredients.map(ing => 
                        <div key={ing.ingredientName} className='ing'>
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
>>>>>>> f1a33767b7065046abb7c4721adee1e0b914982b
}

export default RecipePage;
