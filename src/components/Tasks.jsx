import { Task } from "./index";
import { useState, useEffect } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    fetch("/todo")
      .then((response) => response.json())
      .then(setTasks)
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="tasks">
      {tasks.map(({ id, title, note, complete }) => {
        return <Task key={id} title={title} note={note} complete={complete} />;
      })}
    </div>
  );
};

export default Tasks;
