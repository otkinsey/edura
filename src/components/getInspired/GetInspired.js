import Carousel from "react-bootstrap/Carousel";
import "react-multi-carousel/lib/styles.css";
import InspiredImage from "./InspiredImage";
const GetInspired = () => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    console.log("image data: ", images);
    return images;
  }

  let imageDir = "../../images/testimonial_images";
  let images = importAll(
    require.context("../../images/testimonial_images", false, /\.(jpg|jpeg)/)
  );
  let slides = Object.keys(images).map((image, index) => {
    return (
      <Carousel.Item>
        <img src={images[image]} alt={index} />
      </Carousel.Item>
    );
  });

  return (
    <div className="main">
      <Carousel>{slides}</Carousel>
    </div>
  );
};

export default GetInspired;
