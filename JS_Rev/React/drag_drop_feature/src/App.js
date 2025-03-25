import React, { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([
    { id: "note-1", content: "This is a note" },
    { id: "note-2", content: "This is another note" },
  ]);

  return <div className="App">
  </div>;
}

export default App;
