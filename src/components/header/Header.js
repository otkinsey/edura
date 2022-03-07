import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as EduraLogo } from "../../images/Edura_logo.svg";
import { ReactComponent as Facebook } from "../../images/social_media_logos/SVGs/facebook.svg";
import { ReactComponent as Youtube } from "../../images/social_media_logos/SVGs/youtube.svg";
import { ReactComponent as Linkedin } from "../../images/social_media_logos/SVGs/linkedin.svg";
import { ReactComponent as Twitter } from "../../images/social_media_logos/SVGs/twitter.svg";

const Header = () => {
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
            <Link to="/training">training</Link>
            <ul className="submenu">
              <li>
                <Link to="/public_assessments">Public</Link>
              </li>
              <li>
                <Link to="/corporate">Corporate</Link>
              </li>
              <li>
                <Link to="upcoming_courses">Upcoming Courses</Link>
              </li>
            </ul>
          </li>
          <li id="resources_main_nav">
            <Link to="/resources">resources</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">sign up</Link> | <Link to="/">sign in</Link>
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
            <Link to="view_courses">View Courses</Link>
          </li>
        </ul>
        <Outlet />
      </section>
    </>
  );
};

export default Header;
