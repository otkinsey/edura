import Button from "react-bootstrap/Button";
const AboutUs = () => {
  return (
    <>
      <h1>about us</h1>
      <div className="about_us flex main">
        <div>
          <Button style={{ display: "block" }} variant="outline-secondary">
            who we are
          </Button>
          <Button style={{ display: "block" }} variant="outline-secondary">
            what we do
          </Button>
          <Button style={{ display: "block" }} variant="outline-secondary">
            contact us
          </Button>
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
          mollis erat, nec eleifend nulla. Pellentesque dictum eros tellus, eget
          fringilla neque dignissim a. Sed sagittis mi quis ante imperdiet
          maximus. Aliquam ligula justo, gravida a dapibus a, rutrum ac arcu.
          Pellentesque vel pharetra urna.
        </div>
      </div>
    </>
  );
};

const AboutUsStyles = () => {
  let css = `      
    .about_us{
      display:flex;
    }
    .about_us button{
      flex-basis:200px;
    }
  `;
  return <style>{css}</style>;
};

export { AboutUs, AboutUsStyles };
