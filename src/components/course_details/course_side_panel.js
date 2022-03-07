const CourseSidePanel = (props) => {
  const generateCourseReviews = (reviewsText, reviewsImages) => {
    const reviewsTextArray = reviewsText.split(",").slice(0, 4);
    const reviewImages = reviewsImages.split(",");
    const reviewDOMElements = reviewsTextArray.map((rev, idx) => {
      return (
        <div
          className="course_review"
          style={{ display: "grid", grid: "1fr / 4fr 10fr", gap: "20px" }}
        >
          <div style={{ background: "#553e1f" }}>
            <img
              style={{
                height: "80px",
                width: "100%",
                margin: "auto",
                objectFit: "cover",
              }}
              id="course_review_image"
              src={reviewImages[idx]}
              alt=""
            />
          </div>
          <div id="course_review_text">{rev}</div>
        </div>
      );
    });
    return reviewDOMElements;
  };

  return (
    <div style={{ backgroundColor: "white", padding: "40px" }}>
      <div id="course_effort" style={{ display: "grid", grid: "1fr/ 2fr 5fr" }}>
        <h4>Duration</h4>
        <span>{props.data.effort_duration} days</span>
      </div>
      <div id="course_price" style={{ display: "grid", grid: "1fr/ 2fr 5fr" }}>
        <h4>Price</h4>
        <span>${props.data.price}.00</span>
      </div>
      <div
        id="course_reviews"
        style={{
          display: "grid",
          grid: "repeat(4, 1fr) / 1fr",
          gap: "20px",
        }}
      >
        <h4>Reviews:</h4>
        {generateCourseReviews(
          props.data.review_text,
          props.data.review_images
        )}
      </div>
    </div>
  );
};

export default CourseSidePanel;
