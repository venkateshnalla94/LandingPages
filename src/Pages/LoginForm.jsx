import React from "react";
import "../assets/main.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
const LoginForm = () => {
  return (
    <div>
      <Form className="block">
        <Form.Group controlId="formGridAddress1">
          <Form.Label>User ID</Form.Label>
          <Form.Control type="text" placeholder="Enter User Id" />
        </Form.Group>
        <Form.Group controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button type="submit" variant="primary">Sign In</Button>
        {/* <input type="submit"></input> */}
      </Form>

    </div>

  );
};
export default LoginForm;
