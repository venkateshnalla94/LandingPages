import React from "react";
import "../assets/main.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <div>
      <Form className="block">
        <Form.Group controlId="formGridAddress1">
          <Form.Label>User ID</Form.Label>
          <Form.Control type="text" placeholder="Enter User Id" />
        </Form.Group>
        <Form.Group controlId="formGridPassword1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Link to="/dashboard">
          <Button type="submit" variant="primary">
            Sign In
          </Button>
        </Link>

        {/* <input type="submit"></input> */}
      </Form>

    </div >

  );
};
export default LoginForm;
