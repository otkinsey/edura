import ModalDialogueBox from "./ModalDialogueBox";
import { useState } from "react";
const SignUpForm = (props) => {
  console.log("[DIAGNOSTIC - SignUpForm] displayModal: ", props.displayModal);
  return (
    <div id="sign_up_form">
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
        <input name="password" type="password"></input>
      </div>
      <div className="form_row">
        <label>Verify Password:</label>
        <input name="verify_password" type="password"></input>
      </div>
      <button className="btn-primary">Sign Up</button>
    </div>
  );
};

export default SignUpForm;
