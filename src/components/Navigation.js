import React, { useState } from "react";

const Navigation = ({ handleButtonClick }) => {
  const [term, setTerm] = useState("");

  // handler
  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <ul className="nav py-3 mb-3">
      <div className="container d-flex justify-content-between align-items-center flex-nowrap ">
        <li className="nav-item d-flex justify-content-between">
          <input
            type="text"
            className="form-control"
            onChange={handleInputChange}
            value={term}
          />
          <input
            type="button"
            className="btn btn-primary mx-2"
            value="Find note"
            onClick={() => handleButtonClick(term)}
          />
        </li>
        <li className="nav-item d-flex justify-content-between fw-bolds">
          <a href="/" className="link-item text-light mx-3">
            Notes
          </a>
          <a href="/add" className="link-item text-light mx-3">
            <i
              className="fas fa-plus d-none d-sm-inline
            "
            ></i>{" "}
            Add
          </a>
        </li>
      </div>
    </ul>
  );
};

export default Navigation;
