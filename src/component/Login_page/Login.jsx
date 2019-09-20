import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import { BrowserRouter, Route } from "react-router-dom";
import Drag from "../Drag_n_Drop/Drag";
import { Link, Switch } from "react-router-dom";
class Login extends Component {
  render() {
    return (
      <div>
        <section id="bg-website">
          <div className="container py-5" id="con-box">
            <div className="d-flex justify-content-center">
              <div className="col-sm-6">
                <div className="display-4 d-flex justify-content-center text-white">
                  Login
                </div>
                <div>
                  <Form id="login-box">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="text-white" id="con-txt">
                        Email address
                      </Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label className="text-white">Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button
                      className="btn-block btn-primary"
                      variant="primary"
                      type="submit"
                      onSubmit={this.handelSubmit}
                    >
                      <a href="/Drag>">Submit</a>
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
//handelSubmit = () => <Link to="/Drag" Component={Drag} />;

export default Login;
