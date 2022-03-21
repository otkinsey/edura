import courseData from "./courseData";

const sharedFunctions = {
  courseData: courseData,
  createFilterOptions: (data) => {
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
  },

  updateFilterOptions: (event, currentOption) => {
    const filterButtons = Array.from(
      document.getElementsByClassName("filter_button")
    );

    filterButtons.forEach((button) =>
      button.value === currentOption
        ? (button.value = currentOption)
        : (button.value = "select filter option")
    );
  },
};

export default sharedFunctions;
