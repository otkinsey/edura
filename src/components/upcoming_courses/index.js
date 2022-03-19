import React from "react";

import FilterButtons from "./filterButtons";
import courseData from "../courseData";
import CourseList from "./courseList";

import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as CalendarIcon } from "../../images/general_icons/calendar.svg";

const createFilterOptions = (data) => {
  const dataKeys = Object.keys(data[0]);
  const filterOptions = {};
  data.forEach((obj, idx) => {
    dataKeys.forEach((key, index) => {
      filterOptions[key] = filterOptions[key]
        ? filterOptions[key].add(obj[key])
        : new Set();
    });
  });
  return filterOptions;
};

const filterOptions = createFilterOptions(courseData);

const showDropDown = (event, display) => {
  const optionListId = event.target.id.replace("filter_button", "option_list");
  const optionLists = Array.from(
    document.getElementsByClassName("filterOptions")
  );

  optionLists.forEach((list) => {
    list.style["display"] = "none";
  });
  const target = document.getElementById(optionListId);

  if (event.target.className === "filter_button") {
    target.style["display"] = display;
  }
};

const Courses = () => {
  //  State variables:
  const [filteredData, setFilteredData] = useState(courseData);
  const [filtered, setFiltered] = useState(false);
  /**
   * @description filters course data according to params
   * @param {*} key
   * @param {*} value
   * @param {*} courseData
   * @returns
   */
  const filterCourseData = (key, value) => {
    setFilteredData(
      courseData.filter((course) => course[key].trim() === value.trim())
    );
    return true;
  };

  const clearFilters = () => setFilteredData(courseData);

  const updateFilterOptions = (event, currentOption) => {
    const filterButtons = Array.from(
      document.getElementsByClassName("filter_button")
    );

    filterButtons.forEach((button) =>
      button.value === currentOption
        ? (button.value = currentOption)
        : (button.value = "select filter option")
    );
  };

  return (
    <div className="component">
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
              filterOptions={filterOptions}
              showDropDown={showDropDown}
              filtered={filtered}
              setFiltered={setFiltered}
              filteredData={filteredData}
              updateFilterOptions={updateFilterOptions}
            />
          }
          <Link
            to="/"
            onClick={(event) => {
              updateFilterOptions(event, "");
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
            <CalendarIcon /> Calendar
          </h2>
          <table className="table">
            <thead>
              <tr className="table_headings">
                <th id="instructor_image">instructor</th>
                <th id="course_name">course name</th>
                {/* <th id="location">description</th> */}
                <th id="location">location</th>
                <th id="date">Date</th>
              </tr>
            </thead>

            <tbody>
              {
                <CourseList
                  data={filteredData.length > 0 ? filteredData : courseData}
                />
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Courses;
