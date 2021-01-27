import React from "react";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import "../styles/AddRecipe.css";
const Ingredient = ({ addIngredient, removeIngredient, id, dealtas }) => {
  return (
    <InputGroup className="ingredient mb-3">
      <FormControl
        name="ingredientName"
        // value={dealtas.ingredientName}
        placeholder="Ingredient name"
        onChange={addIngredient}
        required
      />
      <InputGroup.Prepend>
        <FormControl
          name="quantity"
          // value={dealtas.quantity}
          type="number"
          placeholder="Quantity"
          onChange={addIngredient}
          required
        />
      </InputGroup.Prepend>
      <InputGroup.Append>
        <Form.Control
          required
          name="units"
          // value={dealtas.units}
          as="select"
          onChange={addIngredient}
        >
          <option value="" selected disabled>
            Measurement
          </option>
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

      <Button
        type="button"
        className="plus-btn"
        onClick={() => removeIngredient(id)}
      >
        <img src="../addRecipe/delete.png" alt="garbage-icon" />
      </Button>
    </InputGroup>
  );
};

export default Ingredient;
