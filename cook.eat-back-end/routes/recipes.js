const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const RecipesModel = require('../models/recipes')
const cloudinary = require('../util/cloudinary')
const upload = require('../util/multer')

router.use(express.static('imgaes'))
router.use(express.json())

//get all the recipes
router.get('/', async(req,res) => {
    const allRecipes = await RecipesModel.find({});
    res.send(allRecipes);
})

//get recipe by Id
router.get('/:id', async(req,res) => {
    const {id} = req.params
    try {
        const recipe = await RecipesModel.findById(id);
        res.status(200).send(recipe)
    } catch (err){
        res.status(400).send('recipe does not exist')
    }
})

//add recipe
router.post('/', upload.single('picture'), async(req, res) => {
    try{
        const result = await cloudinary.uploader.upload(req.file.path)
        const recipeBody = {...req.body, 
            picture: result.secure_url, 
            cloudinaryId: result.public_id}
        let recipe = new RecipesModel(recipeBody)
        await recipe.save()
        res.send(recipe)
    } catch (err){
        console.log(err)
        res.status(500).send('uff')
    }
})

// remove recipe
router.delete('/:id', async(req, res) => {
    try{
        const result = await RecipesModel.findOne({_id: req.params.id})
        //delete from cloudinary
        await cloudinary.uploader.destroy(result.cloudinaryId)
        //delete user from database
        await result.remove()
        res.status(200).send('recipe has been deleted')
    } catch (err) {
        res.status(400).send(err)
    }
})

// update recipe
router.put('/:id', upload.single('picture'), async(req, res) => {
    try{
        let recipe = await RecipesModel.findById(req.params.id)
        await cloudinary.uploader.destroy(recipe.cloudinaryId)
        const result = await cloudinary.uploader.upload(req.file.path)
        const updateRecipe = {
            ...req.body,
            picture: result.secure_url || recipe.picture,
            cloudinaryId: result.public_id || recipe.cloudinaryId
        }
        recipe = await RecipesModel.findByIdAndUpdate(req.params.id, updateRecipe, {new:true})
        res.status(200).send(recipe)
    } catch (err) {
        res.status(500).send('the recipe did not updated')
    }
})

// add or remove like to recipe
router.put('/likes/:id', async(req, res) => {
    const {id} = req.params 
    const {likes} = req.body
    try{
    let recipe = await RecipesModel.findById(id)
    let updates = {...recipe._doc, likes: likes}
    console.log(updates)
    recipe = await RecipesModel.findByIdAndUpdate(id, updates, {new:true})
    res.status(200).send(recipe)
    } catch (err) {
        res.status(500).send('the recipe did not updated')
    }
})


module.exports = router 