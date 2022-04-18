import React from "react";
import img1 from "../../images/carouselImg1.jpg";
import img2 from "../../images/carouselImg2.jpg";
import img3 from "../../images/carouselImg3.jpg";
import { Button, Carousel } from "react-bootstrap";
import "./Carousel.css";

const HCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item> 
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
          max-height="800px"
        />
        <Carousel.Caption>
          <div>
            <Button variant="outline-light" size="lg" className="button-round">
              КУПИТЬ БИЛЕТ
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          max-height="800px"
        />
        <Carousel.Caption>
          <div>
            <Button variant="outline-light" size="lg" className="button-round">
            КУПИТЬ БИЛЕТ
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Second slide"
          max-height="800px"
        />
        <Carousel.Caption>
          <div>
            <Button variant="outline-light" size="lg" className="button-round" >
            КУПИТЬ БИЛЕТ
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HCarousel;
