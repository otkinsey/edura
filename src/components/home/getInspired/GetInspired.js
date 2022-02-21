import { useState } from "react";

import { IoIosStar, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "react-multi-carousel/lib/styles.css";

const setViewWindowPosition = (elem, index) => {
  const position = elem ? elem.getBoundingClientRect().width : false;
  console.log("GetInspired.js setViewWindowPosition: ", position);
  return position ? (position + 20) * index : 0;
};

const importAll = (r) => {
  let images = {};

  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });

  return images;
};

const GetInspired = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  let images = importAll(
    require.context("../../../images/testimonial_images", false, /\.(jpg|jpeg)/)
  );
  let slides = Object.keys(images).map((image, index) => {
    return (
      <div className="testimonial" key={index}>
        <div className="circle-frame">
          <img src={images[image]} alt={`${image} testimonial`} />
        </div>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis
          lobortis ante, sit amet maximus ante interdum eu. Fusce sed mauris in
          sapien pulvinar consectetur. Fusce neque nulla, mollis at suscipit
          nec, viverra at neque.
        </p>
        <span>
          {Object.keys(images).map((img, index) => (
            <IoIosStar style={{ fill: "#ffab00" }} key={index} />
          ))}
        </span>
      </div>
    );
  });

  return (
    <div className="main flex" id="get-inspired">
      <IoIosArrowBack
        className="slider-nav"
        onClick={() => (slideIndex > 0 ? setSlideIndex(slideIndex - 1) : 0)}
      />
      <div id="view-window" style={{ postion: "relative", width: 678 }}>
        <div
          className="flex"
          id="get_inspired_slider"
          style={{
            position: "relative",
            right: setViewWindowPosition(
              document.querySelector(".circle-frame"),
              slideIndex
            ),
          }}
        >
          {slides}
        </div>
      </div>
      <IoIosArrowForward
        className="slider-nav"
        onClick={() =>
          slideIndex < Object.keys(images).length - 3
            ? setSlideIndex(slideIndex + 1)
            : false
        }
      />
    </div>
  );
};

export default GetInspired;
