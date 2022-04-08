import { useState } from "react";

const SignUpForm = () => {
  return (
    <div id="sign_in_form">
      <form>
        <div className="form_row">
          <label>Email:</label>
          <input></input>
        </div>
        <div className="form_row">
          <label>Password:</label>
          <input></input>
        </div>
        <button className="btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

const SignInForm = () => {
  return (
    <div id="sign_in">
      <form id="sign_up_form">
        <div className="form_row">
          <label>First Name:</label>
          <input></input>
        </div>
        <div className="form_row">
          <label>Last Name:</label>
          <input></input>
        </div>
        <div className="form_row">
          <label>Email:</label>
          <input></input>
        </div>
        <div className="form_row">
          <label>Password:</label>
          <input></input>
        </div>
        <div className="form_row">
          <label>Verify Password:</label>
          <input></input>
        </div>
        <button className="btn-primary">Sign In</button>
      </form>
    </div>
  );
};

const SignInPage = () => {
  const [selectedForm, setSelectedForm] = useState(SignInForm);
  const [selectorPosition, setSelectorPosition] = useState(0);
  return (
    <div id="sign_in_page">
      <div className="form_tabs">
        <span
          onClick={() => {
            setSelectedForm(SignInForm);
            setSelectorPosition(0);
          }}
        >
          Sign In
        </span>
        <span
          onClick={() => {
            setSelectedForm(SignUpForm);
            setSelectorPosition(100);
          }}
        >
          Sign Up
        </span>
        <hr />
        <hr style={{ left: selectorPosition }} className="tab_selector" />
      </div>
      {selectedForm}
    </div>
  );
};

export default SignInPage;
