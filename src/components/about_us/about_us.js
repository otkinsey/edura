import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1>About us</h1>
      </div>
      <div className="content_wrapper static_page">
        <h1>Who We Are</h1>
        <p>
          Edura is a boutique consulting firm with decades of software
          development experience. We grew up in the era of structured design
          methodologies, adapted our learnings to the rapid development
          approaches, and graduated to Agile.
        </p>
        <p>
          Having partnered with many of the original Agile founders, we worked
          hand-in-hand with them to implement Agile software development
          practices at companies like IBM, Lotus and Verizon. Raj Heda,
          President and CEO of Edura, is a leading author, teacher and
          world-renowned industry consultant. Our in-house experts are master’s
          degree students at Boston University’s Metropolitan College, with
          decades of industry experience.
        </p>
        <ul>
          <li>
            Devin Dumais, Andras Palfi, and Shailesh Tamrakar are Edura’s three
            lead development consultants.
          </li>
          <li>
            Keith Gutfreund leads Edura’s Product Owner and Content Writer
            teams. Keith studied Electrical and Computer Engineering and has
            been a hardware and software developer for over 4 decades.
          </li>
          <li>
            Po-Han (John) Huang and Daniela lead Edura’s Quality certification
            team.
          </li>
          <li>
            Mingyang Zu is lead consultant for Edura’s Business Analyst
            certification team.
          </li>
        </ul>
        <h1>What We Do</h1>
        <p>Edura can help you succeed in two ways:</p>
        <ol>
          <li>
            <b>Training & Certification:</b> our 1-2 day training courses are
            specifically designed to prepare you for the Agile certification
            exams from SAFe, Scrum.org, and Scrum Alliance. You can train with
            confidence due to our Edura guarantee: if you do not succeed in
            passing the certification, you may re-enroll in the training at no
            additional cost. See our different course offerings here for more
            details.
          </li>
          <li>
            <b>Assessment:</b> Edura uniquely offers a suite of detailed
            assessments to determine your specific organization’s capabilities
            and needs. See our different assessment offerings here for more
            details.{" "}
          </li>
        </ol>
        <Link to="/contact" className="btn-primary button">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
