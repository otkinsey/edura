import courseData from "../../resources/courseData";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const ResourcesPage = () => {
  let [params] = useSearchParams();

  const [displayModal, setDisplayModal] = useState("none");
  const courseNameParam =
    params.get("course_name") === ""
      ? "please make a selection"
      : params.get("course_name").replace(/_/g, " ");

  let [courseName, setCourseName] = useState(courseNameParam);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    setCourseName(event.target[0].value);
    setDisplayModal("block");
    return courseName;
  };

  const resetForm = (event) => {
    event.preventDefault();
    window.location.reload();
  };

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
        style={{ background: "public/images/Scrolling-Coaching.jpeg" }}
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
                <option value={course.course_name}>{course.course_name}</option>
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
            <label>First Name:</label>
            <input className="full_length"></input>
          </div>
          <div className="form_row">
            <label>Last Name:</label>
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
            <label>Credit Card Number:</label>
            <input className="full_length"></input>
          </div>
          <div className="form_row">
            <label>Expiration:</label>
            <input className="full_length"></input>
          </div>
          <div className="form_row">
            <label>cvv:</label>
            <input className="full_length"></input>
          </div>
          <div className="form_row">
            <button className="btn-secondary" onClick={(event) => resetForm()}>
              Reset
            </button>
            <button className="btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResourcesPage;
