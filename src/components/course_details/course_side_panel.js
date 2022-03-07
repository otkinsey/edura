const CourseSidePanel = (props) => {
  return (
    <div>
      <div style={{ display: "grid", grid: "1fr/ 5fr, 5fr" }}>
        <h4>Duration</h4>
        <span>{props.data.effort_duration} days</span>
      </div>
      <div style={{ display: "grid", grid: "1fr/ 5fr, 5fr" }}>
        <h4>Price</h4>
        <span>${props.data.price}.00</span>
      </div>
    </div>
  );
};

export default CourseSidePanel;
