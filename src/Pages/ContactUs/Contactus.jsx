import React, { Fragment } from "react";
import NavbarG from "../NavBarG";
import "./ContactUs.css";
import CarouselSection from "./CarouselSection";
const Contactus = () => {
  return (
    <Fragment>
      <NavbarG />
      {/* headersection */}
      <section id="header-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="text-center" id="contacttext">
                Contact Us
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* contact us section */}
      <section id="contact_section" className="py-5">
        <h3 className=" text-center mb-4 ">Get in touch</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h4>Mailing Address</h4>
                  <p>2215 US Highway 1 South North Brunswick, NJ 08902</p>
                  <h4>Phone</h4>
                  <p>
                    P : <span className="text-primary">732.398.9022</span>
                  </p>
                  <p>
                    M : <span className="text-primary">917.518.4331</span>
                  </p>
                  <p>
                    P : <span className="text-primary">347.784.9269</span>
                  </p>
                  <h4>Fax</h4>
                  <p>732.658 3700</p>
                  <h4>Inquiries</h4>
                  <a href="mailto:gurupalace@hotmail.com">
                    <span className="text-primary">gurupalace@hotmail.com</span>
                  </a>
                  <h4 className="py-2">For Banquet, Please Contact</h4>
                  <p className="lead">Mr. Singh</p>
                  <p className="text-primary">917.518.4331</p>
                  <p className="text-primary">347.784.9269</p>
                  <a href="https://www.facebook.com/gurupalacerestaurant/">
                    <i className="fab fa-facebook-f fa-2x ml-2 mt-3 fb-icon"></i>
                  </a>
                  <a href="https://twitter.com/gurupalace">
                    <i className="fab fa-twitter fa-2x ml-2 mt-3 twitter-icon"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <h3 className="text-center">
                    Please fill out this form to contact us
                  </h3>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter first name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter last name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <textarea
                        rows="5"
                        className="form-control"
                        placeholder="Enter your message"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <button className="btn btn-block btn-outline btn-danger mt-3">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid" style={{ padding: "3rem" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.2620174680874!2d-74.50054128498319!3d40.44733737936154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c4759962760d%3A0x565ae8811064cc91!2s2215+US-1%2C+North+Brunswick+Township%2C+NJ+08902%2C+USA!5e0!3m2!1sen!2sin!4v1554708060093!5m2!1sen!2sin"
          style={{ width: "100%", height: "500px" }}
        ></iframe>
      </div>
      <div className="py-3 ">
        <CarouselSection />
      </div>
    </Fragment>
  );
};

export default Contactus;
