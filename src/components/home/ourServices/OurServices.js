const OurServices = () => {
  return (
    <>
      <h1>Our Services</h1>
      <div className="ourServices flex main">
        <div className="service">
          <img
            style={{ width: "100%" }}
            src="/images/Scrolling-Assessment.jpg"
            alt=""
          />
          <h2>Maturity Assessment</h2>
          <p>
            Apex agile experts can perform an Agile Maturity Assessment for your
            company. We thoroughly study your business organization and measure
            how the software development practices you follow conform to the
            <a href="https://agilemanifesto.org/">
              Agile Manifesto's 12 Agile Principles.
            </a>
          </p>
        </div>
        <div className="service">
          <img
            style={{ width: "100%" }}
            src="/images/Scrolling-Coaching.jpg"
            alt=""
          />
          <h2>Coaching</h2>
          <p>
            Working one on one with your own technology leaders, Apex experts
            share our decades of Agile expertise, with just the right level of
            sensitivity and suitability for your business needs.
          </p>
        </div>
        <div className="service">
          <img
            style={{ width: "100%" }}
            src="/images/Scrolling-Courses.jpg"
            alt=""
          />
          <h2>Courses</h2>
          <p>
            Apex coursework will thoroughly prepare you for Agile certification.
            Having worked side-byside with the three elite certification
            agencies, we know just what you will need to gain certification from
            the three important certification organizations{" "}
            <a href="https://www.scaledagileframework.com/">SAFe</a>,{" "}
            <a href="https://www.scrum.org/">Scrum.org</a>, and
            <a href="https://www.scrumalliance.org/">Scrum Alliance</a>.
          </p>
        </div>
      </div>
    </>
  );
};

export default OurServices;
