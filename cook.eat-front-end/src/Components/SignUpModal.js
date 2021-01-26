import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import '../styles/SignUpModal.css';
import RegistrationCarousel from '../Components/RegistrationCarousel';
import { Modal } from "react-bootstrap";


const SignUpModal = () => {
    const [show, setShow] = useState(true);

    const history = useHistory();

    const handleShow = () => setShow(true);

    const handleClose = () => {
        setShow(false);
        history.push("/home");
    };

    return (
        <>
        <Modal 
            show={show} 
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="signup"
        >
            <Modal.Header closeButton>
                <span>Register to add recipes to your recipe box, rate and review recipes, and create your own recipes or menus.</span>
                <span>Get started with us today!</span>
            </Modal.Header>
            <Modal.Body>
                <RegistrationCarousel />
            </Modal.Body>
        </Modal>
    </>
    )
}

export default SignUpModal;