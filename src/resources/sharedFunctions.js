import courseData from "./courseData";

const sharedFunctions = {
  courseData: courseData,
  createFilterOptions: (data, keys = Object.keys(data[0])) => {
    const dataKeys = Object.keys(data[0]);
    const filterOptions = {};
    keys.map((key) => (filterOptions[key] = new Set()));
    data.forEach((obj, idx) => {
      keys.forEach((key, index) => {
        dataKeys.includes(key) ? filterOptions[key].add(obj[key]) : new Set();
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
