import React, { useState } from "react";
import '../styles/HomePage.css';
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { BiSearch } from 'react-icons/bi';

const HomePage = () => {
    
    return (
        <div className="homepage-wrapper">
            <div className="banner">
                <div className="banner-content">
                    <h4>Find A Recipe</h4>
                    <div className="search-bar">
                        <InputGroup className="mb-3">
                            <FormControl placeholder=""/>
                            <InputGroup.Append>
                            <Button>
                                <BiSearch id="search-icon" />
                            </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage;