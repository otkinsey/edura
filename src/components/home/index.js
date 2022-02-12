import { AboutUs, AboutUsStyles } from "./aboutUs/AboutUs";
import GetInspired from "./getInspired/GetInspired";
import Slider from "./slider/Slider";
import OurPartners from "./ourPartners/OurPartners";
import OurServices from "./ourServices/OurServices";
import StayConnected from "./stayConnected/StayConnected";

const Home = () => {
  return (
    <>
      <section>
        <Slider />
      </section>
      <section>
        <OurServices />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <OurPartners />
      </section>
      <section>
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
