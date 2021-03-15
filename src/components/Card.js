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
  const headerBg =
    importance === "High"
      ? "bg-danger"
      : importance === "Medium"
      ? "bg-warning"
      : "bg-success";
  const findMatchingCard = (stringToMatch) => {
    return (
      (title.toLowerCase().includes(stringToMatch.toLowerCase()) ||
        text.toLowerCase().includes(stringToMatch.toLowerCase())) &&
      stringToMatch
    );
  };
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
          Importance: {importance}!
        </div>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <h6
            className={`card-subtitle mb-2 ${
              lateDueDate(due) ? "text-danger" : "text-mute"
            }`}
          >
            Due on {due}
          </h6>
          <div className="card-text"> {text}</div>
          <div
            className="delete-note text-end text-danger cursor-pointer mt-2"
            onClick={() => handleNoteDelete(id)}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
