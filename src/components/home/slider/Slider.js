import "./styles.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

const Slider = () => {
  const slideData = [
    {
      name: "About Us",
      imageUrl: "about_us",
      text: "We are your go-to Agile experts with masters degrees and decades of industry experience.",
      buttonText: "collaborate",
    },
    {
      name: "Assessment",
      imageUrl: "our_services",
      text: "We are Agile experts providing you with our industry leading 360  Assessment, coaching and training.",
      buttonText: "schedule an assessment",
    },
    {
      name: "Courses",
      imageUrl: "what_we_do",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget semper augue, vel mollis turpis. Vestibulum elementum est ante, nec finibus tortor rutrum vitae.",
      buttonText: "view courses",
    },
    {
      name: "Coaching",
      imageUrl: "AdobeStock_230418597",
      text: "Maturity Assesment, Training, Coaching",
      buttonText: "our offerings",
    },
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
    const regex = new RegExp("_", "g");
    const imgUrl = `http://localhost:3000/images/slider-images/${slide.imageUrl
      .replace(/\s/g, "_")
      .toLowerCase()}.jpeg`;
    return (
      <Carousel.Item
        key={index}
        className="slide"
        style={{
          background: `center / cover no-repeat url(${imgUrl}) `,
        }}
      >
        <Carousel.Caption>
          <h1>{slide.name}</h1>
          <div className="slideText">
            <SlideText slideName={slide.name} slide={slide} />
            <Button
              className="button"
              href={slide.name.replace(/\s/g, "_").toLowerCase()}
              variant="primary"
            >
              {slide.buttonText}
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return (
    <Carousel variant="light" interval="5000">
      {slides}
    </Carousel>
  );
};

export default Slider;
