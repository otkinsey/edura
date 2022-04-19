import "../../../resources/sharedFunctions";
import ModalDialogueBox from "../../../resources/ModalDialogueBox";
const StayConnected = (props) => {
  return (
    <>
      <ModalDialogueBox
        displayModal={props.displayModal}
        courseName=""
        message="Thank you for contacting us. One of our team members will reach out to you soon"
        resetForm={props.resetForm}
        setDisplayModal={props.setDisplayModal}
      />
      <h1>Stay Connected</h1>
      <div className="main">
        <p>Receive information on upcoming workshops and insights.</p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            props.handleFormSubmit(event);
          }}
        >
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
            className="flex"
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
          <button className="btn-primary">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default StayConnected;
