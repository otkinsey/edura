import courseData from "../../resources/courseData";
import { useSearchParams, Link } from "react-router-dom";
import { useState } from "react";
import shared from "../../resources/sharedFunctions";

const RegisterPage = (props) => {
  let [params] = useSearchParams();

  const [displayModal, setDisplayModal] = useState("none");
  const courseNameParam =
    params.get("course_name") === null || params.get("course_name") === ""
      ? "please make a selection"
      : params.get("course_name").replace(/_/g, " ");

  let [courseName, setCourseName] = useState(courseNameParam);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setCourseName(event.target[0].value);
    if (shared.validateForm()) {
      setDisplayModal("block");
    }
    return courseName;
  };

  const resetForm = (event) => {
    event.preventDefault();
    window.location.reload();
  };

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
        <div
          className="modal"
          style={{
            display: displayModal,
            position: "flex",
            justifyItems: "center",
            height: "100%",
            width: "100%",
            background: "rgba(0,0,0,.5)",
          }}
        >
          <div
            className="modal_dialogue_box"
            style={{
              padding: "40px",
              background: "white",
              color: "black",
              position: "fixed",
              textAlign: "left",
              width: "50%",
              top: "25%",
              left: "25%",
              marginRight: "25%",
            }}
          >
            <h4>Success!</h4>
            <p>You have been registered for the following courses:</p>
            <p>{courseName}</p>
            <button
              className="btn-primary"
              onClick={(event) => {
                resetForm(event);
                setDisplayModal("none");
              }}
            >
              Done
            </button>
          </div>
        </div>
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
              courseName = handleFormSubmit(event);
            }}
          >
            <div className="form_row">
              <label>Course Name</label>
              <select defaultValue={courseName}>
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
                  resetForm(event);
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
