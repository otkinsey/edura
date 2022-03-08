import { AboutUs, AboutUsStyles } from "./aboutUs/AboutUs";
import GetInspired from "./getInspired/GetInspired";
import Slider from "./slider/Slider";
import OurPartners from "./ourPartners/OurPartners";
import OurServices from "./ourServices/OurServices";
import StayConnected from "./stayConnected/StayConnected";
import { render } from "react-dom";

const Home = () => {
  return (
    <>
      <section id="slider">
        <Slider />
      </section>
      <section id="our_services">
        <OurServices />
      </section>
      <section id="about_us">
        <AboutUs />
      </section>
      <section id="our_partners">
        <OurPartners />
      </section>
      <section id="get_inspired">
        <h1>Get Inspired</h1>
        <GetInspired />
      </section>
      <section id="stay_connected">
        <StayConnected />
      </section>

      <AboutUsStyles />
    </>
  );
};

export default Home;
