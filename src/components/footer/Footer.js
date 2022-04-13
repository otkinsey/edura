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
        {/* <div className="main flex"> */}
        <Link to="/" id="logo">
          <img src="images/logo.png" alt="Edura Logo" />
        </Link>
        <div>
          <h3 style={{ color: "white" }}>Related Links</h3>
          <ul>
            <li>
              <Link to="about_us">About Us</Link>
            </li>
            <li>
              <Link to="contact"> Contact Us</Link>
            </li>
            <li>
              <Link to="contact"> Become A Trainer</Link>
            </li>
            <li>
              <Link to="terms">Terms Conditions</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 style={{ color: "white" }}>Follow Us</h3>
          <ul className="social_media_links">
            <li>
              <Link to="http://www.twitter.com">
                <Twitter />
              </Link>
            </li>
            <li>
              <Link to="http://www.youtube.com">
                <Youtube />
              </Link>
            </li>
            <li>
              <Link to="http://www.linkedin.com">
                <Linkedin />
              </Link>
            </li>
            <li>
              <Link to="http://www.facebook.com">
                <Facebook />
              </Link>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Header;
