import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";
import BottomBar from "./components/BottomBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  const setLocalNotes = (notes) => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  };
  const getLocalNotes = () => {
    const notes = window.localStorage.getItem("notes");
    return JSON.parse(notes) || [];
  };
  const [notes, setNotes] = useState(getLocalNotes());
  const [input, setInput] = useState("");
  const handleButtonClick = (input) => {
    setInput(input);
  };
  const handleNoteDelete = (id) => {
    const newNotes = notes.filter((_, index) => index !== id);
    setNotes(newNotes);
  };
  const deleteAll = () => {
    setNotes([]);
  };
  useEffect(() => {
    if (notes) setLocalNotes(notes);
  }, [notes]);
  return (
    <Router>
      <Navigation handleButtonClick={handleButtonClick} />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Notes
              input={input}
              notes={notes}
              filter={""}
              handleNoteDelete={handleNoteDelete}
            />
          </Route>
          <Route path="/high">
            <Notes
              input={input}
              notes={notes}
              filter={"High"}
              handleNoteDelete={handleNoteDelete}
            />
          </Route>
          <Route path="/medium">
            <Notes
              input={input}
              notes={notes}
              filter={"Medium"}
              handleNoteDelete={handleNoteDelete}
            />
          </Route>
          <Route path="/low">
            <Notes
              input={input}
              notes={notes}
              filter={"Low"}
              handleNoteDelete={handleNoteDelete}
            />
          </Route>
          <Route path="/add">
            <CreateNote notes={notes} setNotes={setNotes} />
          </Route>
        </Switch>
      </div>
      <BottomBar deleteAll={deleteAll} />
    </Router>
  );
}

export default App;
