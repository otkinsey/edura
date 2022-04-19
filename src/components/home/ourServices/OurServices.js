const servicesData = [
  {
    name: "Assessment",
    image: "/images/Scrolling-Assessment.jpeg",
    text: "Edura agile experts can perform an Agile Maturity Assessment for your company. We thoroughly study your business organization and measure how the software development practices you follow conform to the Agile Manifesto's 12 Agile Principles.",
  },
  // {
  //   name: "coaching",
  //   image: "/images/Scrolling-Coaching.jpeg",
  //   text: "Working one on one with your own technology leaders, Edura experts share our decades of Agile expertise, with just the right level of sensitivity and suitability for your business needs.",
  // },
  {
    name: "Courses",
    image: "/images/Scrolling-Coaching.jpeg",
    text: "Edura coursework will thoroughly prepare you for Agile certification. Having worked side-byside with the three elite certification agencies, we know just what you will need to gain certification from the three important certification  SAFe, Scrum.org, and Scrum Alliance.",
  },
];

const ServiceText = (props) => {
  return (
    <p
      dangerouslySetInnerHTML={{
        __html: `${props.service.text.substring(
          0
        )}<br /><a href='${props.service.name.replace(
          /\s/g,
          "_"
        )}'> Learn More ></a>`,
      }}
    ></p>
  );
};

const services = servicesData.map((service, idx) => {
  return (
    <div className="service" key={idx}>
      <img style={{ width: "100%" }} src={service.image} alt="" />
      <h2>{service.name}</h2>
      <ServiceText service={service} key={idx} />
    </div>
  );
});

const OurServices = () => {
  return (
    <>
      <h1>Our Services</h1>
      <div className="ourServices flex main">{services}</div>
    </>
  );
};

export default OurServices;
