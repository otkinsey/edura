import React from "react";
import { ReactComponent as Facebook } from "../../images/social_media_logos/SVGs/facebook.svg";
import { ReactComponent as Youtube } from "../../images/social_media_logos/SVGs/youtube.svg";
import { ReactComponent as Linkedin } from "../../images/social_media_logos/SVGs/linkedin.svg";
import { ReactComponent as Twitter } from "../../images/social_media_logos/SVGs/twitter.svg";

const Header = () => {
  return (
    <>
      <section id="header">
        <a href="/">
          <img src={require("../../images/logo.png")} alt="Edura Logo" />
        </a>
        <ul>
          <li>assessment</li>
          <li>training</li>
          <li>coaching</li>
          <li>resources</li>
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
