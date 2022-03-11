<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
import time from "./months";

>>>>>>> 1868bf6126c6e04ff005d3bbe0c9113f84ff359b
/**
 * @description Componnent: Uses courseData/filteredData object to display a list of courses
 * @returns CourseList
 */
const CourseList = (props) => {
  const courses = props.data.map((obj, index) => {
<<<<<<< HEAD
=======
    const truncatedCourseName = obj.courseName.split(" ").slice(0, 4).join(" ");
    const startDate = new Date(obj.start_date);
    const endDate = new Date(obj.end_date);
>>>>>>> 1868bf6126c6e04ff005d3bbe0c9113f84ff359b
    return (
      <tr style={{ fontSize: ".9rem", fontColor: "#aaa" }}>
        <td id="instructor_image">
          <div className="circle_frame">
            <img
              src={obj.instructorImage}
              alt={`${obj.instructorName}'simage`}
            />
          </div>
          <div style={{ marginTop: "8px" }}>{obj.instructorName}</div>
        </td>
        <td id="course_name">
<<<<<<< HEAD
          {obj.courseName.split(" ").slice(0, 4).join(" ")}
        </td>
        <td id="location">{obj.location}</td>
        <td id="date">{obj.date}</td>
=======
          <Link
            to={`/course_details?courseName=${truncatedCourseName.replace(
              /\s/g,
              "_"
            )}`}
          >
            {truncatedCourseName}
          </Link>
        </td>
        <td id="location">{obj.description}</td>
        <td id="location">{obj.location}</td>
        <td id="date">{`${
          time.months[startDate.getMonth()]
        } ${startDate.getDate()}`}</td>
        <td id="date">{`${
          time.months[endDate.getMonth()]
        } ${endDate.getDate()}`}</td>
>>>>>>> 1868bf6126c6e04ff005d3bbe0c9113f84ff359b
        <td id="time">{obj.time}</td>
      </tr>
    );
  });
  return courses;
};

export default CourseList;
