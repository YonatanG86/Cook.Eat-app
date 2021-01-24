import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/NavigationBar.css";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { BiSearch } from 'react-icons/bi';
import { FaHamburger } from 'react-icons/fa';
import cookEatLogo from '../img/cookEatLogo.png'


const NavigationBar = () => {

    return (
        <div className="nav-container">
          <Navbar className="main-navbar" expand="lg">
            <Navbar.Brand>
              <Link id="main-link" to="/">
                {" "}
                <span id="cook">Cook</span>
                {/* <span id="dot">.</span> */}
                <span id="eat">Eat</span>
                <img
                  alt="logo"
                  src={cookEatLogo}
                  width="47"
                  height="47"
                  className="d-inline-block align-top"/>
              </Link>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link 
                  as={Link} 
                  to="/home" 
                  id="links">
                  Home
                </Nav.Link>
                <NavDropdown title={<FaHamburger/>} id="basic-nav-dropdown">
                  <NavDropdown.Item 
                    as={Link} 
                    to="/my-recipes" 
                    className="dropdown-link">
                    My Recipes
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/saved-recipes"
                    className="dropdown-link">
                    Saved Recipes
                  </NavDropdown.Item>
                  <NavDropdown.Divider id="dropdown-divider" />
                  <NavDropdown.Item
                    as={Link}
                    to="/add-recipe"
                    className="dropdown-link">
                    {" "}Add Recipe
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link 
                  as={Link} 
                  to="/profile-settings" 
                  id="links">
                  My Account
                </Nav.Link>
              </Nav>
              <Form inline className="nav-search-bar">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="search mr-sm-2"
                />
                <Button 
                  id="nav-search-button" 
                  variant="outline-success" 
                  type="submit">
                  <BiSearch />
                </Button>
              </Form>
            </Navbar.Collapse>
            <Nav.Link
              as={Link}
              to="/sign-out"
              variant="outline-success"
              className="links">
              Sign Out
            </Nav.Link>
        </Navbar>
      </div>
    )
}

export default NavigationBar;