import CourseSidePanel from "./course_side_panel";

const CourseContent = (props) => {
  return (
    <div id="course_content" style={{ margin: "20px", textAlign: "left" }}>
      <div style={{ display: "grid", grid: "1fr/ 10fr 5fr", gap: "20px" }}>
        <div
          id="left_course_panel"
          style={{ backgroundColor: "white", padding: "90px" }}
        >
          <p id="about_this_course">
            <h3>About This Course</h3>
            <div>{props.data.about_this_course}</div>
          </p>
          <p>
            <h3>What You'll Learn</h3>
            <div
              dangerouslySetInnerHTML={{ __html: props.data.what_you_learn }}
            ></div>
          </p>
          <p id="meet_the_instructor">
            <h3>Meet The Instructions</h3>
            <div
              style={{ display: "grid", grid: "1fr / 2fr 14fr", gap: "20px" }}
            >
              <img
                src={props.data.instructorImage}
                alt={props.data.instructorName}
                style={{ height: "100px" }}
              />
              <p>{props.data.instructor_bio}</p>
            </div>
          </p>
        </div>
        <CourseSidePanel data={props.data} />
      </div>
    </div>
  );
};

export default CourseContent;
