import React, { useState } from "react";
import '../App.css'



function Task({ text, date, time, id ,onDelete}) {
  const [isdone, setIsdone] = useState(false);
  return (
    <>
      <div className="taskpannel card">
        <button className="" onClick={() => setIsdone((prev) => !prev)}>
          {isdone ? "✅" : "⭕"}
        </button>
        <div>
          {text} is due til ⏰{time ? time : "not set"} of{" "}
          {date ? date : "not set"}
        </div>
        <button className="" onClick={()=>onDelete(id)}>🗑️</button>
      </div>
    </>
  );
}

export default Task;