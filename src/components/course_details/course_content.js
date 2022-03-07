import CourseSidePanel from "./course_side_panel";

const CourseContent = (props) => {
  return (
    <div id="course_content">
      <div style={{ display: "grid", grid: "1fr/ 1fr 1fr" }}>
        <div
          id="what_youll_learn"
          dangerouslySetInnerHTML={{
            __html: [
              `<div \
                id='about_this_course' \
                dangerouslySetInnerHTML={{ \
                  __html: [ \
                    '<h3>About This Course</h3>, \
                    ${props.data.about_this_course}, \
                  ], \
                }} \
              ></div>`,
              "<h3>What You'll Learn</h3>",
              props.data.what_you_learn,
              `<div id="meet_the_instructor"> \
                <img \
                  src=${props.data.instructorImage} \
                  alt=${props.data.instructorName} \
                /> \
                <p>${props.data.instructor_bio}</p> \
              </div>`,
            ],
          }}
        ></div>

        <CourseSidePanel data={props.data} />
      </div>
    </div>
  );
};

export default CourseContent;
