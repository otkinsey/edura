import { AboutUs, AboutUsStyles } from "./components/home/aboutUs/AboutUs";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import GetInspired from "./components/home/getInspired/GetInspired";
import Slider from "./components/home/slider/Slider";
import OurPartners from "./components/home/ourPartners/OurPartners";
import OurServices from "./components/home/ourServices/OurServices";
import StayConnected from "./components/home/stayConnected/StayConnected";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Header />
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
      <Footer />

      {/* Component Styles */}
      <AboutUsStyles />
    </div>
  );
}

export default App;
