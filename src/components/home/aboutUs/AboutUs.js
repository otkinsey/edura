import Button from "react-bootstrap/Button";
import { Carousel } from "react-bootstrap";
const text_array = [
  {
    id: "who_we_are",
    class: "slide active",
    title: "who we are",
    text: "Apex is a boutique Agile consultancy with decades of software development experience. We grew up in the era of structured design methodologies, adapted our learning to the rapid development approaches, and graduated to Agile. Wherever you are in your softwareevolution, we are there to help in your journey.",
  },
  {
    id: "what_we_do",
    class: "slide",
    title: "what we do",
    text: "Text 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  // {
  //   title: "contact us",
  //   text: "Text 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  // },
];

const about_us_slides = text_array.map((slide, index) => {
  return (
    <div
      id={`slide_${slide.id}`}
      className={slide.class}
      style={{ width: "500px" }}
    >
      <h2 style={{ "text-transform": "capitalize" }}>{slide.title}</h2>
      {slide.text}
    </div>
  );
});

const setPrev = (slide) => (slide.className = "slide prev");

const resetSlides = (slides) => {
  return slides.map((s) => {
    return (s.className = "slide");
  });
};

const animateSlider = (e) => {
  const id = e.target.id;
  const currentSlide = document.getElementById(id.replace("button", "slide"));

  const prevSlide = document.querySelector(".about_us .slide.active");

  if (id === prevSlide.id.replace("slide", "button")) {
    console.log("current slide exiting...");
    return;
  }
  setPrev(prevSlide);
  currentSlide.className = "slide active";
  setTimeout(() => resetSlides([prevSlide]), 750);
};

const AboutUs = () => {
  return (
    <>
      <h1>about us</h1>
      <div className="about_us flex main">
        <div>
          <Button
            onClick={animateSlider}
            id="button_who_we_are"
            style={{ display: "block" }}
            variant="outline-secondary"
          >
            who we are
          </Button>
          <Button
            onClick={animateSlider}
            id="button_what_we_do"
            style={{ display: "block" }}
            variant="outline-secondary"
          >
            what we do
          </Button>
          <Button style={{ display: "block" }} variant="outline-secondary">
            contact us
          </Button>
        </div>
        <div id="about_us_text">
          <div className="view-window">
            <div className="slider">{about_us_slides}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const AboutUsStyles = () => {
  let css = `      
    .about_us{
      display:flex;
    }
    .about_us button{
      flex-basis:200px;
    }
    #about_us_text{
      text-align:left;
    }
    #about_us .slide {
      display: block;
      position: absolute;
      right: -500px;
      transition: right .3s;
      background: #efefef;
      min-height: 180px;
    }
    #about_us .slide.active{
      display:block;
      right:0;
      z-index:2
    }
    #about_us .slide.prev{
      z-index:1;
      display:block;
      right:500px;
  `;
  return <style>{css}</style>;
};

export { AboutUs, AboutUsStyles };
