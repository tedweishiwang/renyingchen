import { Link } from "react-router-dom";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import React, { useState } from "react";

const Menu = () => {
  return (
    <Navbar style={{marginLeft: "80%", marginTop: "24px"}}  sticky="top" expand="lg">
      <Container>
        <Nav defaultActiveKey={window.location.pathname}
        className="flex-column">
          <Nav.Link href="/home"><menu>Home</menu></Nav.Link>
          <Nav.Link href="/processing"><menu>Resume</menu></Nav.Link>
          <Nav.Link href="/uiux"><menu>UIUX</menu></Nav.Link>
          <Nav.Link href="/motiongraphics"><menu>Motion Graphics</menu></Nav.Link>
          <Nav.Link href="/typography"><menu>Typography Design</menu></Nav.Link>
          <Nav.Link href="/about"><menu>About Me</menu></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menu;
