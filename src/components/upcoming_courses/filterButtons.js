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
  /**
   * @REFACTOR separate out as component
   */
  const buttons = filterKeys.map((filterKey, idx) => {
    if (filterKey !== "instructorImage" && filterKey !== "location") {
      const formattedKey = filterKey
        .replace(/([A-Z])/g, " $1")
        .replace(/^./g, (str) => str.toUpperCase());
      return (
        <div style={{ position: "relative" }}>
          <button
            className="filter_button"
            id={`filter_button_${filterKey}`}
            key={idx}
            onClick={(e) => props.setDisplayState(e)}
            style={{ position: "relative", zIndex: "1" }}
          >
            {formattedKey}
          </button>
          <ul
            className="props. filterOptions submenu"
            style={{
              display: "none",
              position: "absolute",
              zIndex: "2",
            }}
            id={`option_list_${filterKey}`}
          >
            {filterKey === "date" ? (
              <li>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    return filterWithDatePicker(date);
                  }}
                />
              </li>
            ) : (
              Array.from(props.filterOptions[filterKey]).map(
                (val, index, mapData) => {
                  return (
                    <li
                      key={`option_${index}`}
                      onClick={(event, mapKey) =>
                        props.filterCourseData(filterKey, val)
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

export default FilterButtons;
