import courseData from "./courseData";

const sharedFunctions = {
  courseData: courseData,
  validateForm: () => {
    let fields = Array.from(document.getElementsByTagName("input"));
    fields.push(Array.from(document.getElementsByTagName("select")));
    fields.push(Array.from(document.getElementsByTagName("textarea")));
    fields = fields.flat().flat();
    const fieldValues = fields.map((f) => f.value);
    const activeFields = Array.from(document.getElementsByClassName("active"));
    if (activeFields.length > 0) {
      activeFields.forEach((f) => {
        const classArray = f.className.split(" ");
        f.className = classArray[0];
      });
    }
    fields.forEach((f) => {
      f.className = "full_length";
      if (f.value === "") {
        f.className += " alert";
      }
    });

    if (fieldValues.includes("")) {
      return false;
    } else {
      return true;
    }
  },
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
