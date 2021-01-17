import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/NavigationBar.css";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
// import { BiSearch } from 'react-icons/bi';
// import cookEatLogo from '../img/'


const NavigationBar = () => {

    return (
        <Navbar className="main-navbar" expand="lg">
        <Navbar.Brand>
          <Link id="main-link" to="/">
            <img
            //   alt=""
            //   src={cookEatLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {" "}Cook.Eat
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Browse?" id="basic-nav-dropdown">
              <NavDropdown.Item 
                as={Link} 
                to="/my-feed" 
                className="dropdown-link">
                My Feed
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/recipes"
                className="dropdown-link">
                Recipes
              </NavDropdown.Item>
              <NavDropdown.Divider id="dropdown-divider" />
              <NavDropdown.Item
                as={Link}
                to="/something"
                className="dropdown-link">
                {" "}Something?
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link 
              as={Link} 
              to="/profile-settings" 
              className="links">
              Profile Settings
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="{BiSearch}"
              className="mr-sm-2"
            />
            <Button 
              className="nav-search-button" 
              variant="outline-success" 
              type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
        <Nav.Link
          as={Link}
          to="/sign-out"
          variant="outline-success"
          className="logout-link">
          Signup/Login <b>OR</b> Sign Out
        </Nav.Link>
      </Navbar>
    )
}

export default NavigationBar;