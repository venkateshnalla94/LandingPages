import React, { useState } from "react";
// imported react in the page
import "../assets/main.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
// imported components from react bootstrap
import SignUp from "./SignUp";
import LoginForm from "./LoginForm";
//Two form for sign up and login
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Homepage() {
  const [signIn, signUp] = useState(true);
  function handelSubmit(e) {
    e.preventDefault()
    let val = document.getElementById("textName");
    let _listItem = document.getElementById("listItem");
    console.log(_listItem.textContent);
    _listItem.textContent = val.value;
  }
  return (
    <div>
      <Jumbotron className="blackbackground" >
        {/* To give the heading in Jumbotron */}
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
                    {/* Sign up form imported here */}
                    <SignUp></SignUp>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
        <div className="col-md-6">
          <div className="container  justify-content-center mt-5 ">
            {/* Now to have the card with slide down form */}
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
                    {/* Login form component imported here */}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="row mx-auto my-5" style={{ width: "80%" }}>
        <div className="col">
          <Form>
            <Row>
              <Col>
                <Form.Control id="textName" type="text" placeholder="Name" />
              </Col>
              <Col>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select">
                    <option>Description.</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Control className="mx-auto" type="Submit" onClick={handelSubmit} style={{ width: "30%" }} />
                {/* <Button variant="primary" type="submit">
                  Submit
                </Button> */}
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <div className="row mx-auto my-3" style={{ width: "80%" }}>
        <ul>
          <li id="listItem">
            jjsdj
          </li>
        </ul>
      </div>

    </div>
  )

}
export default Homepage;


