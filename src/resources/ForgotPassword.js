const ForgotPassword = () => {
  return (
    <div className="content_wrapper">
      <form
        name="forgot_password"
        onSubmit={() => alert("an email has been sent to the address on file.")}
      >
        <div className="form_tabs">
          <h4>Forgot Password</h4>
        </div>
        <div className="standard_form" id="forgot_password">
          <div className="form_row">
            <label>Email:</label>
            <input name="email"></input>
          </div>
          <button className="btn-primary">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
