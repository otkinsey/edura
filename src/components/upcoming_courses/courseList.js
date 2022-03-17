import { Link } from "react-router-dom";
import time from "./months";

/**
 * @description Componnent: Uses courseData/filteredData object to display a list of courses
 * @returns CourseList
 */
const CourseList = (props) => {
  const courses = props.data.map((obj, index) => {
    const truncatedcourse_name = obj.course_name
      .split(" ")
      .slice(0, 4)
      .join(" ");
    const startDate = new Date(obj.start_date);
    const endDate = new Date(obj.end_date);
    return (
      <tr
        key={`course_${index}`}
        style={{ fontSize: ".9rem", fontColor: "#aaa" }}
      >
        <td id="instructor_image">
          <div className="circle_frame">
            <img src={obj.instructorImage} alt={`${obj.trainer}'simage`} />
          </div>
          <div style={{ marginTop: "8px" }}>{obj.trainer}</div>
        </td>
        <td id="course_name">
          <Link
            to={`/course_details?course_name=${obj.course_name.replace(
              /\s/g,
              "_"
            )}`}
          >
            {obj.course_name}
          </Link>
        </td>
        <td id="description">{obj.description}</td>
        <td id="location">{`${obj.city}, ${obj.state} ${obj.country}`}</td>
        <td id="date">{`${
          time.months[startDate.getMonth()]
        } ${startDate.getDate()}`}</td>
      </tr>
    );
  });
  return courses;
};

export default CourseList;
