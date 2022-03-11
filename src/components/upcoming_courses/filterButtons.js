import { useState } from "react";
import DatePicker from "react-datepicker";

const FilterButtons = (props) => {
  // State variables
  const [startDate, setStartDate] = useState(new Date());

  const regexp = /([A-Z])/g;
  const filterKeys = Object.keys(props.filterOptions);

  const filterWithDatePicker = (date, key, value) => {
    props.filterCourseData(key, value);
    setStartDate(date);
  };
  const filtersArray = [
    "course_name",
    "trainer",
    "month",
    "start_date",
    "end_date",
    "country",
    "city",
    "partner",
  ];
  /**
   * @REFACTOR separate out as component
   */
  const buttons = filterKeys.map((filterKey, idx) => {
    if (filtersArray.includes(filterKey)) {
      const formattedKey = filterKey
        .replace(/_/g, " ")
        .replace(/([A-Z])/g, " $1")
        .replace(/^./g, (str) => str.toUpperCase());
      return (
        <div
          style={{
            position: "relative",
            "text-align": "left",
            color: "#9d9d9d",
          }}
        >
          <lable
            style={{
              fontSize: ".85rem",
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          >
            {formattedKey === "Course name" ? "Course Type" : formattedKey}
          </lable>
          <select
            className="filter_button"
            id={`filter_button_${filterKey}`}
            key={idx}
            onChange={(event, mapKey) =>
              props.filterCourseData(filterKey, event.target.value)
            }
            onClick={(e) => props.setDisplayState(e)}
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
            {filterKey === "date" ? (
              <option>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    return filterWithDatePicker(date);
                  }}
                />
              </option>
            ) : (
              Array.from(props.filterOptions[filterKey]).map(
                (val, index, mapData) => {
                  return (
                    <option
                      key={`option_${index}`}
                      onClick={(event, mapKey) =>
                        props.filterCourseData(filterKey, val)
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {val}
                    </option>
                  );
                }
              )
            )}
          </select>
          <ul
            className="props. filterOptions submenu"
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

export default FilterButtons;
