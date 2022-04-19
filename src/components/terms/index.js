import { Link } from "react-router-dom";
import { useRef } from "react";

const Terms = () => {
  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    elem.scrollIntoView(true);
  };
  return (
    <div>
      <div
        className="btn-hot"
        onClick={() => scrollTo("header")}
        style={{
          zIndex: 0,
          position: "fixed",
          right: "140px",
          bottom: "90px",
          height: "50px",
          borderRadius: "25px",
          backgroundColor: "orange",
          color: "white",
          fontSize: "1rem",
          fontWeight: "bold",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          boxShadow: "0 0 13px #777",
          cursor: "pointer",
        }}
      >
        ↑
      </div>
      <div
        className="jumbotron"
        style={{ background: "cover/center url(images/tc_header.jpg)" }}
      >
        <h1 id="">Terms &#38; Conditions</h1>
      </div>
      <div className="content_wrapper static_page">
        <ul>
          <li>
            <Link
              to="/"
              onClick={(event) => {
                event.preventDefault();
                scrollTo(event.target.getAttribute("info"));
              }}
              info="what_data_do_we_collect"
            >
              What data do we collect?
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={(event) => {
                event.preventDefault();
                scrollTo(event.target.getAttribute("info"));
              }}
              info="how_do_we_collect_your_data"
            >
              How do we collect your data?
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={(event) => {
                event.preventDefault();
                scrollTo(event.target.getAttribute("info"));
              }}
              info="how_will_we_use_your_data"
            >
              How will we use your data?
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={(event) => {
                event.preventDefault();
                scrollTo(event.target.getAttribute("info"));
              }}
              info="how_do_we_store_your_data"
            >
              How do we store your data?
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={(event) => {
                event.preventDefault();
                scrollTo(event.target.getAttribute("info"));
              }}
              info="marketing"
            >
              Marketing
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={(event) => {
                event.preventDefault();
                scrollTo(event.target.getAttribute("info"));
              }}
              info="what_are_your_data_protection_rights"
            >
              What are your data protection rights?
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={(event) => {
                event.preventDefault();
                scrollTo(event.target.getAttribute("info"));
              }}
              info="what_are_cookies"
            >
              What are cookies?
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={(event) => {
                event.preventDefault();
                scrollTo(event.target.getAttribute("info"));
              }}
              info="how_do_we_use_cookies"
            >
              How do we use cookies?
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={(event) => {
                event.preventDefault();
                scrollTo(event.target.getAttribute("info"));
              }}
              info="what_types_of_cookies_do_we_use"
            >
              What types of cookies do we use?
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={(event) => {
                event.preventDefault();
                scrollTo(event.target.getAttribute("info"));
              }}
              info="how_to_manage_your_cookies"
            >
              How to manage your cookies
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={(event) => {
                event.preventDefault();
                scrollTo(event.target.getAttribute("info"));
              }}
              info="Privacy_policies_of_other_websites"
            >
              Privacy policies of other websites
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={(event) => {
                event.preventDefault();
                scrollTo(event.target.getAttribute("info"));
              }}
              info="Changes_to_our_privacy_policy"
            >
              Changes to our privacy policy
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={(event) => {
                event.preventDefault();
                scrollTo(event.target.getAttribute("info"));
              }}
              info="how_to_contact_us"
            >
              How to contact us
            </Link>
          </li>
        </ul>
        <h1 id="what_data_do_we_collect">What data do we collect?</h1>
        <h2>Edura collects the following data:</h2>
        <ul>
          <li>
            Personal identification information (Name, email address, phone
            number, etc.)
          </li>
          <li>
            Credit card information is passed on to the credit card processor
            and is not retained.
          </li>
        </ul>
        <h1 id="how_do_we_collect_your_data">How do we collect your data?</h1>
        <p>
          You directly provide Edura with most of the data we collect. We
          collect data and process data when you:
        </p>
        <ul>
          <li>
            Register online or place an order for any of our products or
            services.
          </li>
          <li></li>Voluntarily complete a customer survey or provide feedback on
          any of our message boards or via email.
          <li>Use or view our website via your browser’s cookies.</li>
        </ul>
        <h1 id="how_will_we_use_your_data">How will we use your data?</h1>
        <p>Edura collects your data so that we can:</p>
        <ul>
          <li>Process your order and manage your account.</li>
          <li>
            Email you with special offers on other products and services we
            think you might like.
          </li>
        </ul>
        <p>
          If you agree, Edura will share your data with our partner companies so
          that they may offer you their products and services.<p></p>
        </p>
        <h1 id="how_do_we_store_your_data">How do we store your data?</h1>
        <p>
          Edura securely stores your data in the Amazon Cloud, on secured and
          encrypted servers..
        </p>
        <p>
          Edura will keep your data for one year of inactivity. Once this time
          period has expired, we will remove your data from our servers.
        </p>
        <h1 id="marketing">Marketing</h1>
        <p>
          Edura would like to send you information about products and services
          of ours that we think you might like, as well as those of our partner
          companies.
        </p>
        <p>
          If you have agreed to receive marketing, you may always opt out at a
          later date.
        </p>
        <p>
          You have the right at any time to stop Edura from contacting you for
          marketing purposes or giving your data to other companies.
        </p>
        <h1 id="what_are_your_data_protection_rights">
          What are your data protection rights?
        </h1>
        <p>
          Edura would like to make sure you are fully aware of all of your data
          protection rights. Every user is entitled to the following:
        </p>
        <p>
          The right to access – You have the right to request Edura for copies
          of your personal data. We may charge you a small fee for this service.
        </p>
        <p>
          The right to rectification – You have the right to request that Edura
          correct any information you believe is inaccurate. You also have the
          right to request Edura to complete the information you believe is
          incomplete.
        </p>
        <p>
          The right to erasure – You have the right to request that Edura erase
          your personal data, under certain conditions.
        </p>
        <p>
          The right to restrict processing – You have the right to request that
          Edura restrict the processing of your personal data, under certain
          conditions.
        </p>
        <p>
          The right to object to processing – You have the right to object to
          Edura's processing of your personal data, under certain conditions.
        </p>
        <p>
          The right to data portability – You have the right to request that
          Edura transfer the data that we have collected to another
          organization, or directly to you, under certain conditions.
        </p>
        <p>
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us at our
          email:
        </p>
        <p>Or write to us: info@edura.com</p>
        <h1 id="what_are_cookies">Cookies</h1>
        <p>
          Cookies are text files placed on your computer to collect standard
          Internet log information and visitor behavior information. When you
          visit our websites, we may collect information from you automatically
          through cookies or similar technology
        </p>
        <p>For further information, visit allaboutcookies.org.</p>
        <h1 id="how_do_we_use_cookies">How do we use cookies?</h1>
        <p>
          Edura uses cookies in a range of ways to improve your experience on
          our website, including:
        </p>
        <ul>
          <li>Keeping you signed in</li>
          <li>Understanding how you use our website</li>
        </ul>
        <h1 id="what_types_of_cookies_do_we_use">
          What types of cookies do we use?
        </h1>
        There are a number of different types of cookies, however, our website
        uses:
        <ul>
          <li>
            Functionality – Edura uses these cookies so that we recognize you on
            our website and remember your previously selected preferences. These
            could include what language you prefer and location you are in. A
            mix of first-party and third-party cookies are used.
          </li>
          <li>
            Advertising – Edura uses these cookies to collect information about
            your visit to our website, the content you viewed, the links you
            followed and information about your browser, device, and your IP
            address. Edura sometimes shares some limited aspects of this data
            with third parties for advertising purposes. We may also share
            online data collected through cookies with our advertising partners.
            This means that when you visit another website, you may be shown
            advertising based on your browsing patterns on our website.
          </li>
        </ul>
        <h1 id="how_to_manage_your_cookies">How to manage cookies</h1>
        <p>
          You can set your browser not to accept cookies, and the above website
          tells you how to remove cookies from your browser. However, in a few
          cases, some of our website features may not function as a result.
        </p>
        <h1 id="Privacy_policies_of_other_websites">
          Privacy policies of other websites
        </h1>
        <p>
          The Edura website contains links to other websites. Our privacy policy
          applies only to our website, so if you click on a link to another
          website, you should read their privacy policy.
        </p>
        <h1 id="Changes_to_our_privacy_policy">
          Changes to our privacy policy
        </h1>
        <p>
          Edura keeps its privacy policy under regular review and places any
          updates on this web page. This privacy policy was last updated on 9
          January 2019.
        </p>
        <h1 id="how_to_contact_us">How to contact us</h1>
        <p>
          If you have any questions about Edura’s privacy policy, the data we
          hold on you, or you would like to exercise one of your data protection
          rights, please do not hesitate to <Link to="contact">contact us</Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Terms;
