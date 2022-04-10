const SignInForm = () => {
  return (
    <div id="sign_in_form">
      {/* <form onSubmit={(event) => signInFormSubmit(event)}> */}
      <div className="form_row">
        <label>Email:</label>
        <input name="email"></input>
      </div>
      <div className="form_row">
        <label>Password:</label>
        <input name="password" type="password"></input>
      </div>
      <button className="btn-primary">Sign In</button>
      {/* </form> */}
    </div>
  );
};

export default SignInForm;
