import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import Ingredient from "./ingredient";
import Steps from "./Steps";
import { useAuth } from "../Conteaxts/autoConteaxt";
import { useHistory } from "react-router-dom";
import "../styles/AddRecipe.css";
import { BounceLoader } from "react-spinners";
import { css } from "@emotion/react";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";

const override = css`
  position: fixed;
  top: 40%;
  left: 30%;
  border-color: red;
`;

const formFields = {
  recipeTitle: "",
  description: "",
  cuisineType: "",
  dietType: "",
  preparationTime: 0,
  servings: 0,
  ingredients: [],
  steps: [],
  calories: 0,
  dishLevel: "",
  mealType: "",
  writer: localStorage.getItem("user"),
};
const AddRecipe = () => {
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addRecipe } = useAuth();
  const { register, handleSubmit, errors } = useForm();
  const [formInfo, setFormInfo] = useState(formFields);
  const [ingredient, setIngred] = useState();
  const [file, setFile] = useState();
  const [recipeImage, setRecipeImage] = useState();
  const [ingredients, setIngredients] = useState([{}]);
  const [step, setStep] = useState();
  const [steps, setSteps] = useState([""]);

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
      notifyError("Please select an image file (png, jpg, jpeg)");
    }
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setLoading(true);
    setDisabled(true);
    const res = saveIngredient();
    if (res) {
      let formData = new FormData();
      formData.append("data", JSON.stringify(formInfo));
      formData.append("picture", file);
      const result = await addRecipe(formData);
      if (result) {
        notifySuccess("Your recipe🥝has been successfully saved!");
        history.push("/my-recipes");
      }
      setLoading(false);
      setDisabled(false);
    }
  };

  // on change in Ingredient input
  const onIngredient = (e) => {
    setIngred({
      ...ingredient,
      [e.target.name]: e.target.value,
    });
  };

  // on change in step input
  const onStepChange = (e) => {
    setStep(e.target.value);
  };

  //save the last ingredient and remove undefineds items
  const saveIngredient = () => {
    if (steps.length === 0 || ingredients.length === 0) {
      notifyError("📋 What about preparation instructions or ingredients?");
      return false;
    } else {
      ingredients.push(ingredient);
      steps.push(step);
      formInfo.ingredients = ingredients.filter(
        (item) => Object.keys(item).length !== 0
      );
      formInfo.steps = steps.filter((item) => item !== "");
      setIngredients([]);
      setSteps([]);
      return true;
    }
  };

  // add Ingredient to list
  const addIngredient = () => {
    if (ingredient || ingredients.length === 0) {
      setIngredients((ingredients) => [...ingredients, ingredient]);
      setIngred("");
    }
  };

  // remove Ingredient from list
  const removeIngredient = (id) => {
    const newIngredients = ingredients.filter((item, index) => {
      return index !== id;
    });
    setIngredients(newIngredients);
  };

  const addStep = () => {
    if (step || steps.length === 0) {
      setSteps((steps) => [...steps, step]);
      setStep("");
    }
  };

  const removeStep = (id) => {
    const newsteps = steps.filter((item, index) => {
      return index !== id;
    });
    setSteps(newsteps);
  };

  const notifyError = (error) =>
    toast.error(error, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifySuccess = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="add-recipe-form-container">
      <ToastContainer className="notification" />
      <Form validated className="recipe-form" onSubmit={handleSubmit(onSubmit)}>
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
              className="type-diet dropdown-link"
              onChange={handleChange}
              required
            >
              <option value="" selected disabled>
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
          <div className="middle-box">
            <Form.Label>Type of Diet</Form.Label>
            <Form.Control
              name="dietType"
              as="select"
              className="type-diet dropdown-link"
              onChange={handleChange}
            >
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
          <div className="rigth-box">
            <Form.Label>Dish Level</Form.Label>
            <Form.Control
              name="dishLevel"
              as="select"
              className="type-diet dropdown-link"
              onChange={handleChange}
            >
              <option>None</option>
              <option>Beginners</option>
              <option>Amateurs</option>
              <option>Professional</option>
            </Form.Control>
          </div>
          <div className="last-box">
            <Form.Label>Meal Type</Form.Label>
            <Form.Control
              required
              name="mealType"
              as="select"
              className="type-diet dropdown-link"
              onChange={handleChange}
            >
              <option value="" selected disabled>
                meal Type
              </option>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
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
          <div className="middle-box">
            <Form.Label>Number of Servings</Form.Label>
            <InputGroup className="mb-3">
              <FormControl
                name="servings"
                type="number"
                onChange={handleChange}
                min="1"
                placeholder="number of servings..."
              />
              <InputGroup.Append>
                <InputGroup.Text>Diners</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <div className="right-box">
            <Form.Label>Calories</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                name="calories"
                type="number"
                onChange={handleChange}
                min="1"
                placeholder="Calories..."
              />
              <InputGroup.Append>
                <InputGroup.Text>cal</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </div>

        {ingredients.map((item, index) => {
          return (
            <Ingredient
              key={index}
              addIngredient={onIngredient}
              removeIngredient={removeIngredient}
              id={index}
            />
          );
        })}
        <Button
          className="add-ingredient-btn"
          type="button"
          onClick={addIngredient}
        >
          Add ingredient
          <img src="./addRecipe/plus.png" alt="+" />
        </Button>
        {steps.map((item, index) => {
          return (
            <Steps
              key={index}
              removeStep={removeStep}
              onStepChange={onStepChange}
              id={index}
            />
          );
        })}
        <Button
          className="add-ingredient-btn steps-btn"
          type="button"
          onClick={addStep}
        >
          Add steps
          <img src="./addRecipe/plus.png" alt="+" />
        </Button>
        <Form.Group className="upload-img mt-3">
          <Form.File
            name="picture"
            label="Upload a picture"
            className="file"
            onChange={handleFileUpload}
            required
          />
          <img src={recipeImage} alt="" />
        </Form.Group>

        <Button className="add-recipe-btn" type="submit" disabled={disabled}>
          Submit your Recipe
        </Button>
      </Form>
      <img
        className="add-recipe-img"
        src="./addRecipe/add_recipe.jpg"
        alt="add-recipe"
      />
      <BounceLoader
        css={override}
        size={80}
        color={"#B73032"}
        loading={loading}
      />
    </div>
  );
};

export default AddRecipe;
