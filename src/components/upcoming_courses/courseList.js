/**
 * @description Componnent: Uses courseData/filteredData object to display a list of courses
 * @returns CourseList
 */
const CourseList = (props) => {
  const courses = props.data.map((obj, index) => {
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
          {obj.courseName.split(" ").slice(0, 4).join(" ")}
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
