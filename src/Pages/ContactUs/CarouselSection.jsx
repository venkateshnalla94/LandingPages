import React, { Fragment } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./carouselSection.css";
const CarouselSection = () => {
  return (
    <AliceCarousel mouseDragEnabled className="carousel-section">
      {/* <img src={require("../img/1.jpg")} onDragStart={handleOnDragStart} />

      <img src={require("../img/2.jpg")} onDragStart={handleOnDragStart} />
      <img src={require("../img/3.jpg")} onDragStart={handleOnDragStart} /> */}

      <div className="row" id="image-1">
        <div className="col">
          <p
            className="text-white text-center "
            style={{ marginTop: "115px", fontSize: "20px" }}
          >
            <span>
              <i className="fas fa-quote-left fa-2x mr-2"></i>
              We held our daughter's first birthday at the Guru Palace banquet
              hall. We were more than happy with this experience. The staff were
              friendly, helpful, and efficient. The owner came to check on us
              several times during the party to ensure all our needs were met.
              All the guests loved the food. We would highly recommend this
              restaurant for your future events.
              <i className="fas fa-quote-right fa-2x ml-2"></i>
            </span>
          </p>
          <h5
            className="text-white text-center mt-4"
            style={{ fontStyle: "italic" }}
          >
            - Priya
          </h5>
        </div>
      </div>

      <div className="row" id="image-2">
        <div className="col">
          <p
            className="text-white text-center "
            style={{ marginTop: "115px", fontSize: "20px" }}
          >
            <span>
              <i className="fas fa-quote-left fa-2x mr-2"></i>
              Top notch! The food is perfect, service friendly, courteous,
              caring and very prompt, and the rooms are well decorated. You can
              tell the kitchen spends many many hours preparing for their guests
              arrival. The dishes here have been honed to perfection.
              <i className="fas fa-quote-right fa-2x ml-2"></i>
            </span>
          </p>
          <h5
            className="text-white text-center mt-4"
            style={{ fontStyle: "italic" }}
          >
            - Simran
          </h5>
        </div>
      </div>

      <div className="row" id="image-3">
        <div className="col">
          <p
            className="text-white text-center "
            style={{ marginTop: "115px", fontSize: "20px" }}
          >
            <span>
              <i className="fas fa-quote-left fa-2x mr-2"></i>
              Just to let you know that everyone loved the food. The hot naans
              and kebabs were a hit. Jasbir and staff were very courteous and
              did a great job. Hopefully we will have an opportunity to use your
              services again in the near future.
              <i className="fas fa-quote-right fa-2x ml-2"></i>
            </span>
          </p>
          <h5
            className="text-white text-center mt-4"
            style={{ fontStyle: "italic" }}
          >
            - Gregg
          </h5>
        </div>
      </div>

      <div className="row" id="image-4">
        <div className="col">
          <p
            className="text-white text-center "
            style={{ marginTop: "115px", fontSize: "20px" }}
          >
            <span>
              <i className="fas fa-quote-left fa-2x mr-2"></i>
              Overall service is great and Jasbir, who owns the place is amazing
              and very flexible in taking last minute request modifications or
              the banquet hall birthday party. Food is great - both North Indian
              and South Indian & Veg and Meat. Staff is very courteous as well.
              I would strongly recommend people to throw parties in their
              banquet halls.
              <i className="fas fa-quote-right fa-2x ml-2"></i>
            </span>
          </p>
          <h5
            className="text-white text-center mt-4"
            style={{ fontStyle: "italic" }}
          >
            - Rick Johnson
          </h5>
        </div>
      </div>
    </AliceCarousel>
  );
};

export default CarouselSection;
