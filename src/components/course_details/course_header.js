import { useSearchParams } from "react-router-dom";

const CourseHeader = (props) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div style={{ width: "55%", margin: "auto" }}>
        <div
          id="course_header"
          style={{
            display: "grid",
            grid: "1fr / 3fr 7fr",
            textAlign: "left",
          }}
        >
          <div id="course_header_images">
            <img
              src={props.data.partner_image}
              id="partner_image"
              alt={props.data.partner_name}
              style={{ height: "160px", width: "auto" }}
            ></img>
            <img
              src={props.data.cert_image}
              id="cert_image"
              alt={props.data.description}
              style={{ height: "150px" }}
            ></img>
          </div>
          <div id="course_header_details">
            <h2>{props.courseName}&reg;</h2>
            <div>
              {props.data.start_date} - {props.data.end_date}
            </div>
            <div>{props.data.location}</div>
            <button className="btn-primary">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
