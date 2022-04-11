import { useState, useEffect } from "react";
import shared from "../../resources/sharedFunctions";
import SignUpForm from "../../resources/SignUpForm";
import SignInForm from "../../resources/SignInForm";
import ForgotPassword from "../../resources/ForgotPassword";
import ModalDialogueBox from "../../resources/ModalDialogueBox";
const users = [
  {
    email: "otkinseyub@gmail.com",
    firstName: "Okoa",
    lastName: "Kinsey",
    password: "password",
  },
  {
    email: "alyssagd@bu.edu",
    firstName: "Alyssa",
    lastName: "Gunter-Davis",
    password: "password",
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

  const appendGreeting = (emailArray, user) => {
    const header = document.getElementById("header");
    const userGreeting = document.createElement("span");

    props.setSignedIn(true);
    props.setLoggedIn(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailArray = users.map((u) => u.email);
    const passwordArray = users.map((p) => p.password);
    const userEmail = document.querySelector("input[name=email]")
      ? document.querySelector("input[name=email]").value
      : "";
    const userPassword = document.querySelector("input[name=password]")
      ? document.querySelector("input[name=password").value
      : "";
    const validated = shared.validateForm();
    if (event.target.name === "signIn") {
      if (
        emailArray.includes(userEmail) &&
        passwordArray.includes(userPassword) &&
        localStorage.getItem("signedIn") === "false"
      ) {
        const user = users.find((u) => u.email === userEmail);
        appendGreeting(emailArray, user);
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        alert("the username or password entered was not recognized");
      }
    } else if (event.target.name === "signUp" && validated) {
      props.setDisplayModal("block");
    }
  };

  useEffect(() => {
    localStorage.setItem("signedIn", JSON.stringify(props.signedIn));
    console.log(
      "[useEffect() ] signedIn: ",
      props.signedIn,
      "localStorage: ",
      localStorage.getItem("signedIn")
    );
  }, [props.signedIn]);

  /**
   * TROUBLE SHOOT
   * use useEffect to send props to forgotPassword component
   */
  // useEffect(() => {
  //   setSelectedForm();
  // }, [setForgotPassword]);

  return (
    <div id="sign_in_page">
      <ModalDialogueBox
        displayModal={props.displayModal}
        courseName=""
        message="Thank you for signing up. Please visit our courses page to register for a course."
        resetForm={props.resetForm}
        setDisplayModal={props.setDisplayModal}
      />
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
              form: (
                <SignUpForm
                  setDisplayModal={props.setDisplayModal}
                  displayModal={props.displayModal}
                />
              ),
            });
            setSelectorPosition(100);
          }}
        >
          Sign Up
        </span>
        <hr />
        <hr style={{ left: selectorPosition }} className="tab_selector" />
      </div>

      {props.signedIn === false ? (
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
            props.logOut();
          }}
        >
          log out
        </button>
      )}
    </div>
  );
};

export default SignInPage;
