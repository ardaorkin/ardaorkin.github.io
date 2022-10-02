import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import React from "react";

const NavBar = () => {
  return (
    <Navbar
      bg="transparent"
      variant="light"
      fixed="top"
      className="navbar-container"
      collapseOnSelect
      expand="lg"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="me-auto">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            {/* <Nav.Link href="#projects">Projects</Nav.Link> */}
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
