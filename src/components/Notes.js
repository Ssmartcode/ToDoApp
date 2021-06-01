import React from "react";
import Card from "./Card";
import { v4 } from "uuid";
const Notes = ({ input, notes, filter, handleNoteDelete }) => {
  if (!notes.length)
    return (
      <h2 className="mt-5 text-center text-dark">
        No to do task. Go and add one.
      </h2>
    );

  return (
    <div className="row mt-5">
      {notes.map((note, index) => {
        if (filter && note.importance !== filter) return null;
        const { importance, title, due, text } = note;
        return (
          <Card
            key={v4()}
            id={index}
            input={input}
            importance={importance}
            title={title}
            due={due}
            text={text}
            handleNoteDelete={handleNoteDelete}
          />
        );
      })}
    </div>
  );
};

export default Notes;
