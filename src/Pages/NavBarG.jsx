import React from "react";
import "../assets/main.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const NavBarG = () => {
  return (
    <div style={{ width: "100%" }}>
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark width" variant="dark">
        <Navbar.Brand href="#home"><img src="https://gurupalacerestaurant.com/wp-content/uploads/2019/04/logo-1.png"
          alt="logo"
          style={{ height: "auto", width: "60%" }}
        ></img></Navbar.Brand>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Gallery</Nav.Link>
            <NavDropdown title="Menu" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Banquet Facility</Nav.Link>
            <Nav.Link href="#pricing">Catering</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Book A Banquet</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>
  )
}
export default NavBarG;