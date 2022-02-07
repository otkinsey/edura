const OurPartners = () => {
  return (
    <>
      <h1>OurPartners</h1>
      <div className="main flex">
        <div>
          <h2>Scrum Alliance</h2>
          <img
            src={require("../../images/scrum_alliance.png")}
            alt="partner logo"
          />
        </div>
        <div>
          <h2>SAFE</h2>
          <img
            src={require("../../images/scrum-org-logo.png")}
            alt="partner logo"
          />
        </div>
        <div>
          <h2>Scrum.org</h2>
          <img src={require("../../images/safe-logo.png")} alt="partner logo" />
        </div>
      </div>
    </>
  );
};

export default OurPartners;
