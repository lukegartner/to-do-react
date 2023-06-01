const Task = ({ title, note, complete }) => {
  return (
    <div className="task">
      <h2>{title}</h2>
      <p>{note}</p>
    </div>
  );
};

export default Task;
