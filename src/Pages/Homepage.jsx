import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../assets/main.css";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import SignUp from "./SignUp";
import LoginForm from "./LoginForm";
const Homepage = () => {
  return (
    <div>
      <Jumbotron className="blackbackground" >
        <h3 className="d-flex justify-content-around display-4">Home Page</h3>
        <p className="d-flex justify-content-around display-5 text gettingStarted">Getting Started</p>
      </Jumbotron>
      <div className="row mx-auto" style={{ width: "90%" }}>
        <div className="col-md-6">
          <div className="container  justify-content-center mt-5">
            <Accordion defaultActiveKey="0">
              <Card className="blackbackground" style={{ borderRadius: "12px" }} >
                <Card.Header >
                  <Accordion.Toggle className="text-center" style={{ color: "white", textDecoration: "none" }} as={Button} variant="link" eventKey="1" block>Sign Up</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <SignUp></SignUp>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
        <div className="col-md-6">
          <div className="container  justify-content-center mt-5 ">
            <Accordion className="blackbackground" defaultActiveKey="0" style={{ borderRadius: "12px" }}>
              <Card className="blackbackground" style={{ borderRadius: "12px" }}>
                <Card.Header className="blackbackground">
                  <Accordion.Toggle className="text-center" style={{ color: "white", textDecoration: "none" }} as={Button} variant="link" eventKey="1" block>
                    Click Here To Login In
                   </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <LoginForm></LoginForm>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Homepage;
