import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal, Form, Col, Button } from "react-bootstrap";

const SignUpModal = ({showSecondModal, onHide}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [errors, setErrors] = useState({
      username: false,
      email: false,
      password: false
    });

    const history = useHistory();

    const handleUsername = (event) => {
        setUsername(event.target.value);
      };
    
    const handleEmail = (event) => {
    setEmail(event.target.value);
    };

    const handlePassword = (event) => {
    setPassword(event.target.value);
    };

    const handleConfirmedPassword = (event) => {
    setConfirmedPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
    let isFormValid = true;
    let usernameError = false;
    let emailError = false;
    let passwordError = false;
    let confirmedPasswordError = false;

    if (!username) {
        isFormValid = false;
        usernameError = true;
    }

    if (!email) {
        isFormValid = false;
        emailError = true;
    }

    if (!password) {
        isFormValid = false;
        passwordError = true;
    }

    if (!confirmedPassword || password !== confirmedPassword) {
        isFormValid = false;
        confirmedPasswordError = true;
    }

    setErrors({
        username: usernameError,
        email: emailError,
        password: passwordError,
        confirmedPassword: confirmedPasswordError
    });

    if (isFormValid) {
        event.preventDefault();
        // history.push("/home");
        }
    };

    return (
        <>
            <Modal
            show={showSecondModal}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
                <Modal.Header closeButton>
                <Modal.Title>
                    Cook.Eat
                    <br />
                    <span>Register to add recipes to your recipe box, rate and review recipes, and create your own recipes or menus.</span>
                    {/* <>
                        <h5>Get started with us today!</h5>
                        <p>Create your account by filling out the information below</p>
                    </> */}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form
                onSubmit={(event) => handleSubmit(event)}>
                 
                    <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                    type="username"
                    placeholder="Enter username"
                    value={username}
                    onInput={(event) => handleUsername(event)}
                    isInvalid={!!errors.username} />
                    <Form.Control.Feedback type="invalid">Username required</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onInput={(event) => handleEmail(event)}
                    isInvalid={!!errors.email} />
                    <Form.Control.Feedback type="invalid">Email required</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onInput={(event) => handlePassword(event)}
                    isInvalid={!!errors.password}/>
                    <Form.Control.Feedback type="invalid">Password required</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmedPassword}
                    onInput={(event) => handleConfirmedPassword(event)}
                    isInvalid={!!errors.confirmedPassword} />
                    <Form.Control.Feedback type="invalid">The password is empty or doesn't match</Form.Control.Feedback>
                    </Form.Group>

                    <div className="button-container">
                        <Button
                        className="signup-btn btn-primary btn-block"
                        type="submit">
                        Sign up
                        </Button>
                        <p className="disclaimer">
                            By continuing you agree to Cook.Eat's Terms of Service &amp;
                            Privacy Policy.
                        </p>
                    </div>
                </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SignUpModal;