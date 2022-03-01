import { Carousel } from "react-bootstrap";
import { useState } from "react";
import { ReactComponent as CalendarIcon } from "../../images/general_icons/calendar.svg";

const filterOptions = [
  { courseType: ["type 1", "type 2", "type 3", ""] },
  {
    month: [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ],
  },
  { date: [] },
  { country: ["United States of America, England, India"] },
  { city: ["boston", "london", "johannesburg"] },
  { trainer: ["Raj Heda", "Person 2", "Person 3"] },
  { partner: ["Partern 1", "Partern 2", "", "Partern 3"] },
];

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
  },
  {
    instructorImage:
      "https://robohash.org/pariaturnecessitatibuset.jpg?size=80x80&set=set1",
    instructorName: "Raj Heda",
    courseName:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    location:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    date: "9/21/2021",
    time: "2:20 PM",
    partnerName: "Kwideo",
  },
  {
    instructorImage:
      "https://robohash.org/etametmolestiae.jpg?size=80x80&set=set1",
    instructorName: "Raj Heda",
    courseName:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    location:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    date: "6/7/2021",
    time: "2:59 PM",
    partnerName: "Yacero",
  },
  {
    instructorImage:
      "https://robohash.org/sedomnisfugit.jpg?size=80x80&set=set1",
    instructorName: "Raj Heda",
    courseName:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    location:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    date: "4/22/2021",
    time: "5:45 AM",
    partnerName: "Browsedrive",
  },
  {
    instructorImage:
      "https://robohash.org/laborevoluptatibusaut.jpg?size=80x80&set=set1",
    instructorName: "Alys Coryndon",
    courseName:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    location:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    date: "10/9/2021",
    time: "9:55 AM",
    partnerName: "Voomm",
  },
  {
    instructorImage:
      "https://robohash.org/omnisametnobis.jpg?size=80x80&set=set1",
    instructorName: "Alys Coryndon",
    courseName:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    location:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    date: "5/8/2021",
    time: "4:23 PM",
    partnerName: "Jetwire",
  },
  {
    instructorImage:
      "https://robohash.org/rerumdoloret.jpg?size=80x80&set=set1",
    instructorName: "Alys Coryndon",
    courseName:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    location:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    date: "11/20/2021",
    time: "12:51 PM",
    partnerName: "Leenti",
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
  },
  {
    instructorImage:
      "https://robohash.org/nulladucimusmagni.jpg?size=80x80&set=set1",
    instructorName: "Claribel Drewell",
    courseName:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    location:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    date: "11/19/2021",
    time: "6:47 AM",
    partnerName: "Gabcube",
  },
];

const CoursesList = () => {
  const courses = courseData.map((obj, index) => {
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

const courseDataKeys = Object.keys(courseData[0]);

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

const FilterButtons = () => {
  const [display, setDisplay] = useState("none");
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

  const buttons = filterKeys.map((key, idx) => {
    if (key !== "instructorImage" && key !== "location") {
      const formattedKey = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./g, (str) => str.toUpperCase());
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
            {filterOptions[idx][key].map((option, idx) => {
              return <li key={`option_${idx}`}>{option}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <></>;
    }
  });
  return buttons;
};

const Courses = () => {
  return (
    <>
      <div className="jumbotron">
        <h1>Upcoming Courses</h1>
      </div>
      <div id="upcoming_courses">
        <div id="course_filters">
          <h3>Course Filters</h3>
          {<FilterButtons />}
        </div>
        <div id="course_calendar">
          <h2>
            <CalendarIcon /> February
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

            <tbody>{<CoursesList />}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Courses;
