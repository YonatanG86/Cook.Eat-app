import React, { useState } from "react";
import '../styles/ProfileSettings.css';
import { Col, Form, Button } from "react-bootstrap";
import { CountryDropdown } from "react-country-region-selector";


const ProfileSettings = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [date, setDate] = useState("");
    const [country, setCountry] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    
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