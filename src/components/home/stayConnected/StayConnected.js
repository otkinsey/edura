import Button from "react-bootstrap/Button";
const StayConnected = () => {
  return (
    <>
      <h1>Stay Connected</h1>
      <div className="main">
        <p>Receive information on upcoming workshops and insights.</p>
        <form className="">
          <div className="flex row1">
            <div style={{ flexBasis: "50%" }}>
              <label>first name:</label>
              <input type="text" spaceholder="test"></input>
            </div>
            <div style={{ flexBasis: "50%" }}>
              <label>last name:</label>
              <input type="text" spaceholder="test"></input>
            </div>
          </div>
          <div className="row2">
            <label>email address:</label>
            <input type="text" spaceholder="test"></input>
          </div>
          <div
            class="flex"
            style={{
              flexBasis: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              name="sign_me_up"
              style={{ height: "1rem", width: "1rem", margin: "10px" }}
            ></input>
            <label>I am permitting you to contact me.</label>
          </div>
          <Button>sign up</Button>
        </form>
      </div>
    </>
  );
};

export default StayConnected;
