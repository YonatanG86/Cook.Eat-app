import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import RegistrationCarousel from '../Components/RegistrationCarousel';
import '../styles/SignUpModal.css';
import cookEatLogo from '../img/logo/cookEatLogo.png';
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
                className="signup-modal"
            >
                <Modal.Header closeButton>
                    <div className="signup-header">
                        <p>Register to 
                            <span id='cook'>Cook</span>
                            <span id='eat'>Eat</span>
                            <img alt='logo' src={cookEatLogo} width='47' height='47' className='d-inline-block align-top' /> 
                            to add recipes to your recipe box, rate and review recipes, and create your own culinary masterpieces!
                        </p>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <RegistrationCarousel />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SignUpModal;