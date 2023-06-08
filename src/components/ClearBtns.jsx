const ClearBtns = ({ getTasks }) => {
  const clearCompleted = () => {
    fetch(`/todo/?type=completed`, {
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
  const clearAll = () => {
    fetch(`/todo`, {
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
    <div className="clear-btns">
      <button type="button" onClick={clearCompleted}>
        Clear Completed
      </button>
      <button type="button" onClick={clearAll}>
        Clear All
      </button>
    </div>
  );
};

export default ClearBtns;
