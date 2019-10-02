import React from "react";
import "../assets/main.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
const DashBoard = () => {
  return (
    <div>
      <div
        className="navbar"
        style={{
          padding: "0",
          width: "100%"
        }}
      >
        <Navbar className="navBg" bg="dark width" variant="dark" style={{ backgroundColor: "#000000" }}>
          <Navbar.Brand href="#home"><img src="https://gurupalacerestaurant.com/wp-content/uploads/2019/04/logo-1.png"
            alt="logo"
            style={{ height: "auto", width: "60%" }}

          ></img>
          </Navbar.Brand>
          <Navbar.Brand className="ml-auto" href="#home" style={{ display: "inline" }}>Home</Navbar.Brand>
          <Nav className="-auto">
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#banquet">Banquet Facility</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#catering">Catering</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
          <Button variant="danger">Book A Banquet</Button>
        </Navbar>
      </div>
      <div className="container-fluid padzero">
        <div className="row d-flex justify-content-center" >
          <h3 className="display-4 mx-auto text-center" style={{ marginTop: "10%", width: "70%" }}>
            Serving Best Restaurant,
            Catering & Banquet Services
            In New Jersey
        </h3>
        </div>
      </div>
    </div>
  )
}
export default DashBoard;