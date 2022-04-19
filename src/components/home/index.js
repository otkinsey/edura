import { AboutUs, AboutUsStyles } from "./aboutUs/AboutUs";
import GetInspired from "./getInspired/GetInspired";
import Slider from "./slider/Slider";
import OurPartners from "./ourPartners/OurPartners";
import OurServices from "./ourServices/OurServices";
import StayConnected from "./stayConnected/StayConnected";

const Home = (props) => {
  return (
    <>
      <section id="slider">
        <Slider />
      </section>
      <section id="our_services">
        <OurServices />
      </section>
      <section
        id="about_us"
        className="dark_background"
        style={{ background: "center/cover url(images/home_about_us.jpeg)" }}
      >
        <AboutUs />
      </section>
      <section id="our_partners">
        <OurPartners />
      </section>
      <section
        id="get_inspired"
        className="dark_background"
        style={{
          background: "center/cover url(images/home_get_inspired.jpg)",
        }}
      >
        <h1>Get Inspired</h1>
        <GetInspired />
      </section>
      <section id="stay_connected">
        <StayConnected  resetForm={props.resetForm} displayModal={props.displayModal} handleFormSubmit={props.handleFormSubmit} setDisplayModal={props.setDisplayModal} />
      </section>

      <AboutUsStyles />
    </>
  );
};

export default Home;
