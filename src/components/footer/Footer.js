import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Facebook } from "../../images/social_media_logos/SVGs/facebook.svg";
import { ReactComponent as Youtube } from "../../images/social_media_logos/SVGs/youtube.svg";
import { ReactComponent as Linkedin } from "../../images/social_media_logos/SVGs/linkedin.svg";
import { ReactComponent as Twitter } from "../../images/social_media_logos/SVGs/twitter.svg";

const Header = () => {
  return (
    <>
      <section id="footer" style={{ background: "light-gray" }}>
        <Link to="/" id="logo">
          <img src="images/logo.png" alt="Edura Logo" />
        </Link>

        <ul>
          <li>
            <Link to="/">sign up</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/">sign in</Link>
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
        <Outlet />
      </section>
    </>
  );
};

export default Header;
