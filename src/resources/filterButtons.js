import { useState } from "react";
import DatePicker from "react-datepicker";

const FilterButtons = (props) => {
  // State variables
  const [startDate, setStartDate] = useState(new Date());

  const filterKeys = Object.keys(props.filterOptions);

  const selectLabelValue = (formattedKey) => {
    let changedValue = "";
    if (formattedKey === "Course name") {
      changedValue = "Course Type";
    } else if (formattedKey === "Start date") {
      changedValue = "Date";
    } else {
      changedValue = formattedKey;
    }
    return changedValue;
  };

  const filtersArray = [
    "course_name",
    "trainer",
    "month",
    "start_date",
    "country",
    "city",
    "certifying_body",
    "training_catgory",
  ];
  /**
   * @REFACTOR separate out as component
   */
  const renderButtons = () => {
    const buttons = filterKeys.map((filterKey, idx) => {
      if (filtersArray.includes(filterKey)) {
        const formattedKey = filterKey
          .replace(/_/g, " ")
          .replace(/([A-Z])/g, " $1")
          .replace(/^./g, (str) => str.toUpperCase());
        return (
          <div
            key={`filter_${idx}`}
            style={{
              position: "relative",
              textAlign: "left",
              color: "#9d9d9d",
            }}
          >
            <label
              style={{
                fontSize: ".85rem",
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
            >
              {selectLabelValue(formattedKey)}
            </label>
            <select
              className="filter_button"
              id={`filter_button_${filterKey}`}
              key={idx}
              defaultValue="select filter option"
              onChange={(event, mapKey) => {
                props.filterCourseData(filterKey, event.target.value);
                props.updateFilterOptions(event, event.target.value);
              }}
              style={{
                position: "relative",
                zIndex: "1",
                width: "100%",
                background: "white",
                borderTop: "1px solid #ccc",
                borderLeft: "none",
                borderRight: "none",
                borderBottom: "1px solid #ccc",
                margin: " 0 0 20px 0",
                padding: "10px 0px",
                fontSize: ".85rem",
                color: "#9d9d9d",
              }}
            >
              <option value="select filter option">select filter option</option>
              {Array.from(props.filterOptions[filterKey]).map(
                (val, index, mapData) => {
                  return (
                    <option
                      key={`option_${index}`}
                      style={{ cursor: "pointer" }}
                    >
                      {val}
                    </option>
                  );
                }
              )}
            </select>
            <ul
              className="filterOptions submenu"
              style={{
                display: "none",
                position: "absolute",
                zIndex: "2",
              }}
              id={`option_list_${filterKey}`}
            ></ul>
          </div>
        );
      } else {
        return <></>;
      }
    });
    return buttons;
  };

  return renderButtons();
};

export default FilterButtons;
