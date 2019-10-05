import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { callbackify } from "util";
class FormAddPlayer extends Component{
  constructor(props) {
    super(props);
    this.state = {name: '',type:"",listName:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // state = {
  //   name: ""
  // }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      listName: (this.state.name)
    })
  }
  handleChange = (name) => event => {
    this.setState(
       {
        [name]: event.target.value
      }
    )
  }
  render() {
    return (
      <div>
        <div className="row mx-auto my-5" style={{ width: "80%" }}>
        <div className="col">
            <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col>
                <Form.Control id="textName" type="text" placeholder="Name" onChange={this.handleChange("name")}  />
              </Col>
              <Col>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" onChange={this.handleChange('type', "hello")}>
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
                <Form.Control className="mx-auto" type="Submit" style={{ width: "30%" }} />
                {/* <Button variant="primary" type="submit">
                  Submit
                </Button> */}
              </Col>
            </Row>
          </Form>
        </div>
      </div>
        <div className="row mx-auto my-3" style={{ width: "80%" }}>
          {this.state.name}
          {this.state.type}
        <ul>
            <li id="listItem" style={{listStyle:"none"}}>
              {this.state.listName}
          </li>
        </ul>
      </div>
      </div>
    );
  }
}
export default FormAddPlayer;