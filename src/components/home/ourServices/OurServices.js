const servicesData = [
  {
    name: "assessment",
    image: "/images/Scrolling-Assessment.jpg",
    text: 'Edura agile experts can perform an Agile Maturity Assessment for your company. We thoroughly study your business organization and measure how the software development practices you follow conform to the <a href="https://agilemanifesto.org/"> Agile Manifesto\'s 12 Agile Principles. </a>',
  },
  {
    name: "coaching",
    image: "/images/Scrolling-Coaching.jpg",
    text: "Working one on one with your own technology leaders, Edura experts share our decades of Agile expertise, with just the right level of sensitivity and suitability for your business needs.",
  },
  {
    name: "courses",
    image: "/images/Scrolling-Courses.jpg",
    text: 'Edura coursework will thoroughly prepare you for Agile certification. Having worked side-byside with the three elite certification agencies, we know just what you will need to gain certification from the three important certification  <a href="https://www.scaledagileframework.com/">SAFe</a>, <a href="https://www.scrum.org/">Scrum.org</a>, and <a href="https://www.scrumalliance.org/">Scrum Alliance</a>.',
  },
];

const ServiceText = (props) => {
  return (
    <p
      dangerouslySetInnerHTML={{
        __html: `${props.service.text.substring(
          0,
          199
        )}<a href='${props.service.name.replace(/\s/g, "_")}'>..more</a>`,
      }}
    ></p>
  );
};

const services = servicesData.map((service) => {
  return (
    <div className="service">
      <img style={{ width: "100%" }} src={service.image} alt="" />
      <h2>{service.name}</h2>
      <ServiceText service={service} />
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
