import { useState, useEffect } from "react";
import shared from "../../resources/sharedFunctions";

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
        <input name="password"></input>
      </div>
      <button className="btn-primary">Sign Up</button>
      {/* </form> */}
    </div>
  );
};

const SignUpForm = () => {
  return (
    <div id="sign_in">
      {/* <form id="sign_up_form"> */}
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
      {/* </form> */}
    </div>
  );
};

const SignInPage = () => {
  const [selectedForm, setSelectedForm] = useState(SignInForm);
  const [selectorPosition, setSelectorPosition] = useState(0);
  let [signedIn, setSignedIn] = useState("false");

  const handleSubmit = (event) => {
    event.preventDefault();
    shared.validateForm();
    const emailArray = users.map((u) => u.email);
    const userEmail = document.querySelector("input[name=email]").value;
    if (emailArray.includes(userEmail)) {
      const user = users.find((u) => u.email === userEmail);
      const header = document.getElementById("header");
      const userGreeting = document.createElement("span");
      userGreeting.style = "color:white;font-size:.9rem;";
      userGreeting.innerHTML = `Current User: ${user.firstName} ${user.lastName}`;
      header.append(userGreeting);
      setSignedIn("true");
    }
  };

  useEffect(() => {
    localStorage.setItem("signedIn", JSON.stringify(signedIn));
  });

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
      <form onSubmit={(event) => handleSubmit(event)}>{selectedForm}</form>
    </div>
  );
};

export default SignInPage;
