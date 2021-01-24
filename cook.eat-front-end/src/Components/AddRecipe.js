import React from "react";
import '../styles/AddRecipe.css';
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";

const AddRecipe = () => {
    
    return (
        <div className="add-recipe-pagewrapper">
            <h4>Add a Recipe</h4>
            <div className="add-recipe-form-container">
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" placeholder="Title" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Type of Cuisine</Form.Label>
                        <Form.Control as="select">
                            <option selected disabled>Choose your type of cuisine</option>
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
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Type of Diet</Form.Label>
                        <Form.Control as="select">
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
                    </Form.Group>

                    <p>Preparation Time</p>
                    <InputGroup className="mb-3">
                        <FormControl 
                        placeholder="Enter the required preparation time in minutes."/>
                        <InputGroup.Append>
                        <InputGroup.Text>min</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>

                    <Form.Group>
                        <Form.Label>Number of Servings</Form.Label>
                        <Form.Control placeholder="Enter a number of servings." />
                    </Form.Group>

                    <Form>
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Upload a picture of your recipe." />
                        </Form.Group>
                    </Form>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <FormControl placeholder="Quantity"/>
                        </InputGroup.Prepend>
                        <InputGroup.Append>
                            <Form.Control as="select">
                                <option>pinch</option>
                                <option>tsp</option>
                                <option>tbs</option>
                                <option>g</option>
                                <option>kg</option>
                                <option>lbs</option>
                                <option>ml</option>
                                <option>cl</option>
                                <option>l</option>
                            </Form.Control>
                        </InputGroup.Append>
                        <FormControl placeholder="Ingredient name"/>
                        <Button>+</Button>
                    </InputGroup>

                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text>Step 1</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" />
                        <Button>+</Button>
                    </InputGroup>

                    <Button type="submit">Submit your Recipe</Button>
                </Form>
            </div>
        </div>
    )
}

export default AddRecipe;