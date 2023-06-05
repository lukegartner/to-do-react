import { useState, useEffect } from "react";
import { Header, TaskInputs, Tasks } from "../index";
import "./App.css";

function App() {
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
    <>
      <Header />
      <TaskInputs getTasks={getTasks} />
      <Tasks tasks={tasks} getTasks={getTasks} />
    </>
  );
}

export default App;
