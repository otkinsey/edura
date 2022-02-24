import { Carousel } from "react-bootstrap";
import { ReactComponent as CalendarIcon } from "../../images/general_icons/calendar.svg";

const courseData = [
  {
    instructorImage:
      "https://robohash.org/rationedolorevitae.jpg?size=80x80&set=set1",
    instructorName: "Alys Coryndon",
    courseName:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    date: "10/8/2021",
    time: "9:14 PM",
    partnerName: "Photobean",
  },
  {
    instructorImage:
      "https://robohash.org/pariaturnecessitatibuset.jpg?size=80x80&set=set1",
    instructorName: "Moishe Dollin",
    courseName:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    date: "9/21/2021",
    time: "2:20 PM",
    partnerName: "Kwideo",
  },
  {
    instructorImage:
      "https://robohash.org/etametmolestiae.jpg?size=80x80&set=set1",
    instructorName: "Sigismund Kinkaid",
    courseName:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    date: "6/7/2021",
    time: "2:59 PM",
    partnerName: "Yacero",
  },
  {
    instructorImage:
      "https://robohash.org/sedomnisfugit.jpg?size=80x80&set=set1",
    instructorName: "Gorden Germann",
    courseName:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    date: "4/22/2021",
    time: "5:45 AM",
    partnerName: "Browsedrive",
  },
  {
    instructorImage:
      "https://robohash.org/laborevoluptatibusaut.jpg?size=80x80&set=set1",
    instructorName: "Giacomo Ducastel",
    courseName:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    date: "10/9/2021",
    time: "9:55 AM",
    partnerName: "Voomm",
  },
  {
    instructorImage:
      "https://robohash.org/omnisametnobis.jpg?size=80x80&set=set1",
    instructorName: "Terese Heggman",
    courseName:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    date: "5/8/2021",
    time: "4:23 PM",
    partnerName: "Jetwire",
  },
  {
    instructorImage:
      "https://robohash.org/rerumdoloret.jpg?size=80x80&set=set1",
    instructorName: "Igor Fearn",
    courseName:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    description:
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
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    date: "10/1/2021",
    time: "3:23 PM",
    partnerName: "Zoomdog",
  },
  {
    instructorImage:
      "https://robohash.org/nulladucimusmagni.jpg?size=80x80&set=set1",
    instructorName: "Clive Robjohns",
    courseName:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    description:
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
        <td id="description">{obj.description}</td>
        <td id="date">{obj.date}</td>
        <td id="time">{obj.time}</td>
      </tr>
    );
  });
  return courses;
};

const courseDataKeys = Object.keys(courseData[0]);

const FilterButtons = () => {
  const regexp = /([A-Z])/g;
  const buttons = courseDataKeys.map((key, idx) => {
    return (
      <button className="filter_button" key={idx}>
        {key.replace(regexp, " $1").replace(/^./g, (str) => str.toUpperCase())}
      </button>
    );
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
                <th id="description">decription</th>
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
