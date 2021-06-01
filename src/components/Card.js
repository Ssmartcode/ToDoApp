import React, { useRef } from "react";

const Card = ({
  input,
  importance,
  title,
  due,
  id,
  text,
  handleNoteDelete,
}) => {
  const cardRef = useRef();

  // set header bg-color
  const headerBg =
    importance === "High"
      ? "bg-danger"
      : importance === "Medium"
      ? "bg-warning"
      : "bg-success";
  // search for matchin word in the title of the note or in the content of it

  const findMatchingCard = (stringToMatch) => {
    return (
      (title.toLowerCase().includes(stringToMatch.toLowerCase()) ||
        text.toLowerCase().includes(stringToMatch.toLowerCase())) &&
      stringToMatch
    );
  };

  //check if the given data is greater than today
  const lateDueDate = (dueDate) => {
    let today = new Date();
    let day = ("0" + today.getDate()).slice(-2);
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    return today.getFullYear() + "-" + month + "-" + day === dueDate;
  };
  return (
    <div className="col-md-6 col-xl-4 mb-2">
      <div
        ref={cardRef}
        className={`card ${findMatchingCard(input) ? "highlight" : ""}`}
      >
        <div className={`card-header ${headerBg} text-center text-light`}>
          <span>Importance: {importance}!</span>
          <span
            className={`close ${importance === "High" && "cross-light"}`}
            onClick={() => handleNoteDelete(id)}
          ></span>
        </div>
        <div className="card-body">
          <h3 className="card-title text-center mb-3">{title}</h3>
          <p
            className={`card-subtitle mb-2 text-right ${
              lateDueDate(due) ? "text-danger" : "text-mute"
            }`}
          >
            Due on {due}
          </p>
          <div className="card-text"> {text}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
