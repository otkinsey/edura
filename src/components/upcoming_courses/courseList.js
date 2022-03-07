import { Link } from "react-router-dom";

/**
 * @description Componnent: Uses courseData/filteredData object to display a list of courses
 * @returns CourseList
 */
const CourseList = (props) => {
  const courses = props.data.map((obj, index) => {
    const truncatedCourseName = obj.courseName.split(" ").slice(0, 4).join(" ");

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
          <Link
            to={`/course_details?courseName=${truncatedCourseName.replace(
              /\s/g,
              "_"
            )}`}
          >
            {truncatedCourseName}
          </Link>
        </td>
        <td id="location">{obj.location}</td>
        <td id="date">{obj.date}</td>
        <td id="time">{obj.time}</td>
      </tr>
    );
  });
  return courses;
};

export default CourseList;
