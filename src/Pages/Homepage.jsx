import React from "react";
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
import FormAddPlayer from "./FromAddPlayer";

const Homepage = () => {
  alert("Under production. Fork the project to watch progress,,, Click On Home ");
  // const [signIn, signUp] = useState(true);
  return (
    <div>
      <Jumbotron className="blackbackground" >
        {/* To give the heading in Jumbotron */}
        <a style={{ color: "white", textDecoration: "none" }} href="/landing"><h3 className="d-flex justify-content-around display-4" >Home Page</h3></a>
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

      {/* Need to render Form AddPlayer here */}
      <FormAddPlayer />
    </div>
  )

}
export default Homepage;


