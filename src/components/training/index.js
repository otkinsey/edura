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

  const filterOptions = shared.createFilterOptions(filteredData);

  const filterCourseData = (key, value) => {
    setFilteredData(
      courseData.filter((course) => course[key].trim() === value.trim())
    );
    return true;
  };

  const trainingCategories = new Set(
    filteredData.map((d) => d.training_category)
  );

  const createTrainingData = (filteredData) => {
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
  const trainingData = createTrainingData(filteredData);

  const renderTrainingList = (category, idx) => {
    let trainings = category.map((training, idx) => {
      return (
        <div class="training">
          <img
            src={training.cert_image}
            alt={training.course_name}
            className="training_image"
          />
          <Link
            to={`course_details?course_name=${training.course_name}`}
            className="button btn-primary"
          >
            {training.course_name}
          </Link>
        </div>
      );
    });
    return trainings;
  };

  return (
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
      </div>
      <div>
        {Object.keys(trainingData)
          .sort((a, b) => a - b)
          .map((category, idx) => {
            return (
              <div key={idx} className={`training_category`} id={`${category}`}>
                <h3>{category.replace(/_/g, " ")}</h3>
                <div className="trainings_list">
                  {renderTrainingList(trainingData[category])}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TrainingPage;
