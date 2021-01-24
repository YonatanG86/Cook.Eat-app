import React from "react";
import '../styles/SignUpModal.css';
import RegistrationCarousel from '../Components/RegistrationCarousel';
import { Modal } from "react-bootstrap";


const SignUpModal = ({showSecondModal, onHide}) => {

    return (
        <>
            <Modal
            show={showSecondModal}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="signup">
                <Modal.Header closeButton>
                    <span>Register to add recipes to your recipe box, rate and review recipes, and create your own recipes or menus.</span>
                    Get started with us today!
                </Modal.Header>
                <Modal.Body>
                    <RegistrationCarousel />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SignUpModal;