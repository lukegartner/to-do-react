import "./styles/Task.css";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { BsTrash3Fill } from "react-icons/bs";

const Task = ({ title, note, complete }) => {
  return (
    <div className="task">
      {complete ? (
        <ImCheckboxChecked className="check-icon" />
      ) : (
        <ImCheckboxUnchecked className="check-icon" />
      )}
      <h2>{title}</h2>
      <p>{note}</p>
      <BsTrash3Fill className="trash-icon" />
    </div>
  );
};

export default Task;
