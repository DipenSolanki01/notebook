import React, { useState } from "react";
import '../App.css';

function Notes() {
  const [noteText, setNoteText] = useState("");

  const handleNoteChange = (e) => {
    setNoteText(e.target.value);
  };

  return (
    <div className="notes">

        <textarea
          value={noteText}
          onChange={handleNoteChange}
          placeholder="Write your note here..."
          required
        />

    </div>
  );
}

export default Notes;