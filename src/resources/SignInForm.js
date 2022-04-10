import { Link } from "react-router-dom";
import { useEffect } from "react";

const SignInForm = (props) => {
  return (
    <div id="sign_in_form">
      <div className="form_row">
        <label>Email:</label>
        <input name="email"></input>
      </div>
      <div className="form_row">
        <label>Password:</label>
        <input name="password" type="password"></input>
      </div>
      <button className="btn-primary">Sign In</button>
      <Link to="/forgotPassword">forgot password?</Link>
    </div>
  );
};

export default SignInForm;
