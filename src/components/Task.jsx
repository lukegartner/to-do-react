import "./styles/Task.css";
import { useState } from "react";
// components
import More from "./More";

// icons
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { LuMoreHorizontal } from "react-icons/lu";

const Task = ({ id, title, note, complete, getTasks }) => {
  const [viewMore, setViewMore] = useState(false);

  const toggleComplete = () => {
    const toggledTask = { id, title, note, complete: !complete };

    fetch(`/todo/?id=${id}`, {
      method: "PUT",
      body: JSON.stringify(toggledTask),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        getTasks();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={complete ? "task complete" : "task"}>
      {complete ? (
        <ImCheckboxChecked
          className="check-icon"
          onClick={() => {
            toggleComplete(id);
          }}
        />
      ) : (
        <ImCheckboxUnchecked
          className="check-icon"
          onClick={() => {
            toggleComplete(id);
          }}
        />
      )}
      <h2>{title}</h2>
      <p>{note}</p>
      <LuMoreHorizontal
        className="more-icon"
        onClick={() => {
          setViewMore(!viewMore);
        }}
      />
      {viewMore ? <More id={id} getTasks={getTasks} /> : null}
    </div>
  );
};

export default Task;
