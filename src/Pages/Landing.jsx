import React from "react";
import "../assets/main.css";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Carousel from "react-bootstrap/Carousel";
import "../Pages/jQuery.js";
import $ from "jquery";
$("#para").fadeIn(2000);
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
                  src="https://www.cab4india.com/wp-content/uploads/2018/03/avr13.jpg"
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
      <div className="container" style={{ display: "flex" }}>
        <p id="para" style={{ width: "50%", marginRight: "2em" }}>
          Contrairement à une opinion répandue, le Lorem Ipsum n'est pas
          simplement du texte aléatoire. Il trouve ses racines dans une oeuvre
          de la littérature latine classique datant de 45 av. J.-C., le rendant
          vieux de 2000 ans. Un professeur du Hampden-Sydney College, en
          Virginie, s'est intéressé à un des mots latins les plus obscurs,
          consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous
          les usages de ce mot dans la littérature classique, découvrit la
          source incontestable du Lorem Ipsum. Il provient en fait des sections
          1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes
          Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire
          pendant la Renaissance, est un traité sur la théorie de l'éthique. Les
          premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...",
          proviennent de la section 1.10.32. L'extrait standard de Lorem Ipsum
          utilisé depuis le XVIè siècle est reproduit ci-dessous pour les
          curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et
          Malorum" de Cicéron sont aussi reproduites dans leur version
          originale, accompagnée de la traduction anglaise de H. Rackham
          (1914).Sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
        <p style={{ width: "50%" }}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.On the other hand, we denounce with righteous
          indignation and dislike men who are so beguiled and demoralized by the
          charms of pleasure of the moment, so blinded by desire, that they
          cannot foresee the pain and trouble that are bound to ensue; and equal
          blame belongs to those who fail in their duty through weakness of
          will, which is the same as saying through shrinking from toil and
          pain. These cases are perfectly simple and easy to distinguish. In a
          free hour, when our power of choice is untrammelled and when nothing
          prevents our being able to do what we like best, every pleasure is to
          be welcomed and every pain avoided. But in certain circumstances and
          owing to the claims of duty or the obligations of business it will
          frequently occur that pleasures have to be repudiated and annoyances
          accepted. The wise man therefore always holds in these matters to this
          principle of selection: he rejects pleasures to secure other greater
          pleasures, or else he endures pains to avoid worse pains
        </p>
      </div>
      <hr></hr>
      <div className="container" style={{ paddingBottom: "10em" }}>
        <h3
          className="textCenter"
          style={{ textAlign: "center", marginBottom: "2em" }}
          id="about"
        >
          Hot Spots
        </h3>
        <div className="row">
          <div className="col-sm-6">
            <ul
              style={{
                listStyleType: "none",
                padding: "0",
                fontSize: "2em",
                fontWeight: "200",
                lineHeight: "2em"
              }}
            >
              <li>Godavari</li>
              <li>Agriculture</li>
              <li>Fishery</li>
              <li>Small Scale Industries</li>
              <li>Education</li>
              <li>Culture</li>
            </ul>
          </div>
          <div
            className="col-sm-6 collection"
            style={{
              position: "relative",
              height: "300px",
              OverflowEvent: "scroll",
              margin: "auto"
            }}
          >
            <span style={{ position: "fixed", zIndex: "999" }}>
              <h3
                style={{
                  position: "absolute",
                  top: "5em",
                  left: "7em",
                  color: "white",
                  textShadow: "-8px 19px 0.4em"
                }}
              >
                Scroll Me Down
              </h3>
            </span>

            <img
              className="d-block w-100 framSize"
              src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Sunset_at_Godavri.JPG"
              alt="First slide"
              style={{ height: "300px" }}
            />
            <img
              className="d-block w-100 framSize"
              src="https://st.indiarailinfo.com/kjfdsuiemjvcya21/0/7/3/6/1944736/0/img20160528wa0030128658.jpg"
              alt="Third slide"
              style={{ height: "300px" }}
            />
            <img
              className="d-block w-100 framSize"
              src="https://cdn42.picsart.com/164728172000202.jpeg?r1024x1024"
              alt="Third slide"
              style={{ height: "300px" }}
            />
            <img
              className="d-block w-100 framSize"
              src="http://www.sarahcantonphotography.co.uk/wp-content/uploads/galleries/post-335/South%20India-0774.jpg"
              alt="Third slide"
              style={{ height: "300px" }}
            />
            <img
              className="d-block w-100 framSize"
              src="https://coursehorse.imgix.net/images/course/3233/main/pratt_institute_5a5169a903d99.png?auto=format%2Cenhance%2Ccompress&crop=entropy&fit=crop&h=630&ixlib=php-1.2.1&q=90&w=1200"
              alt="Third slide"
              style={{ height: "300px" }}
            />
            <img
              className="d-block w-100 framSize"
              src="https://live.staticflickr.com/3926/33203310865_686d4012e5_b.jpg"
              alt="Third slide"
              style={{ height: "300px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
