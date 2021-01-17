import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal, Form, Button } from "react-bootstrap";

const LoginModal = ({show, onHide}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const history = useHistory();
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    }
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        history.push("/home");
    };

    return (
        <>
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form 
                className="login-form"
                onSubmit={ (event) => handleSubmit(event) }>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => handleEmailChange(event)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(event) => handlePasswordChange(event)} />
                    </Form.Group>
                    <Button 
                        type="submit"
                        className="login-btn btn-primary btn-block">
                    Log in
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default LoginModal;