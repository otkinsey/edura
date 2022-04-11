import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import AboutUs from "./components/about_us/about_us";
import Assessments from "./components/assessment";
import Contact from "./components/contact/contact";
import UpcomingCourses from "./components/upcoming_courses";
import CourseDetails from "./components/course_details";
import Home from "./components/home";
import OurServices from "./components/our_services/our_services";
import Resources from "./components/resources";
import Register from "./components/register";
import ForgotPassword from "./resources/ForgotPassword";
import SignIn from "./components/sign_in";
import Training from "./components/training";
import WhatWeDo from "./components/what_we_do/what_we_do";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("signedIn") === null
      ? false
      : JSON.parse(localStorage.getItem("signedIn"))
  );

  const logOut = () => {
    setLoggedIn(false);
    setSignedIn(false);
    ["user", "signedIn"].forEach((arg) => localStorage.removeItem(arg));
  };

  const [signedIn, setSignedIn] = useState(
    localStorage.getItem("signedIn") === "true" ? true : false
  );
  return (
    <div className="App">
      <Header
        logOut={logOut}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        user={
          localStorage.getItem("user") === null
            ? ""
            : JSON.parse(localStorage.getItem("user"))
        }
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Training />} />
        <Route path="/upcoming_courses" element={<UpcomingCourses />} />
        <Route path="/course_details" element={<CourseDetails />} />
        <Route path="/assessment" element={<Assessments />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/register" element={<Register signedIn={signedIn} />} />
        <Route
          path="/sign_in"
          element={
            <SignIn
              signedIn={signedIn}
              setSignedIn={setSignedIn}
              logOut={logOut}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/what_we_do" element={<WhatWeDo />} />
        <Route path="/our_services" element={<OurServices />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
