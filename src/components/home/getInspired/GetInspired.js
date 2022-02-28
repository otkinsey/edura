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

const reviews = [
  "Great course; I learned everything I needed and more! I am excited to implement these skills into my role in my organization.",
  "Fantastic experience! Highly recommended! I am looking forward to sharingwhat I’ve learned with my enterprise.",
  "Raj is an excellent instructor, always willing to help and great at explaining concepts.",
  "This course equipped me with the skills I needed to grow and advance in my career. Many thanks!",
  "This content is amazing earth shattery.  My life is changed forever!!!!!!!",
  "I am agile, mobile, and hostile. This course equipped me with the skills I needed to grow and advance in my career. Many thanks!",
  "Three words A, may, zing!!!!!!",
];

const GetInspired = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  let images = importAll(
    require.context("../../../images/testimonial_images", false, /\.(jpg|jpeg)/)
  );
  let slides = Object.keys(images).map((image, index) => {
    return (
      <div className="testimonial" key={index}>
        <div className="circle_frame">
          <img src={images[image]} alt={`${image} testimonial`} />
        </div>
        <p className="text">
          {reviews[index] ? reviews[index] : "This class was great!!!"}
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
              document.querySelector(".circle_frame"),
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
