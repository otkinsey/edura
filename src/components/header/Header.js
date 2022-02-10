import React from "react";
import { ReactComponent as Facebook } from "../../images/social_media_logos/SVGs/facebook.svg";
import { ReactComponent as Youtube } from "../../images/social_media_logos/SVGs/youtube.svg";
import { ReactComponent as Linkedin } from "../../images/social_media_logos/SVGs/linkedin.svg";
import { ReactComponent as Twitter } from "../../images/social_media_logos/SVGs/twitter.svg";

const Header = () => {
  return (
    <>
      <section id="header">
        <a href="/" id="logo">
          <img src={require("../../images/logo.png")} alt="Edura Logo" />
        </a>
        <ul>
          <li id="assessment_main_nav">
            assessment
            <ul className="submenu">
              <li>
                <a href="/">Public</a>
              </li>
              <li>
                <a href="/">Corporate</a>
              </li>
              <li>
                <a href="/">Upcoming Courses</a>
              </li>
            </ul>
          </li>
          <li id="training_main_nav">training</li>
          <li id="coaching_main_nav">coaching</li>
          <li id="resources_main_nav">resources</li>
        </ul>
        <ul>
          <li>
            <a href="/">sign up</a>
          </li>
          <li>|</li>
          <li>
            <a href="/">sign in</a>
          </li>
        </ul>
        <ul className="social_media_links">
          <li>
            <a href="/">
              <Twitter />
            </a>
          </li>
          <li>
            <a href="/">
              <Youtube />
            </a>
          </li>
          <li>
            <a href="/">
              <Linkedin />
            </a>
          </li>
          <li>
            <a href="/">
              <Facebook />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Header;
