import { Task } from "./index";
import "./styles/Tasks.css";
// import { useState, useEffect } from "react";

const Tasks = ({ tasks, getTasks }) => {
  return (
    <div className="tasks">
      {tasks.map(({ id, title, note, complete }) => {
        return (
          <Task
            key={id}
            id={id}
            title={title}
            note={note}
            complete={complete}
            getTasks={getTasks}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
