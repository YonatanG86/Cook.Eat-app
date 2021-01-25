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
    const result = await response.json()
    return result
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

export { addRecipeToProfile, likeRecipe, loadRecipe }