import { useSearchParams } from "react-router-dom";

import CourseHeader from "./course_header";
import CourseContent from "./course_content";

import courseData from "../courseData";

const CourseDetail = () => {
  let [params] = useSearchParams();
  const courseName =
    params.get("courseName") === "''"
      ? "Default Course"
      : params.get("courseName").replace(/'/g, "").replace(/_/g, " ");

  const filteredData = courseData.filter(
    (i) => i["courseName"] === courseName
  )[0];
  return (
    <div id="course_details" style={{ backgroundColor: "#ECECEC" }}>
      <CourseHeader
        style={{ backgroundColor: "white" }}
        courseName={courseName}
        data={filteredData}
      />
      <CourseContent style={{ backgroundColor: "white" }} data={filteredData} />
    </div>
  );
};

export default CourseDetail;
