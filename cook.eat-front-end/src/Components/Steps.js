import React from "react";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import "../styles/AddRecipe.css";
const Steps = ({ removeStep, onStepChange, id }) => {
  return (
    <InputGroup className="mb-2">
      <InputGroup.Prepend>
        <InputGroup.Text>Step {id + 1}</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl as="textarea" onChange={onStepChange} required />
      <Button type="button" className="plus-btn" onClick={() => removeStep(id)}>
        <img src="./addRecipe/delete.png" alt="+" />
      </Button>
    </InputGroup>
  );
};

export default Steps;
