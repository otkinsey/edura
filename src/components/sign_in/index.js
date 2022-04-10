import { useState, useEffect } from "react";
import shared from "../../resources/sharedFunctions";
import SignUpForm from "../../resources/SignUpForm";
import SignInForm from "../../resources/SignInForm";
import { longStackSupport } from "q";

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

const SignInPage = () => {
  const [selectedForm, setSelectedForm] = useState(SignInForm);
  const [selectorPosition, setSelectorPosition] = useState(0);
  let [signedIn, setSignedIn] = useState(
    localStorage.getItem("signedIn") === "true" ? true : false
  );

  const appendGreeting = (emailArray, user) => {
    const header = document.getElementById("header");
    const userGreeting = document.createElement("span");

    setSignedIn(true);
    userGreeting.style = "color:white;font-size:.9rem;";
    userGreeting.id = "user_greeting";
    userGreeting.innerHTML = `Current User: ${user.firstName} ${user.lastName}`;
    header.append(userGreeting);
  };

  const handleSubmit = (event) => {
    const emailArray = users.map((u) => u.email);
    const userEmail = document.querySelector("input[name=email]").value;
    const user = users.find((u) => u.email === userEmail);
    event.preventDefault();
    shared.validateForm();
    if (
      emailArray.includes(userEmail) &&
      localStorage.getItem("signedIn") === "false"
    ) {
      appendGreeting(emailArray, user);
      localStorage.setItem("user", JSON.stringify(user));
    }
  };

  const logOut = () => setSignedIn(false);

  useEffect(() => {
    localStorage.setItem("signedIn", JSON.stringify(signedIn));
    console.log(
      "[useEffect() ] signedIn: ",
      signedIn,
      "localStorage: ",
      localStorage.getItem("signedIn")
    );
  }, [signedIn]);

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

      {signedIn === false ? (
        <form id="sign_in_sign_up" onSubmit={(event) => handleSubmit(event)}>
          {selectedForm}
        </form>
      ) : (
        <button
          className="btn-secondary"
          style={{ margin: "auto" }}
          onClick={(event) => {
            event.preventDefault();
            logOut();
            document.getElementById("user_greeting").remove();
          }}
        >
          log out
        </button>
      )}
    </div>
  );
};

export default SignInPage;
