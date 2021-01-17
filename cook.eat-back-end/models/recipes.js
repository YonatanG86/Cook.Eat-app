const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    ingredientName:{
        type: String,
        required: true
    },
    measurement:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    }
});

const recipeSchema = new Schema({
    recipeTitle: {
        type: String,
        required: true
    }, 
    description:{
        type: String,
        required: true
    },
    cuisineType:{
        type: String,
        required: true
    },
    mealType:{
        type: String,
        required: true
    },
    dietType:{
        type: String,
        required: true
    },
    preparationTime:{
        type: Number,
        required: false
    },
    servings:{
        type: Number,
        required: false
    },
    dishLevel:{
        type: String,
        required: false
    },
    dishPicture:{
        type: String,
        required: false
    },
    steps:{
        type: Array,
        required: true
    },
    calories:{
        type: Number,
        required: true
    },
    writer:{
        type: String,
        required: true
    },
    likes:{
        type: Number,
        required: true,
        default: 0
    },
    ingredients: [ingredientSchema],

})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe

