import { Link } from "react-router-dom";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import React, { useState } from "react";

const Menu = () => {
  const activeKey = window.location.pathname;

  return (
    <Container>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between border-bottom">
        <Navbar.Brand href="/">Renee Chen</Navbar.Brand>
        <Navbar expand="lg">
          <Container>
          <Navbar.Toggle aria-controls="basic-navbar-naeev" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav defaultActiveKey={activeKey}>
              <Nav.Link href="/work"><menu>Work</menu></Nav.Link>
              <Nav.Link href="/resume"><menu>Resume</menu></Nav.Link>
              <Nav.Link href="/about"><menu>About Me</menu></Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </Container>
  );
};

export default Menu;
