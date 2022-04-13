import "bootstrap/dist/js/bootstrap.bundle.js";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

const Slider = () => {
  const slideData = [
    {
      name: "About Us",
      imageUrl: "about_us",
      text: "<h3>Who We Are</h3> <p>We are your go-to Agile experts with masters degrees and decades of industry experience.</p> <h3>What We Do</h3> <p>We are Agile experts providing you with our industry leading 360  Assessment, coaching and training.</p>",
      buttonText: "collaborate",
    },
    {
      name: "Assessment",
      imageUrl: "our_services",
      text: "We are Agile experts providing you with our industry leading 360  Assessment, coaching and training.",
      buttonText: "schedule assessment",
    },
    {
      name: "Courses",
      imageUrl: "Scrolling-Courses",
      text: "Edura coursework will thoroughly prepare you for Agile certification. Having worked side-byside with the three elite certification agencies, we know just what you will need to gain certification from the three important certification organizations <a href='https://scaledagile.com'>SAFe</a>, <a href='https://Scrum.org'>Scrum.org</a>, and <a href='https://www.scrumalliance.org/'>Scrum Alliance.",
      buttonText: "view courses",
    },
  ];

  const SlideText = (props) => {
    let output;
    output = <div dangerouslySetInnerHTML={{ __html: props.slide.text }}></div>;
    return output;
  };

  const slides = slideData.map((slide, index) => {
    const regex = new RegExp("_", "g");
    const imgUrl = `/images/slider-images/${slide.imageUrl
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
            <SlideText
              slideName={slide.name}
              slide={slide}
              elem={document.querySelector("slideText")}
            />
          </div>
          <Button
            className="button"
            href={slide.name.replace(/\s/g, "_").toLowerCase()}
            variant="primary"
          >
            {slide.buttonText}
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return (
    <Carousel variant="light" interval="5000" className="dark_background">
      {slides}
    </Carousel>
  );
};

export default Slider;
