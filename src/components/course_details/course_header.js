import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CourseHeader = (props) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div
        id="course_jumbotron"
        style={{
          backgroundImage: `url(${props.data.header_background_image})`,
          height: "500px",
        }}
      ></div>
      <div style={{ width: "55%", margin: "auto" }}>
        <div
          id="course_header"
          style={{
            display: "grid",
            grid: "125px 125px/ 1fr",
            textAlign: "left",
          }}
        >
          <div
            id="course_header_images"
            style={{ display: "grid", grid: "1fr / 3fr 7fr" }}
          >
            <img
              src={props.data.partner_image}
              id="partner_image"
              alt={props.data.partner_name}
            ></img>
            <div>
              <h2>{props.courseName}&reg;</h2>

              <div>
                {props.data.start_date} - {props.data.end_date}
              </div>
              <div>{props.data.location}</div>
            </div>
          </div>
          <div
            id="course_header_details"
            style={{
              position: "relative",
              display: "grid",
              grid: "1fr / 3fr 7fr",
            }}
          >
            <img
              src={props.data.cert_image}
              id="cert_image"
              alt={props.data.description}
            ></img>
            <div style={{ position: "relative" }}>
              <Link
                to="/register"
                className="button btn-primary"
                style={{ position: "absolute", bottom: "20px" }}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
