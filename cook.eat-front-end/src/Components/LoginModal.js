import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import '../styles/LoginModal.css';
import cookEatLogo from '../img/logo/cookEatLogo.png';
import { Modal, Form, Button } from "react-bootstrap";
import { useAuth } from "../Conteaxts/autoConteaxt";
import { useForm } from "react-hook-form";

const formFields = {
  email: "",
  password: "",
};
const LoginModal = ({ show, onHide }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const [formInfo, setFormInfo] = useState(formFields);
  const { hendaleLogin } = useAuth();
  const history = useHistory();

  const handleChange = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    hendaleLogin(formInfo);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="login">

          <Modal.Header closeButton>
            <Modal.Title>Sign in to your account</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
              <img id="login-image" alt="user" src={cookEatLogo} />
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  ref={register({
                  pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,})}
                  required />
                <div className="error-box">
                  {errors.email && errors.email.type === "pattern" && (<p className="error-field">Invalid email</p>)}
                </div>
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
                  onChange={handleChange}
                  ref={register({
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,})}
                  required />
                <div className="error-box">
                  {errors.password && errors.password.type === "pattern" && (<p className="error-field">Invalid password</p>)}
                </div>
              </Form.Group>

              <Button type="submit" className="login-btn btn-primary btn-block">
                Log in
              </Button>
              <p>Don't have a login? <span id="register">Register now</span>.</p>
            </Form>
          </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;