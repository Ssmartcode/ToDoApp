import React from "react";

const BottomBar = ({ deleteAll }) => {
  return (
    <div className="bottom-bar d-flex align-items-center justify-content-center position-fixed  right-0 left-0 bottom-0 p-3">
      <div className="nav bg-transparent">
        <a href="/high" className="link-item text-danger mx-4">
          High
        </a>
        <a href="/medium" className="link-item text-warning mx-4">
          Medium
        </a>
        <a href="/low" className="link-item text-success mx-4">
          Low
        </a>
      </div>
      <a
        href="/notes"
        className="btn-delete btn btn-danger position-absolute right-0"
        onClick={() => {
          deleteAll();
        }}
      >
        Delete All
      </a>
    </div>
  );
};

export default BottomBar;
