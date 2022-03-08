import Button from "react-bootstrap/Button";
import { Carousel } from "react-bootstrap";
const text_array = [
  {
    id: "who_we_are",
    class: "about_us_slide active",
    title: "who we are",
    text: "Edura is a boutique Agile consultancy with decades of software development experience. We grew up in the era of structured design methodologies, adapted our learning to the rapid development approaches, and graduated to Agile. Wherever you are in your software evolution, we are there to help in your journey.",
  },
  {
    id: "what_we_do",
    class: "about_us_slide",
    title: "what we do",
    text: "We are Agile experts providing you with our industry leading 360  Assessment, coaching and training.",
  },
];

const about_us_slides = text_array.map((about_us_slide, index) => {
  return (
    <div
      id={`about_us_slide_${about_us_slide.id}`}
      className={about_us_slide.class}
      style={{ width: "500px" }}
    >
      <h2 style={{ "text-transform": "capitalize" }}>{about_us_slide.title}</h2>
      {about_us_slide.text}
    </div>
  );
});

const setPrev = (about_us_slide) =>
  (about_us_slide.className = "about_us_slide prev");

const resetSlides = (slides) => {
  return slides.map((s) => {
    return (s.className = "about_us_slide");
  });
};

const animateSlider = (e) => {
  const id = e.target.id;
  const currentSlide = document.getElementById(
    id.replace("button", "about_us_slide")
  );

  const prevSlide = document.querySelector(".about_us .about_us_slide.active");

  if (id === prevSlide.id.replace("about_us_slide", "button")) {
    console.log("current about_us_slide exiting...");
    return;
  }
  setPrev(prevSlide);
  currentSlide.className = "about_us_slide active";
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
          >
            who we are
          </Button>
          <Button
            onClick={animateSlider}
            id="button_what_we_do"
            style={{ display: "block" }}
          >
            what we do
          </Button>
          <Button
            className="button"
            href="contact"
            style={{ display: "block" }}
          >
            contact us
          </Button>
        </div>
        <div id="about_us_text">
          <div className="view-window">
            <div className="about_us_slider">{about_us_slides}</div>
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
    .about_us .about_us_slide {
      width: 500px;
    }
    .about_us .about_us_slider {
      width: 500px;
      position: relative;
      display: flex;
      height: 178px;
      overflow:hidden;
    }
    .about_us .view-window {
      position: relative;
      overflow: hidden;
      height: 178px;
    }
    #about_us .about_us_slide {
      display: block;
      position: absolute;
      right: -500px;
      transition: right .3s;
      background: #efefef;
      min-height: 180px;
    }
    #about_us .about_us_slide.active{
      display:block;
      right:0;
      z-index:2
    }
    #about_us .about_us_slide.prev{
      z-index:1;
      display:block;
      right:500px;
  `;
  return <style>{css}</style>;
};

export { AboutUs, AboutUsStyles };
