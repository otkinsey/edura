import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home";
import PublicAssessment from "./components/public_assessment/publicAssessment";
import Corporate from "./components/corporate_assessment";
import Coaching from "./components/coaching";
import Resources from "./components/resources";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="public_assessments" element={<PublicAssessment />} />
        <Route path="corporate" element={<Corporate />} />
        <Route path="coaching" element={<Coaching />} />
        <Route path="resources" element={<Resources />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
