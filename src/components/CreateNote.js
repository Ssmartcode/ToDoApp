import React, { useState } from "react";
const CreateNote = ({ notes, setNotes }) => {
  const [titleInput, setTitleInput] = useState("");
  const [dueInput, setDueInput] = useState("");
  const [importance, setImportance] = useState("Low");
  const [text, setText] = useState("");
  const dateToday = () => {
    let now = new Date();
    let day = ("0" + now.getDate()).slice(-2);
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    return now.getFullYear() + "-" + month + "-" + day;
  };
  dateToday();
  return (
    <div className="create-note row gy-3 pb-3 mt-5 mx-auto row-cols-md-2 ">
      {/* Title */}

      <div className="col-12">
        <input
          maxLength="50"
          type="text"
          className="form-control"
          placeholder="Title"
          onChange={(e) => setTitleInput(e.target.value)}
          value={titleInput}
        />
      </div>
      {/* Due */}
      <div className="col-12">
        <input
          type="date"
          className="form-control"
          placeholder="Due"
          onChange={(e) => setDueInput(e.target.value)}
          min={dateToday()}
          value={dueInput}
        />
      </div>
      {/* Select */}
      <div className="col-12 col-md-12">
        <select
          className="form-select"
          onChange={(e) => setImportance(e.target.value)}
        >
          <option value="Low">Low Importance</option>
          <option value="Medium">Medium Importance</option>
          <option value="High">High Importance</option>
        </select>
      </div>
      {/* Text area */}
      <div className="col-12 col-md-12 ">
        <textarea
          maxLength="250"
          className="form-control resize-none"
          cols="30"
          rows="7"
          placeholder="Note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      {/* Button */}
      <div className="col-12 mx-auto">
        <a
          href="/"
          className="btn btn-primary"
          style={{ width: "100%" }}
          onClick={() => {
            setNotes([
              ...notes,
              {
                title: titleInput,
                due: dueInput,
                importance: importance,
                text: text,
              },
            ]);
          }}
        >
          Create Note
        </a>
      </div>
    </div>
  );
};

export default CreateNote;
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi atque labore aliquid est, iusto in?
