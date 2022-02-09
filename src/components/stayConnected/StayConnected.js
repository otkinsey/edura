import Button from "react-bootstrap/Button";
const StayConnected = () => {
  return (
    <>
      <h1>Stay Connected</h1>
      <div className="main">
        <form className="">
          <div className="flex row1">
            <div style={{ "flex-basis": "50%" }}>
              <label>first name:</label>
              <input type="text" spaceholder="test"></input>
            </div>
            <div style={{ "flex-basis": "50%" }}>
              <label>last name:</label>
              <input type="text" spaceholder="test"></input>
            </div>
          </div>
          <div className="row2">
            <label>email address:</label>
            <input type="text" spaceholder="test"></input>
          </div>
          <Button>add me</Button>
        </form>
      </div>
    </>
  );
};

export default StayConnected;
