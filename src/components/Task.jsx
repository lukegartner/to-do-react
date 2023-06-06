import "./styles/Task.css";
import { useState } from "react";
// components
import More from "./More";

// icons
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { LuMoreHorizontal } from "react-icons/lu";

const Task = ({ id, title, note, complete, getTasks }) => {
  const [viewMore, setViewMore] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editNote, setEditNote] = useState(note);

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

  const editTask = () => {
    const editedTask = { id, title: editTitle, note: editNote, complete };

    fetch(`/todo/?id=${id}`, {
      method: "PUT",
      body: JSON.stringify(editedTask),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setIsEditing(false);
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
      {isEditing ? (
        <input
          type="text"
          onChange={(e) => setEditTitle(e.target.value)}
          value={editTitle}
        />
      ) : (
        <h2>{title}</h2>
      )}

      {isEditing ? (
        <textarea
          onChange={(e) => setEditNote(e.target.value)}
          value={editNote}
        />
      ) : (
        <p>{note}</p>
      )}
      {isEditing ? <button onClick={editTask}>Edit</button> : null}
      <LuMoreHorizontal
        className="more-icon"
        onClick={() => {
          setViewMore(!viewMore);
        }}
      />
      {viewMore ? (
        <More
          id={id}
          title={title}
          note={note}
          complete={complete}
          getTasks={getTasks}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setViewMore={setViewMore}
        />
      ) : null}
    </div>
  );
};

export default Task;
