import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Resources from "./components/resources";

import AboutUs from "./components/about_us/about_us";
import Coaching from "./components/coaching";
import Contact from "./components/contact/constact";
import Courses from "./components/upcoming_courses";
import Home from "./components/home";
import OurServices from "./components/our_services/our_services";

import Assessments from "./components/maturity_assessment";
import Training from "./components/training/training";
import WhatWeDo from "./components/what_we_do/what_we_do";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about_us" element={<AboutUs />} />
        <Route path="coaching" element={<Coaching />} />
        <Route path="contact" element={<Contact />} />
        <Route path="upcoming_courses" element={<Courses />} />
        <Route path="assessment" element={<Assessments />} />
        <Route path="resources" element={<Resources />} />
        <Route path="training" element={<Training />} />
        <Route path="what_we_do" element={<WhatWeDo />} />
        <Route path="our_services" element={<OurServices />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
