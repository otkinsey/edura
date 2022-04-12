import courseData from "../../resources/courseData";

import { useState } from "react";
import { Link } from "react-router-dom";
import ModalDialogueBox from "../../resources/ModalDialogueBox";

const RegisterPage = (props) => {
  props.setDisplayModal("none");

  if (props.signedIn === false && localStorage.getItem("user") === null) {
    return (
      <div className="content_wrapper">
        <h3>You must be sign in to access this page</h3>
        <div
          style={{
            width: "50%",
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
          <Link to="/sign_in" className="button btn-primary">
            Sign in
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ position: "relative" }}>
        <ModalDialogueBox
          displayModal={props.displayModal}
          courseName={props.courseName}
          message="You have been registered for the following courses:"
          resetForm={props.resetForm}
          setDisplayModal={props.setDisplayModal}
        />
        <div
          className="jumbotron"
          style={{
            background:
              "center -680px/cover no-repeat url(/images/register_header.jpg)",
          }}
        >
          <h1>Register</h1>
        </div>
        <div id="register_page">
          <h2>Course Registration</h2>
          <form
            id="registration_form"
            onSubmit={(event) => {
              event.preventDefault();
              props.handleFormSubmit(event);
            }}
          >
            <div className="form_row">
              <label>Course Name</label>
              <select defaultValue={props.courseName}>
                <option>please make a selection</option>
                {courseData.map((course) => (
                  <option value={course.course_name}>
                    {course.course_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form_row">
              <label>Country:</label>
              <input className="full_length"></input>
            </div>
            <div className="form_row">
              <label>Mailing Address:</label>
              <input className="full_length"></input>
            </div>
            <div className="form_row">
              <label>State/Province:</label>
              <input className="full_length"></input>
            </div>
            <div className="form_row">
              <label>Zip Code:</label>
              <input className="full_length"></input>
            </div>
            <div className="form_row">
              <label>First Name:</label>
              <input className="full_length"></input>
            </div>
            <div className="form_row">
              <label>Last Name:</label>
              <input className="full_length"></input>
            </div>
            <div className="form_row">
              <label>Credit Card Number:</label>
              <input className="full_length"></input>
            </div>
            <div className="form_row">
              <label>Expiration:</label>
              <input className="full_length"></input>
            </div>
            <div className="form_row">
              <label>CVV:</label>
              <input className="full_length"></input>
            </div>
            <div className="form_row">
              <button
                className="btn-secondary"
                onClick={(event) => {
                  props.resetForm(event);
                }}
              >
                Reset
              </button>
              <button className="btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default RegisterPage;
