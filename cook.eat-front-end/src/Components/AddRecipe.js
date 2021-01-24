import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Ingredient from "./ingredient";
import "../styles/AddRecipe.css";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";

const formFields = {
  recipeTitle: "",
  description: "",
  cuisineType: "",
  dietType: "",
  preparationTime: "",
  servings: "",
  ingredients: [],
};
const AddRecipe = () => {
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const { register, handleSubmit, errors, watch } = useForm();
  const [formInfo, setFormInfo] = useState(formFields);
  const [ingredient, setIngred] = useState();
  const [file, setFile] = useState();
  const [recipeImage, setRecipeImage] = useState();
  const [ingredients, setIngredient] = useState([]);
  const [firstingredient, setFirstingredient] = useState(true);

  const handleChange = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && types.includes(file.type)) {
      setFile(file);
      let reader = new FileReader();
      reader.onload = (e) => {
        setRecipeImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      alert("Please select an image file (png, jpg,jpeg)!");
    }
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    saveIngredient();
    // let formData = new FormData();
    // formData.append("data", JSON.stringify(formInfo));
    // formData.append("picture", file);
    console.log(formInfo);
  };

  const onIngredient = (e) => {
    setIngred({
      ...ingredient,
      [e.target.name]: e.target.value,
    });
  };

  const saveIngredient = () => {
    setIngredient((ingredients) => [...ingredients, ingredient]);
    formInfo.ingredients = ingredients.filter((item) => item !== undefined);
  };

  // add Ingredient to list
  const addIngredient = () => {
    if (ingredient || firstingredient) {
      setIngredient((ingredients) => [...ingredients, ingredient]);
      if (!firstingredient) setIngred("");
      setFirstingredient(false);
    }
  };

  // remove Ingredient from list
  const removeIngredient = (id) => {
    const newIngredients = ingredients.filter((item, index) => {
      return index != id;
    });
    setIngredient(newIngredients);
  };

  return (
    <div className="add-recipe-form-container">
      <Form className="recipe-form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="recipeTitle"
            type="title"
            placeholder="Title"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            as="textarea"
            rows={3}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="add-group">
          <div className="left-box">
            <Form.Label>Type of Cuisine</Form.Label>
            <Form.Control
              name="cuisineType"
              as="select"
              className="type-cuisine dropdown-link"
              onChange={handleChange}
              required
            >
              <option selected disabled>
                your type of cuisine
              </option>
              <option>American</option>
              <option>Brazilian</option>
              <option>Caribbean</option>
              <option>Chinese</option>
              <option>English</option>
              <option>Ethiopian</option>
              <option>French</option>
              <option>Filipino</option>
              <option>Georgian</option>
              <option>German</option>
              <option>Greek</option>
              <option>Indian</option>
              <option>Indonesian</option>
              <option>Italian</option>
              <option>Jamaican</option>
              <option>Japanese</option>
              <option>Jewish</option>
              <option>Korean</option>
              <option>Mexican</option>
              <option>Polish</option>
              <option>Persian</option>
              <option>Portuguese</option>
              <option>Russian</option>
              <option>Spanish</option>
              <option>Thai</option>
              <option>Vietnamese</option>
            </Form.Control>
          </div>
          <div className="rigth-box">
            <Form.Label>Type of Diet</Form.Label>
            <Form.Control as="select" className="type-diet dropdown-link">
              <option>None</option>
              <option>Gluten-Free</option>
              <option>Halal</option>
              <option>Keto</option>
              <option>Kosher</option>
              <option>Paleo</option>
              <option>Pescaterian</option>
              <option>Vegan</option>
              <option>Vegeterian</option>
            </Form.Control>
          </div>
        </Form.Group>
        <div className="add-group">
          <div className="left-box">
            <Form.Label>Preparation Time</Form.Label>
            <InputGroup className="mb-3">
              <FormControl
                name="preparationTime"
                type="number"
                onChange={handleChange}
                min="1"
                placeholder="time in minutes..."
              />
              <InputGroup.Append>
                <InputGroup.Text>min</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <div className="right-box">
            <Form.Group className="mb-10">
              <Form.Label>Number of Servings</Form.Label>
              <Form.Control
                name="servings"
                type="number"
                onChange={handleChange}
                min="1"
                placeholder="number of servings..."
              />
            </Form.Group>
          </div>
        </div>
        <Button
          className="add-ingredient-btn"
          type="button"
          onClick={addIngredient}
        >
          Add ingredient
          <img src="./addRecipe/plus.png" alt="+" />
        </Button>
        {ingredients.map((item, index) => {
          return (
            <Ingredient
              key={index}
              addIngredient={onIngredient}
              removeIngredient={removeIngredient}
              //   moreIngredient={moreIngredient}
              id={index}
            />
          );
        })}
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Step 1</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="textarea" />
          <Button className="plus-btn">
            <img src="./addRecipe/plus.png" alt="+" />
          </Button>
        </InputGroup>

        <Form.Group className="mt-3">
          <Form.File
            name="picture"
            label="Upload a picture of your recipe."
            onChange={handleFileUpload}
          />
        </Form.Group>

        <Button className="add-recipe-btn" type="submit">
          Submit your Recipe
        </Button>
      </Form>
      <img
        className="add-recipe-img"
        src="./addRecipe/add_recipe.jpg"
        alt="add-recipe"
      />
    </div>
  );
};

export default AddRecipe;
