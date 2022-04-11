import shared from "./sharedFunctions";

const ForgotPassword = () => {
  return (
    <div className="content_wrapper">
      <form
        name="forgot_password"
        onSubmit={(event) => {
          event.preventDefault();
          const validated = shared.validateForm();
          if (validated) {
            alert("an email has been sent to the address on file.");
          } else {
            return true;
          }
        }}
      >
        <div className="form_tabs">
          <h4>Forgot Password</h4>
        </div>
        <div className="standard_form" id="forgot_password">
          <div className="form_row">
            <label>Email:</label>
            <input name="email"></input>
          </div>
          <div
            style={{
              width: "100%",
              position: "relative",
              margin: "auto",
              display: "flex",
              justifyContent: "space-around",
              padding: "40px",
            }}
          >
            <button
              onClick={(event) => {
                event.preventDefault();
                window.history.go(-1);
              }}
              className="btn-secondary"
            >
              Go back
            </button>
            <button className="btn-primary">Send</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
