import { AboutUs, AboutUsStyles } from "./components/aboutUs/AboutUs";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import GetInspired from "./components/getInspired/GetInspired";
import Slider from "./components/slider/Slider";
import OurPartners from "./components/ourPartners/OurPartners";
import OurServices from "./components/ourServices/OurServices";
import StayConnected from "./components/stayConnected/StayConnected";

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
        <GetInspired />
      </section>
      <section>
        <StayConnected />
      </section>
      <Footer />

      {/* Component Styles */}
      <AboutUsStyles />
    </div>
  );
}

export default App;
