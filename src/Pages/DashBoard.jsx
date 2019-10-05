import React from "react";
import "../assets/main.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form"
import NavBarg from "../Pages/NavBarG";
const DashBoard = () => {
  alert("Under production. Fork the project to watch progress ");
  return (
    <div>
      <div
        className="navbar "
        style={{
          padding: "0%",
          width: "100%",
          margin: "0%",
          position: "fixed",
          zIndex: "999"
        }}
      >
        <NavBarg ></NavBarg>
      </div>
      <div className="container-fluid padzero">
        <div className="row d-flex justify-content-center" >
          <h3 className="display-4 mx-auto text-center catersWrap" style={{ marginTop: "20%", width: "70%", position: "relative", paddingBottom: "20%" }}>
            Serving Best Restaurant,
            Catering & Banquet Services
            In New Jersey
        </h3>
        </div>
      </div>
      <div className="container-fluid" style={{ padding: "0%" }}>
        <h3 className="mx-auto display-4 text-center textWrap">We Are Now Serving Authentic Indo-Chinese Food</h3>
      </div>
      <div className="container-fluid" style={{ padding: "0%" }}>
        <div className="row mt-3 mx-auto" style={{ width: "80%", paddingBottom: "5%" }}>
          <div className="col-lg-6">
            <img src="https://gurupalacerestaurant.com/wp-content/uploads/2019/04/about-1.jpg"
              alt="view"
              style={{ width: "100%", height: "auto" }}></img>
          </div>
          <div className="col-lg-6 my-auto">
            <h4 style={{ fontWeight: "300", fontSize: "3rem" }}>OUR STORY</h4>
            <p>
              At Guru Palace Indian Restaurant,
              we offer distinctive cuisine in an informal,
              friendly setting. Our restaurant enjoys a
              reputation for impeccable service, elegant
              Asian-style décor, and exquisite Indian food.
              Dining at our restaurant is like visiting
              India without leaving your hometown–an exciting
              blend of authentic Indian food, culture, and
              atmosphere awaits.
          </p>
          </div>

        </div>
        <div className="row mt-3 mx-auto" style={{ width: "80%", paddingBottom: "5%" }}>
          <div className="col-lg-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Uber_Eats_2018_logo.svg/1280px-Uber_Eats_2018_logo.svg.png"
              alt="img5"
              style={{ width: "100%", height: "auto" }}></img>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img src="https://i.pinimg.com/originals/20/08/37/20083715ec6934a0339a7596cbb9bcd2.png"
              alt="img1"
              style={{ width: "30%", height: "auto" }}></img>
          </div>
        </div>
      </div>
      <div className="container-fluid packages" style={{ padding: "0%", paddingBottom: "5%" }}>
        <h3 className="mx-auto display-4 text-center catersWrap" >
          CATERING FOR ALL OCCASIONS – GURU CATERS
        </h3>
        <div className="row mx-auto mt-4" style={{ width: "80%" }}>
          <div className="col-lg-4" style={{ paddingBottom: "2rem" }}>
            <Card >
              <Card.Img variant="top" alt="img2" src="https://ssl.c.photoshelter.com/img-get/I0000_t2RSGBl7vw/s/1200/I0000_t2RSGBl7vw.jpg" />
              <Card.Body>
                <Card.Title>Gallery</Card.Title>
                <Card.Text>
                  Browse Our Photto Gallery
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4" style={{ paddingBottom: "2rem" }}>
            <Card >
              <Card.Img className="mx-auto" variant="top" src="https://www.freeiconspng.com/uploads/reservation-icon-13.png" style={{ width: "60%", display: "block", paddingBottom: "7%" }} />
              <Card.Body>
                <Card.Title>Reservations</Card.Title>
                <Card.Text>
                  Book Reservations
                </Card.Text>
                <Button variant="primary">Book</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4" style={{ paddingBottom: "2rem" }}>
            <Card >
              <Card.Img className="mx-auto" variant="top" src="https://previews.123rf.com/images/yupiramos/yupiramos1608/yupiramos160825868/61753492-catering-delicious-food-icon-vector-illustration-design.jpg" style={{ width: "60%", height: "auto", display: "block", paddingBottom: "7%" }} />
              <Card.Body>
                <Card.Title>Catering</Card.Title>
                <Card.Text>
                  Book here for special Packages
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="container-fluid menu" style={{ padding: "0%" }}>
        <div className="row">
          <div className="col-lg-6">
            <img src="https://d-raw.nl/wp-content/uploads/2017/11/Euromast-oktober-2017-973x1216.jpg"
              alt="plate"
              style={{ width: "90%", height: "auto" }}
            ></img>
          </div>
          <div className="col-lg-6 my-auto">
            <h3 className="display-4 menuWrap">OUR MENU</h3>
            <p>Guru Palace is the ideal location
              for whatever the occasion; a casual
              get together, a special occasion or
              group dining. We are equipped with the
               very best equipments for outdoors and
               our massive production line enables us
               to produce food for up to 2000 people.</p>
            <Button className="display-4 menuButton" variant="danger">Check Our Full Menu</Button>
          </div>
        </div>
      </div>
      <div className="container-fluid events" style={{ padding: "0%", paddingBottom: "5%" }}>
        <h3 className="mx-auto display-4 text-center catersWrap" >
          EVENTS
        </h3>
        <div className="row mx-auto mt-4" style={{ width: "80%" }}>
          <div className="col-lg-4" style={{ paddingBottom: "2rem" }}>
            <Card >
              <Card.Img variant="top" src="https://www.hendralauw.com/wp-content/uploads/2013/05/20060727-INBLRSriKrisnharajendraMarket-40-2-blog(pp_w480_h319).jpg" />
              <Card.Body>
                <Card.Title>Celebrate Happy Mothers day with Guru Palace</Card.Title>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4" style={{ paddingBottom: "2rem" }}>
            <Card >
              <Card.Img className="mx-auto" variant="top" src="https://www.alistairveryard.com/images/868ca0ac/50-london-event-photography-holi-festival-indian-celebration.jpg"
                style={{ width: "100%", display: "block", paddingBottom: "5%" }} />
              <Card.Body>
                <Card.Title>Celebrate Holi with Guru Palace</Card.Title>

                <Button variant="primary">Book</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4" style={{ paddingBottom: "2rem" }}>
            <Card >
              <Card.Img className="mx-auto" variant="top" src="http://www.taarago.com/blog/wp-content/uploads/2014/01/indian-dad.jpg" style={{ width: "100%", height: "auto", display: "block" }} />
              <Card.Body>
                <Card.Title>Celebrate  Fathers day with Guru Palace</Card.Title>

                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ padding: "3rem" }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.2620174680874!2d-74.50054128498319!3d40.44733737936154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c4759962760d%3A0x565ae8811064cc91!2s2215+US-1%2C+North+Brunswick+Township%2C+NJ+08902%2C+USA!5e0!3m2!1sen!2sin!4v1554708060093!5m2!1sen!2sin"
          style={{ width: "100%", height: "500px" }}></iframe>
      </div>
      <footer>
        <div className="container-fluid" style={{ color: "white" }}>
          <div className="row mx-auto" style={{ width: "80%" }}>
            <div className="col-lg-4" style={{ padding: "1rem" }}>
              <h4>
                Have a Message
              </h4>
              <Form style={{ color: "white" }}>
                <Form.Group controlId="formBasicEmail">

                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicName">
                  <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group controlId="formBasicName">
                  <Form.Control type="text" placeholder="Contact Number" />
                </Form.Group>
                <Form.Group >
                  <Form.Control type="textarea" placeholder="Your Message" style={{ height: "100px" }} />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send Enquiry
                </Button>
              </Form>
            </div>
            <div className="col-lg-4" style={{ padding: "1rem" }}>
              <h4>
                Contact Us
              </h4>
              <div >
                <ul style={{ listStyleType: "none", padding: "0%", fontSize: "1.2rem", fontWeight: "300" }}>
                  <li>
                    2215 US Highway 1 South, North Brunswick, NJ 08902
                </li>
                  <li>Call Us At</li>
                  <li>P : 732.398.9022</li>
                  <li>M: 917.518.4331</li>
                  <li>M: 347.784.9269</li>
                  <li>Fax: 732.658 3700</li>
                  <li>Email: gurupalace@hotmail.com</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4" style={{ padding: "1rem" }}>
              <h4>
                Hours of operation
              </h4>
              <div >
                <ul style={{ listStyleType: "none", padding: "0%", fontSize: "1.2rem", fontWeight: "300" }}>
                  <li style={{ fontWeight: "900" }}>
                    7 DAYS OPEN
                </li>
                  <li>Monday – Thursday and Sunday</li>
                  <li>Lunch 11:30am – 3pm</li>
                  <li>Dinner 5pm-10pm</li>
                  <li style={{ fontWeight: "900" }}>Friday & Saturday</li>
                  <li>Lunch 11:30am – 3 PM</li>
                  <li>Dinner 5pm – 11p</li>
                  <li style={{ fontWeight: "900" }}>DAILY LUNCH BUFFET</li>
                  <li>Monday to Friday</li>
                  <li>Saturday Ala Carte only</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </footer>
      <div className="container-fluid d-flex justify-content-center" style={{ paddingBottom: "4rem" }}>
        <img src="https://gurupalacerestaurant.com/wp-content/uploads/2019/04/footer-logo-1.png"
          alt="img3"
          style={{ width: "100", height: "auto", marginTop: "-5%", boxShadow: "1px 4px 12px 4px #060606" }}></img>
      </div>
      <p className="text-center" style={{ fontWeight: "700", textShadow: "rgb(140, 131, 131) -1px 4px 7px" }}>
        Copyright © 2007-2019 Guru Palace Restaurants. All Rights Reserved.
      </p>
    </div>
  )
}
export default DashBoard;