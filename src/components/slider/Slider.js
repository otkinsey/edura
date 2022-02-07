import "./styles.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  const slideData = [
    {
      name: "About Us",
      imageUrl: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget semper augue, vel mollis turpis. Vestibulum elementum est ante, nec finibus tortor rutrum vitae.",
      buttonText: "buton text",
    },
    {
      name: "Our Services",
      imageUrl: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget semper augue, vel mollis turpis. Vestibulum elementum est ante, nec finibus tortor rutrum vitae.",
      buttonText: "buton text",
    },
    {
      name: "Our Partners",
      imageUrl: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget semper augue, vel mollis turpis. Vestibulum elementum est ante, nec finibus tortor rutrum vitae.",
      buttonText: "buton text",
    },
    {
      name: "Get Inspired",
      imageUrl: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget semper augue, vel mollis turpis. Vestibulum elementum est ante, nec finibus tortor rutrum vitae.",
      buttonText: "buton text",
    },
    {
      name: "Stay Connected",
      imageUrl: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget semper augue, vel mollis turpis. Vestibulum elementum est ante, nec finibus tortor rutrum vitae.",
      buttonText: "buton text",
    },
  ];

  const slides = slideData.map((slide, index) => {
    return (
      <Carousel.Item
        key={index}
        className="slide"
        style={{ background: `no-repeat url(${slide.imageUrl})` }}
      >
        <img
          className="d-block w-100"
          src=""
          alt={`${slide.name} sample text`}
        />
        <Carousel.Caption>
          <h2>{slide.name}</h2>
          <div className="slideText">
            <p>{slide.text}</p>
            <Button variant="primary">Primary</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return <Carousel variant="dark">{slides}</Carousel>;
};

export default Slider;
