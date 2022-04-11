import CourseSidePanel from "./course_side_panel";
import { Link } from "react-router-dom";

const CourseContent = (props) => {
  return (
    <div id="course_content" style={{ textAlign: "left" }}>
      <div
        style={{
          display: "grid",
          grid: "1fr/ 10fr 5fr",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div
          id="left_course_panel"
          style={{ backgroundColor: "white", padding: "90px" }}
        >
          <div id="about_this_course">
            <h3>About This Course</h3>
            <div
              dangerouslySetInnerHTML={{ __html: props.data.about_this_course }}
            ></div>
          </div>
          <div>
            <br />
            <h3>What You'll Learn</h3>
            <div
              dangerouslySetInnerHTML={{ __html: props.data.what_you_learn }}
            ></div>
          </div>
          <div id="meet_the_instructor">
            <h3>Meet The Instructor</h3>
            <div
              style={{ display: "grid", grid: "1fr / 2fr 14fr", gap: "20px" }}
            >
              <img
                src={props.data.instructorImage}
                alt={props.data.instructorName}
                style={{ height: "100px" }}
              />
              <div>{props.data.instructor_bio}</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link
              to={`/register?course_name=${props.data.course_name.replace(
                /\s/g,
                "_"
              )}`}
              className="button btn-primary"
            >
              Register
            </Link>
          </div>
        </div>
        <CourseSidePanel data={props.data} />
      </div>
    </div>
  );
};

export default CourseContent;
