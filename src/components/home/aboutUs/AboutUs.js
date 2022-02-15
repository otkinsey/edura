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
      style={{ width: "500px", display: "inline-block" }}
    >
      {slide.text}
    </div>
  );
});

const setPrev = (slide) => (slide.className = "slide prev");

const resetSlides = (slides) => {
  return slides.map((s) => {
    return (slides.className = "slide");
  });
};

const animateSlider = (e) => {
  const id = e.target.id;
  const currentSlide = document.getElementById(id.replace("button", "slide"));

  const prevSlide = document.getElementsByClassName("active");
  console.log("AboutUs animateSlider: ", prevSlide);
  setPrev(prevSlide[0]);
  currentSlide.className = "slide active";
  resetSlides(Array.from(prevSlide));
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
    #about_us .slide{
      position:absolute;
      right:-500px;
      transition: right .3s;
    }
    #about_us .slide.active{
      right:0;
    }
    #about_us .slide.prev{
      right:500px;
  `;
  return <style>{css}</style>;
};

export { AboutUs, AboutUsStyles };
