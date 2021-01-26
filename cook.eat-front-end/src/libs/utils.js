const BASE_URL = 'http://localhost:5000'

const loadRecipe = async(id) => {
    const response = await fetch(`${BASE_URL}/recipes/${id}`)
    const data = await response.json()
    return data
}

const addRecipeToProfile = async(userId, recipeId) => {
    const response = await fetch(`${BASE_URL}/users/likes/${userId}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({recipeId})
    })
    if(response.status === 200){
        const result = await response.text()
        return result
    } else {
        return 
    }
}

const likeRecipe = async(id, likes) => {
    const response = await fetch(`${BASE_URL}/recipes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({likes})
    })
    const result = await response.json()
    return result    
}

const getMyRecipes = async(id) => {
    const response = await fetch(`${BASE_URL}/recipes/myRecipes/${id}`)
    let data = await response.json()
    if (data.length < 1){
        data = null
    }
    return data
}

const getUserById = async(id) => {
    const response = await fetch(`${BASE_URL}/users/${id}`)
    const user = await response.json()
    return user
}

const getSavedRecipes = async(id) => {
    let savedRecipes = []
    const user = await getUserById(id)
    const recipes = user.recipesSaved
    if(recipes){
        for(let recipe of recipes){
            const response = await fetch(`${BASE_URL}/recipes/${recipe}`)
            const data = await response.json()
            savedRecipes.push(data)
        }
    }
    return savedRecipes
}



export { addRecipeToProfile, likeRecipe, loadRecipe, getMyRecipes, getSavedRecipes }