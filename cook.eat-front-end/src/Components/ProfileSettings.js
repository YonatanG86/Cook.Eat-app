import React, { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { CountryDropdown } from "react-country-region-selector";

const ProfileSettings = () => {
    const [email, setEmail] = useState(""); // This should already exist from the sign up
    const [password, setPassword] = useState(""); // This should already exist from the sign up
    const [username, setUsername] = useState("");
    const [date, setDate] = useState("");
    const [country, setCountry] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    
    return (
        <>
        <h1>Profile Settings</h1>
        <Form onSubmit>
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
          </Form.Row>

          <div className="row-container">
            <div className="row">
              <div className="col-md-12">
                <Form.Group controlId="dob">
                  <Form.Label>Birth Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                    value={date}
                    onChange />
                </Form.Group>
              </div>
            </div>
            <div className="country-select-container">
              <CountryDropdown
                value={country}
                onChange >
              </CountryDropdown>
            </div>

            {/* <div className="phone-input-container">
              <Form.Group as={Col} md="12">
                <Form.Label>Phone Number</Form.Label>
                <PhoneInput
                  type="phone-number"
                  placeholder="Enter phone number"
                  name="phone-number"
                  value={toString(phone)}
                  onChange={(phone) => setPhone({ phone })} />
              </Form.Group>
            </div> */}
          </div>

          {/* <Form.Group className="textarea-container">
            <Form.Label>Biography</Form.Label>
            <Form.Control
              className="form-input"
              name="text"
              placeholder="You can share your past extraterrestrial experience here."
              as="textarea"
              rows={3}
              value={text}
              onChange={(event) => handleTextChange(event)} />
          </Form.Group> */}

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
        </>
    )
}

export default ProfileSettings;