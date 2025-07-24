import { useEffect, useState } from "react";
import Task from "./components/task";
import Notes from "./components/notes";
import "./App.css";



function App() {
  const [textData, setTextData] = useState("");
  const [tasklist, setTasklist] = useState([]);
  const [date, setDate] = useState("");
  const [tasktime, setTasktime] = useState("");

  const handleDelete = (id) => {
    setTasklist((prev) => prev.filter((_, index) => index !== id));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
      setTasklist((prev) => [
        ...prev,
        { textData, date, tasktime },
      ]);
      setTextData("");
      setDate("");
      setTasktime("");
    
  };

  return (
    <>
      <div className="card todo-container">
        <div className="herobar">
          <form onSubmit={handleSubmit}> 
          <input autoFocus value={textData} placeholder="task" type="text" onChange={(e) => setTextData(e.target.value) } required />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
          <input
            type="time"
            name="time"
            value={tasktime}
            onChange={(e) => setTasktime(e.target.value)}
            required
          />
          <button
            type="submit"
          >
            add
          </button>
          </form>
        </div>
        <div className="task-list-scroll">
          {tasklist.length ? (
            tasklist.map((tasks, index) => (
              <Task
                id={index}
                text={tasks.textData}
                date={tasks.date}
                time={tasks.tasktime}
                onDelete={handleDelete}
              ></Task>
            ))
          ) : (
            <div className="card"><p>let's start to be productive</p></div>
          )}
        </div>
      </div>
      <div className="notes">
        <div className="card">
          <button className="create-notes"  ><p className="emoji">➕</p></button>
          {/* <Notes /> */}
        </div>
        
      </div>
    </>
  );
}

export default App;
