import { Task } from "./index";
import "./styles/Tasks.css";
// import { useState, useEffect } from "react";

const Tasks = ({ tasks }) => {
  return (
    <div className="tasks">
      {tasks.map(({ id, title, note, complete }) => {
        return <Task key={id} title={title} note={note} complete={complete} />;
      })}
    </div>
  );
};

export default Tasks;
