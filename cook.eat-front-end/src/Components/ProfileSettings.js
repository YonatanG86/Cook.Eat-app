import React, { useState } from "react";
import TypesOfCuisines from '../Components/TypesOfCuisines';
import '../styles/ProfileSettings.css';
import { Col, Row, Form, Button, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { CountryDropdown } from "react-country-region-selector";
import Keto from "../img/keto.png";


const ProfileSettings = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [date, setDate] = useState("");
    const [country, setCountry] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [cookingSkills, setCookingSkills] = useState([1, 3]);

    const handleCookingSkillsSelect = (value) => setCookingSkills(value);
    
    return (
        <div className="profile-settings-pagewrapper">
          <h4>Profile Settings</h4>
          <Form className="profile-settings-form" onSubmit>
            <h6>Edit Profile Settings</h6>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  className="form-input"
                  name="username"
                  type="username"
                  placeholder="Username"
                  value={username}
                  onChange />
              </Form.Group>
              <Form.Group as={Col} controlId="dob">
                <Form.Label>Birth Date</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  value={date}
                  onChange />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="form-input"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="form-input"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange />
              </Form.Group>
            </Form.Row>

            <div className="country-select-container">
              <CountryDropdown
                value={country}
                onChange >
              </CountryDropdown>
            </div>

            <h6 id="culinary-preferences">Edit Culinary Preferences</h6>
              <div className="preferences-container">
                <div className="diets-container">
                  <fieldset>
                    <Form.Group as={Row}>
                      <Form.Label as="legend" column sm={3}>
                        Special Diets
                      </Form.Label>
                      <Col sm={9} id="diets-checkbox-column">
                        <Form.Check
                          type="checkbox"
                          label="Gluten-Free"
                          name="typeOfDiet"
                          id="typeOfDiet1">
                        </Form.Check>

                        <Form.Check
                          type="checkbox"
                          label="Halal"
                          name="typeOfDiet"
                          id="typeOfDiet2"
                        />
                        <Form.Check
                          type="checkbox"
                          label="Keto"
                          // label={<img
                          //   alt="logo"
                          //   src={Keto}
                          //   width="47"
                          //   height="47"
                          //   className="d-inline-block align-top"/>}
                          name="typeOfDiet"
                          id="typeOfDiet3"
                        />
                        <Form.Check
                          type="checkbox"
                          label="Kosher"
                          name="typeOfDiet"
                          id="typeOfDiet4"
                        />
                        <Form.Check
                          type="checkbox"
                          label="Paleo"
                          name="typeOfDiet"
                          id="typeOfDiet5"
                        />
                        <Form.Check
                          type="checkbox"
                          label="Pescaterian"
                          name="typeOfDiet"
                          id="typeOfDiet6"
                        />
                        <Form.Check
                          type="checkbox"
                          label="Vegeterian"
                          name="typeOfDiet"
                          id="typeOfDiet7"
                        />
                        <Form.Check
                          type="checkbox"
                          label="Vegan"
                          name="typeOfDiet"
                          id="typeOfDiet8">
                        </Form.Check>
                      </Col>
                    </Form.Group>
                  </fieldset>
                </div>
                <div className="culinary-level">
                  <p>Culinary Level</p>    
                  <ToggleButtonGroup 
                    className="cookingskills-buttongroup"
                    type="checkbox" 
                    value={cookingSkills} 
                    onChange={handleCookingSkillsSelect}>
                    <ToggleButton value={1} id="beginner">
                      Beginner
                      <br/>
                      icon
                      </ToggleButton>
                    <ToggleButton value={2} id="intermediate">
                      Intermediate
                      <br />
                      icon
                      </ToggleButton>
                    <ToggleButton value={3} id="advanced">
                      Advanced
                      <br/>
                      icon
                      </ToggleButton>
                  </ToggleButtonGroup>
                </div>
             </div>





          {/* <p>Types of cuisines</p>
          <TypesOfCuisines /> */}



            <Form.Group id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                name="checkbox"
                label="Save Profile Changes"
                checked={isChecked}
                onChange={(event) => {setIsChecked(event.target.checked)}} />
            </Form.Group>









            <Button
              className="save-profile-button"
              controlId="save-profile-button"
              variant="primary"
              type="submit"
              disabled={isChecked ? false : true}>
              Ok
            </Button>
          </Form>
        </div>
    )
}

export default ProfileSettings;