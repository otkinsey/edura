import { useState, useEffect } from "react";
import shared from "../../resources/sharedFunctions";
import SignUpForm from "../../resources/SignUpForm";
import SignInForm from "../../resources/SignInForm";
import ForgotPassword from "../../resources/ForgotPassword";

const users = [
  {
    email: "otkinseyub@gmail.com",
    firstName: "Okoa",
    lastName: "Kinsey",
    password: "okoa",
  },
  {
    email: "alyssagd@bu.edu",
    firstName: "Alyssa",
    lastName: "Gunter-Davis",
    password: "alyssa",
  },
];
/**
 * @description multi-tabbed component; handles sign in, sign up, log out, and forgot password
 * @returns SignInPage content
 */

const SignInPage = (props) => {
  const [forgotPassword, setForgotPassword] = useState({
    name: "forgotPassword",
    form: <ForgotPassword />,
  });
  const [selectedForm, setSelectedForm] = useState({
    name: "signIn",
    form: <SignInForm />,
  });

  const [selectorPosition, setSelectorPosition] = useState(0);
  let [signedIn, setSignedIn] = useState(
    localStorage.getItem("signedIn") === "true" ? true : false
  );

  const appendGreeting = (emailArray, user) => {
    const header = document.getElementById("header");
    const userGreeting = document.createElement("span");

    setSignedIn(true);
    props.setLoggedIn(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailArray = users.map((u) => u.email);
    const userEmail = document.querySelector("input[name=email]")
      ? document.querySelector("input[name=email]").value
      : "";
    shared.validateForm();
    if (event.target.name === "signIn") {
      if (
        emailArray.includes(userEmail) &&
        localStorage.getItem("signedIn") === "false"
      ) {
        const user = users.find((u) => u.email === userEmail);
        appendGreeting(emailArray, user);
        localStorage.setItem("user", JSON.stringify(user));
      }
    }
  };

  const logOut = () => {
    props.setLoggedIn(false);
    setSignedIn(false);
  };

  useEffect(() => {
    localStorage.setItem("signedIn", JSON.stringify(signedIn));
    console.log(
      "[useEffect() ] signedIn: ",
      signedIn,
      "localStorage: ",
      localStorage.getItem("signedIn")
    );
  }, [signedIn]);

  /**
   * TROUBLE SHOOT
   * use useEffect to send props to forgotPassword component
   */
  // useEffect(() => {
  //   setSelectedForm();
  // }, [setForgotPassword]);

  return (
    <div id="sign_in_page">
      <div className="form_tabs">
        <span
          onClick={() => {
            setSelectedForm({
              name: "signIn",
              form: <SignInForm />,
            });
            setSelectorPosition(0);
          }}
        >
          Sign In
        </span>
        <span
          onClick={() => {
            setSelectedForm({
              name: "signUp",
              form: <SignUpForm />,
            });
            setSelectorPosition(100);
          }}
        >
          Sign Up
        </span>
        <hr />
        <hr style={{ left: selectorPosition }} className="tab_selector" />
      </div>

      {signedIn === false ? (
        <form
          id="sign_in_sign_up"
          onSubmit={(event) => handleSubmit(event)}
          name={selectedForm.name}
        >
          {selectedForm.form}
        </form>
      ) : (
        <button
          className="btn-secondary"
          style={{ margin: "auto" }}
          onClick={(event) => {
            event.preventDefault();
            logOut();
          }}
        >
          log out
        </button>
      )}
    </div>
  );
};

export default SignInPage;
