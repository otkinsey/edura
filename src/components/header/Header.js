import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as EduraLogo } from "../../images/Edura_logo.svg";
import { ReactComponent as Facebook } from "../../images/social_media_logos/SVGs/facebook.svg";
import { ReactComponent as Youtube } from "../../images/social_media_logos/SVGs/youtube.svg";
import { ReactComponent as Linkedin } from "../../images/social_media_logos/SVGs/linkedin.svg";
import { ReactComponent as Twitter } from "../../images/social_media_logos/SVGs/twitter.svg";

const Header = (props) => {
  return (
    <>
      <section id="header">
        <Link to="/" id="logo">
          <EduraLogo />
        </Link>
        <ul>
          <li id="assessment_main_nav">
            <Link to="assessment">assessment</Link>
          </li>
          <li id="training_main_nav">
            <span>training</span>
            <ul className="submenu">
              <li>
                <Link to="/courses">courses</Link>
              </li>
              <li>
                <Link to="upcoming_courses">Upcoming Courses</Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/sign_in">sign up | sign in</Link>
          </li>
        </ul>
        <ul className="social_media_links">
          <li>
            <Link to="/">
              <Twitter />
            </Link>
          </li>
          <li>
            <Link to="/">
              <Youtube />
            </Link>
          </li>
          <li>
            <Link to="/">
              <Linkedin />
            </Link>
          </li>
          <li>
            <Link to="/">
              <Facebook />
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              to="/upcoming_courses"
              style={{
                border: "1px solid white",
                padding: "9px 19px",
                borderRadius: 9,
              }}
            >
              View Courses
            </Link>
          </li>
        </ul>
        <span
          id="user_greeting"
          style={{ display: props.loggedIn ? "inline" : "none" }}
        >
          Current User: {props.user.firstName} {props.user.lastName}
        </span>
        <Outlet />
      </section>
    </>
  );
};

export default Header;
