// import React, { useState } from "react";
// import SignUpModal from '../Components/SignUpModal';
// import LoginModal from '../Components/LoginModal';
// import { Button } from "react-bootstrap";

// const AuthenticationPage = () => {
//     const [show, setShow] = useState(false);
//     const [showSecondModal, setShowSecondModal] = useState(false);
  
//     const handleShowSignUpModal = () => setShowSecondModal(true);
//     const handleCloseSignUpModal = () => setShowSecondModal(false);

//     const handleShowLoginModal = () => setShow(true);
//     const handleCloseLoginModal = () => setShow(false);
    
//     return (
//         <>
//         <h1>Authentication Page</h1>
//             <Button
//             //  size="lg"
//             //  block
//              onClick={handleShowLoginModal}>
//             Log in
//             </Button>
//             <LoginModal show={show} onHide={handleCloseLoginModal} />

//             <Button
//             //  size="lg"
//             //  block
//              onClick={handleShowSignUpModal}>
//             Sign up
//             </Button>
//             <SignUpModal showSecondModal={showSecondModal} onHide={handleCloseSignUpModal} />
//         </>
//     )
// }

// export default AuthenticationPage;