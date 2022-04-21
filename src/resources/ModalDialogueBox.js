const ModalDialogueBox = (props) => {
  console.log(
    "[DIAGNOSTIC - ModalDialogueBox] displayModal: ",
    props.displayModal
  );
  return (
    <div
      className="modal"
      style={{
        display: props.displayModal,
        position: "flex",
        justifyItems: "center",
        height: "100%",
        width: "100%",
        background: "rgba(0,0,0,.5)",
      }}
    >
      <div
        className="modal_dialogue_box"
        style={{
          padding: "40px",
          background: "white",
          color: "black",
          position: "fixed",
          textAlign: "left",
          width: "50%",
          top: "25%",
          left: "25%",
          marginRight: "25%",
        }}
      >
        <h3>Success!</h3>
        <p>{props.message}</p>
        <p><b>{props.courseName}</b></p>
        <button
          className="btn-primary"
          onClick={(event) => {
            props.resetForm(event);
            props.setDisplayModal("none");
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default ModalDialogueBox;
