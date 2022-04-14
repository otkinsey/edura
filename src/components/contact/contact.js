import { useState } from "react";
import ModalDialogueBox from "../../resources/ModalDialogueBox";
const ContactForm = (props) => {
  return (
    <div>
      <ModalDialogueBox
        displayModal={props.displayModal}
        courseName=""
        message="Thank you for contacting us. One of our team members will reach out to you soon"
        resetForm={props.resetForm}
        setDisplayModal={props.setDisplayModal}
      />
      <div
        className="jumbotron"
        style={{
          background: "center/cover url(images/contact_us_header.jpg)",
        }}
      >
        <h1>Contact Us</h1>
      </div>
      <div
        className="course_header"
        style={{
          display: "flex",
          height: "250px",
          textAlign: "left",
          alignItems: "center",
        }}
      >
        <div id="course_header_images" style={{ width: "50%", margin: "auto" }}>
          <img
            src="images/Edura_logo.svg"
            id="partner_image"
            alt="edura logo"
          ></img>
          <div id="contact_info">
            <div className="form_row" style={{ display: "flex" }}>
              <div>Address:</div>
              <div>388 Commonwealth Avenue</div>
            </div>
            <div className="form_row" style={{ display: "flex" }}>
              <div>Phone:</div>
              <div>(617)-352-7789</div>
            </div>
            <div className="form_row" style={{ display: "flex" }}>
              <div>Hours:</div>
              <div>9:00 am - 5:00 pm EST </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content_wrapper" style={{ background: "#e5e5e5" }}>
        <form
          name="contact_form"
          onSubmit={(event) => {
            event.preventDefault();
            props.handleFormSubmit(event);
          }}
        >
          <div
            id="contact_form"
            className="standard_form"
            style={{ borderColor: "#bbb", borderRadius: "8px" }}
          >
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
              <label>Subject:</label>
              <input name="subject"></input>
            </div>
            <div className="form_row">
              <label>Message:</label>
              <textarea name="message"></textarea>
            </div>
            <button className="btn-primary">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
