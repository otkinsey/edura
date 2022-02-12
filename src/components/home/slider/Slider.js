import "./styles.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

const Slider = () => {
  const slideData = [
    {
      name: "About Us",
      imageUrl: "",
      text: "We are your go-to Agile experts with masters degrees and decades of industry experience.",
      buttonText: "buton text",
    },
    {
      name: "What we do",
      imageUrl: "",
      text: "We are Agile experts providing you with our industry leading 360  Assessment, coaching and training.",
      buttonText: "buton text",
    },
    // {
    //   name: "Our Partners",
    //   imageUrl: "",
    //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget semper augue, vel mollis turpis. Vestibulum elementum est ante, nec finibus tortor rutrum vitae.",
    //   buttonText: "buton text",
    // },
    {
      name: "Our services",
      imageUrl: "",
      text: "Maturity Assesment, Training, Coaching",
      buttonText: "buton text",
    },
    // {
    //   name: "Stay Connected",
    //   imageUrl: "",
    //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget semper augue, vel mollis turpis. Vestibulum elementum est ante, nec finibus tortor rutrum vitae.",
    //   buttonText: "buton text",
    // },
  ];

  const SlideText = (props) => {
    let output;
    if (props.slideName === "Our services") {
      output = (
        <ul>
          {props.slide.text.split(",").map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      );
    } else {
      output = <div>{props.slide.text}</div>;
    }
    return output;
  };

  const slides = slideData.map((slide, index) => {
    return (
      <Carousel.Item
        key={index}
        className="slide"
        style={{
          background: `no-repeat url(${`http://localhost:3000/images/slider-images/${slide.name
            .replace(" ", "-")
            .toLowerCase()}.png`})`,
        }}
      >
        {/* <img
          className="d-block w-100"
          src={`http://localhost:3000/images/slider-images/${slide.name
            .replace(" ", "-")
            .toLowerCase()}.png`}
          alt=" "
        /> */}
        <Carousel.Caption>
          <h2>{slide.name}</h2>
          <div className="slideText">
            <SlideText slideName={slide.name} slide={slide} />
            <Button variant="primary">Primary</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return (
    <Carousel variant="dark" interval="10000000">
      {slides}
    </Carousel>
  );
};

export default Slider;
