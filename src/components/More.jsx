import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import "./styles/More.css";
const More = ({ id, getTasks, isEditing, setIsEditing, setViewMore }) => {
  const deleteTask = () => {
    fetch(`/todo/?id=${id}`, {
      method: "DELETE",
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
    <div className="more">
      <AiFillEdit
        className="edit-icon"
        onClick={() => {
          setIsEditing(!isEditing);
          setViewMore(false);
        }}
      />
      <AiFillDelete className="delete-icon" onClick={deleteTask} />
    </div>
  );
};

export default More;
