import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import FilterButtons from "../../resources/filterButtons";
import courseData from "../../resources/courseData.js";
import shared from "../../resources/sharedFunctions";

const TrainingPage = () => {
  const [filteredData, setFilteredData] = useState(courseData);
  const [filtered, setFiltered] = useState(false);

  const clearFilters = () => setFilteredData(courseData);

  const filterOptions = shared.createFilterOptions(courseData, [
    "course_name",
    "certifying_body",
    "role",
  ]);

  const filterCourseData = (key, value) => {
    setFilteredData(
      courseData.filter((course) => course[key].trim() === value.trim())
    );
    return true;
  };

  const trainingCategories = new Set(
    filteredData.map((d) => d.training_category)
  );

  const createTrainingDataObject = (filteredData) => {
    let trainings = {};
    trainingCategories.forEach((category) => (trainings[category] = []));
    filteredData.forEach((dataItem, idx) => {
      trainingCategories.forEach((category) => {
        if (category === dataItem.training_category) {
          trainings[category].push(dataItem);
        }
      });
    });
    return trainings;
  };
  const trainingData = createTrainingDataObject(filteredData);

  const renderTrainingList = (category, idx) => {
    let trainings = category.map((training, idx) => {
      const trainingWidth =
        training.training_category === "corporate trainings" ? "auto" : "250px";
      return (
        <div class="training">
          {training.course_name.includes("custom") ? (
            <img
              src="/images/Edura_logo.svg"
              alt={training.course_name}
              className="training_image"
              style={{ width: "220px", height: "72px" }}
            />
          ) : (
            <img
              src={training.cert_image}
              alt={training.course_name}
              className="training_image"
            />
          )}

          <div style={{ width: trainingWidth, padding: "0px 20px" }}>
            <hr />
            <Link
              to={`/course_details?course_name=${training.course_name.replace(
                /\s/g,
                "_"
              )}`}
              className="course_link"
            >
              {training.course_name}
            </Link>
            <hr />
          </div>
        </div>
      );
    });
    return trainings;
  };

  return (
    <div>
      <div
        className="jumbotron"
        style={{
          background:
            "center/cover no-repeat url(http://localhost:3000/images/courses_page_header.jpg)",
        }}
      >
        <h1>Courses</h1>
      </div>

      <div id="trainings">
        <div className="filters">
          <FilterButtons
            data={filteredData.length > 0 ? filteredData : shared.courseData}
            filterCourseData={filterCourseData}
            clearFilters={clearFilters}
            filterOptions={filterOptions}
            filtered={filtered}
            setFiltered={shared.setFiltered}
            filteredData={filteredData}
            updateFilterOptions={shared.updateFilterOptions}
          />
          <Link
            to="/"
            onClick={(event) => {
              shared.updateFilterOptions(event, "");
              event.preventDefault();
              clearFilters();
            }}
            style={{ fontWeight: "bold" }}
          >
            Clear Filters
          </Link>
        </div>
        <div>
          {Object.keys(trainingData)
            .reverse()
            .map((category, idx) => {
              return (
                <div
                  key={idx}
                  className={`training_category`}
                  id={`${category}`}
                >
                  <h3>{category.replace(/_/g, " ")}</h3>
                  {category === "corporate trainings" ? (
                    <div
                      className="trainings_list"
                      style={{ display: "grid", grid: "1fr / 1fr 1fr" }}
                    >
                      {renderTrainingList(trainingData[category])}
                    </div>
                  ) : (
                    <div className="trainings_list">
                      {renderTrainingList(trainingData[category])}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;
