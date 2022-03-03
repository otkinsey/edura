import React from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as CalendarIcon } from "../../images/general_icons/calendar.svg";

const courseData = [
  {
    instructorImage:
      "https://robohash.org/rationedolorevitae.jpg?size=80x80&set=set1",
    instructorName: "Alys Coryndon",
    courseName:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    location:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    date: "10/8/2021",
    time: "9:14 PM",
    partnerName: "Photobean",
    month: filterOptions[1].month[parseInt("10") - 1],
  },
  {
    instructorImage:
      "https://robohash.org/pariaturnecessitatibuset.jpg?size=80x80&set=set1",
    instructorName: "Moishe Dollin",
    courseName:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    location:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    date: "9/21/2021",
    time: "2:20 PM",
    partnerName: "Kwideo",
    month: filterOptions[1].month[parseInt("9") - 1],
  },
  {
    instructorImage:
      "https://robohash.org/etametmolestiae.jpg?size=80x80&set=set1",
    instructorName: "Sigismund Kinkaid",
    courseName:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    location:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    date: "6/7/2021",
    time: "2:59 PM",
    partnerName: "Yacero",
    month: filterOptions[1].month[parseInt("6") - 1],
  },
  {
    instructorImage:
      "https://robohash.org/sedomnisfugit.jpg?size=80x80&set=set1",
    instructorName: "Gorden Germann",
    courseName:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    location:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    date: "4/22/2021",
    time: "5:45 AM",
    partnerName: "Browsedrive",
    month: filterOptions[1].month[parseInt("4") - 1],
  },
  {
    instructorImage:
      "https://robohash.org/laborevoluptatibusaut.jpg?size=80x80&set=set1",
    instructorName: "Giacomo Ducastel",
    courseName:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    location:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    date: "10/9/2021",
    time: "9:55 AM",
    partnerName: "Voomm",
    month: filterOptions[1].month[parseInt("10") - 1],
  },
  {
    instructorImage:
      "https://robohash.org/omnisametnobis.jpg?size=80x80&set=set1",
    instructorName: "Terese Heggman",
    courseName:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    location:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    date: "5/8/2021",
    time: "4:23 PM",
    partnerName: "Jetwire",
    month: filterOptions[1].month[parseInt("5") - 1],
  },
  {
    instructorImage:
      "https://robohash.org/rerumdoloret.jpg?size=80x80&set=set1",
    instructorName: "Igor Fearn",
    courseName:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    location:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    date: "11/20/2021",
    time: "12:51 PM",
    partnerName: "Leenti",
    month: filterOptions[1].month[parseInt("11") - 1],
  },
  {
    instructorImage:
      "https://robohash.org/placeatcumdolorum.jpg?size=80x80&set=set1",
    instructorName: "Claribel Drewell",
    courseName:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    location:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    date: "10/1/2021",
    time: "3:23 PM",
    partnerName: "Zoomdog",
    month: filterOptions[1].month[parseInt("10") - 1],
  },
  {
    instructorImage:
      "https://robohash.org/nulladucimusmagni.jpg?size=80x80&set=set1",
    instructorName: "Clive Robjohns",
    courseName:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    location:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    date: "11/19/2021",
    time: "6:47 AM",
    partnerName: "Gabcube",
    month: filterOptions[1].month[parseInt("11") - 1],
  },
];

// const courseDataKeys = Object.keys(courseData[0]);

const showDropDown = (event, display) => {
  const optionListId = event.target.id.replace("filter_button", "option_list");
  const optionLists = Array.from(
    document.getElementsByClassName("filterOptions")
  );
  console.log(optionLists);
  optionLists.forEach((list) => {
    list.style["display"] = "none";
  });
  const target = document.getElementById(optionListId);
  console.log(target.style["display"]);
  target.style["display"] = display;
};

const FilterButtons = (props) => {
  // State variables
  const [display, setDisplay] = useState("none");
  const [startDate, setStartDate] = useState(new Date());
  const regexp = /([A-Z])/g;
  const filterKeys = filterOptions.map((k) => Object.keys(k)[0]);

  const setDisplayState = (event) => {
    if (display === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
    showDropDown(event, display);
  };

  const filterWithDatePicker = (date, key, value) => {
    props.filterCourseData(key, value);
    setStartDate(date);
  };
  /**
   * @REFACTOR separate out as component
   */
  const buttons = filterKeys.map((key, idx) => {
    if (key !== "instructorImage" && key !== "location") {
      return (
        <div style={{ position: "relative" }}>
          <button
            className="filter_button"
            id={`filter_button_${key}`}
            key={idx}
            onClick={(e) => setDisplayState(e)}
            style={{ position: "relative", zIndex: "1" }}
          >
            {formattedKey}
          </button>
          <ul
            className="filterOptions submenu"
            style={{
              display: "none",
              position: "absolute",
              zIndex: "2",
            }}
            id={`option_list_${key}`}
          >
            {key === "date" ? (
              <li>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    return filterWithDatePicker(date);
                  }}
                />
              </li>
            ) : (
              filterOptions[idx][key].map(
                (
                  val,
                  index,
                  mapData,
                  mapKey = Object.keys(filterOptions[idx])[0]
                ) => {
                  return (
                    <li
                      key={`option_${index}`}
                      onClick={(event, mapKey) =>
                        props.filterCourseData(key, val)
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {val}
                    </li>
                  );
                }
              )
            )}
          </ul>
        </div>
      );
    } else {
      return <></>;
    }
  });
  return buttons;
};

/**
 * @description Componnent: Uses courseData/filteredData object to display a list of courses
 * @returns CourseList
 */
const CoursesList = (props) => {
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

const Courses = () => {
  //  State variables:
  const [filteredData, setFilteredData] = useState(courseData);

  /**
   * @description filters course data according to params
   * @param {*} key
   * @param {*} value
   * @param {*} courseData
   * @returns
   */
  const filterCourseData = (key, value) => {
    setFilteredData(courseData.filter((course) => course[key] === value));
    return filteredData;
  };

  const clearFilters = () => setFilteredData(courseData);
  return (
    <>
      <div className="jumbotron">
        <h1>Upcoming Courses</h1>
      </div>
      <div id="upcoming_courses">
        <div id="course_filters">
          <h3>Course Filters</h3>
          {
            <FilterButtons
              data={filteredData.length > 0 ? filteredData : courseData}
              filterCourseData={filterCourseData}
              clearFilters={clearFilters}
            />
          }
          <Link
            to="/"
            onClick={(event) => {
              event.preventDefault();
              clearFilters();
            }}
            style={{ fontWeight: "bold" }}
          >
            Clear Filters
          </Link>
        </div>
        <div id="course_calendar">
          <h2>
            <CalendarIcon />{" "}
            {filteredData.length > 0 ? filteredData[0]["month"] : "January"}
          </h2>
          <table className="table">
            <thead>
              <tr className="table_headings">
                <th id="instructor_image">instructor</th>
                <th id="course_name">course name</th>
                <th id="location">decription</th>
                <th id="date">date</th>
                <th id="time">time</th>
              </tr>
            </thead>

            <tbody>
              {
                <CoursesList
                  data={filteredData.length > 0 ? filteredData : courseData}
                />
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Courses;
