import { useSearchParams } from "react-router-dom";

import CourseHeader from "./course_header";
import CourseContent from "./course_content";

import courseData from "../dummyData";

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
    <div id="course_details">
      <CourseHeader courseName={courseName} data={filteredData} />
      <CourseContent data={filteredData} />
    </div>
  );
};

export default CourseDetail;
