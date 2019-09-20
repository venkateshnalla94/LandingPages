import React from "react";
import "../assets/main.css";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Carousel from "react-bootstrap/Carousel";
const Landing = () => {
  return (
    <div>
      <div
        className="navbar"
        style={{
          padding: "0",
          width: "100%",
          position: "fixed",
          zIndex: "999"
        }}
      >
        <Navbar bg="dark width" variant="dark">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#tourism">Tourism</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
      <div className="container-fluid gradient">
        <div className="row">
          <div
            className="col-sm-12"
            style={{ margin: "auto", marginTop: "5em", paddingBottom: "5em" }}
          >
            <Carousel className="gradient">
              <Carousel.Item>
                <img
                  className="d-block w-100 framSize"
                  src="https://drscdn.500px.org/photo/23786941/q%3D80_m%3D2000/v2?webp=true&sig=93c1ee56f247506e5d0342c48c19f58b51188062d4681bedcc6c7bed23a66919"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>We Welcome You</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 framSize"
                  src="https://st.indiarailinfo.com/kjfdsuiemjvcya21/0/7/3/6/1944736/0/img20160528wa0030128658.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>To the Heritage</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 framSize"
                  src="https://i.pinimg.com/originals/ae/59/45/ae59451ac6139db849c9609325cbde83.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Of our City</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      <h1 className="textCenter">Rajahmundry</h1>
      <div className="container">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur
        </p>
      </div>
    </div>
  );
};
export default Landing;
