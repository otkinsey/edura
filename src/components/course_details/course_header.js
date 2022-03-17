import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CourseHeader = (props) => {
  const header_background_image = `/images/course_details_images/${props.data.jira_id}_attachments/Header.jpg`;

  return (
    <div style={{ backgroundColor: "white" }}>
      <div
        id="course_jumbotron"
        style={{
          background: `center/cover no-repeat url(${header_background_image}) `,
          height: "500px",
        }}
      ></div>
      <div style={{ width: "55%", margin: "auto" }}>
        <div
          id="course_header"
          style={{
            display: "grid",
            grid: "165px 125px/ 1fr",
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
              <h2>{props.course_name}&reg;</h2>

              <div>
                {props.data.start_date} - {props.data.end_date}
              </div>
              <div>{`${props.data.city}, ${props.data.state}, ${props.data.country}`}</div>
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
            {props.course_name.includes("customized offering") ? (
              <div></div>
            ) : (
              <img
                src={props.data.cert_image}
                id="cert_image"
                alt={props.data.description}
              ></img>
            )}

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
