import { useSearchParams } from "react-router-dom";

import CourseHeader from "./course_header";
import CourseContent from "./course_content";

import courseData from "../../resources/courseData";

const CourseDetail = () => {
  let [params] = useSearchParams();
  const course_name =
    params.get("course_name") === "''"
      ? "Default Course"
      : params.get("course_name").replace(/'/g, "").replace(/_/g, " ");

  const filteredData = courseData.filter(
    (i) => i["course_name"] === course_name
  )[0];
  return (
    <div
      id="course_details"
      className="main_content"
      style={{ backgroundColor: "#ECECEC" }}
    >
      <CourseHeader
        style={{ backgroundColor: "white" }}
        course_name={course_name}
        data={filteredData}
      />
      <CourseContent style={{ backgroundColor: "white" }} data={filteredData} />
    </div>
  );
};

export default CourseDetail;
